'use strict';

var util = require('util');
var clc = require('cli-color');
var RpcClient = require('../VistaJS1.1/RpcClient').RpcClient;
var RpcParameter = require('../VistaJS1.1/RpcParameter').RpcParameter;
var async = require('async');
var logger = require('bunyan').createLogger({
    name: 'RpcClient',
    path: 'bunyan.log',
    level: 'info'
})

function inspect(obj) {
    return obj ? util.inspect(obj, {
        depth: null
    }) : '';
}

function printResult(error, result) {
    console.log(clc.red(inspect(error)));
    console.log(clc.cyan(inspect(result)));
}

function printJsonResult(error, result) {
    console.log(clc.red(inspect(error)));

    var output = result;
    try {
        output = JSON.parse(result);
    } catch (err) {
        // use default
    }

    console.log(clc.cyan(inspect(output)));
}

var context = 'OR CPRS GUI CHART';

var config = {
    context: context,
    host: '10.0.2.15',
    port: 9430,
    accessCode: 'fakenurse1',
    verifyCode: 'NEWVERIFY1!',
    localIP: '127.0.0.1',
    localAddress: 'localhost',
    connectTimeout: 3000,
    sendTimeout: 10000
};

console.log('********** start');
var client = RpcClient.create(logger, config);
client.connect(function(error, result) {
    if (error) {
        console.log('Unable to connect to Vista');
        console.log(error);
        return;
    }

    console.log(result);
    console.log('connected');
});

function runRPC(rpc, rpcArgs, callback) {
    var cb = function(error, result) {
        printResult(error, result);
        if (callback) callback(error, result);
    };
    client.execute(rpc, rpcArgs, cb);
}

function closeClient() {
    client.close(function(error, result) {
        console.log('********** close');
        if (error) {
            console.log('close() was not clean');
            console.log(error);
            return;
        }

        try {
            result = JSON.parse(result);
        } catch (err) {
            // do nothing
        }
        console.log('%j', result);
        console.log('********** end');
    });
}

function reportPatients() {
    console.log("\n\n----------\nFirst list Patients");
    console.log("... note that return type is array and that is parsed automatically.\n");

    var rpc = 'ORWPT LIST ALL';
    var rpcArgs = [
        RpcParameter.literal('1'),
        RpcParameter.literal('1')
    ];
    var callback = function(error, result) {
        processEachPatient(result);
    }
    runRPC(rpc, rpcArgs, callback);
}

// Note: only doing first two.
function processEachPatient(patients) {
    console.log("\n\nGet details about first two patients ...");
    var funcs = [];
    patients = patients.split('\r\n');
    patients.some(function(patientStr, index) {
        var tmp = function(patientStr) {
            return function(callback) {
                console.log("\n\n----------\nProcess Patient: " + patientStr + "\n");
                var id = patientStr.substring(0, patientStr.indexOf('^'));
                getPatientInfo(id, callback);
            }
        }
        funcs.push(tmp(patientStr));
        // Only doing FIRST TWO patients
        if (index === 1) {
            return true;
        }
    });
    async.series(funcs, function(error, result) {
        closeClient();
        console.log('\n\n\n====== \nall done.\n');
    })
}

/*
 * A series of RPCs that return clinical data per patient.
 */
function getPatientInfo(id, cb) {
    async.series([
            function rpc0(callback) {
                var rpcName = 'ORWPT SELECT';
                var rpcArgs = [RpcParameter.literal(id)];
                runRPC(rpcName, rpcArgs, callback);
            },
            function rpc1(callback) {
                var rpcName = 'ORWPT1 PRCARE';
                var rpcArgs = [RpcParameter.literal(id)];
                runRPC(rpcName, rpcArgs, callback);
            },
            // TODO: returns NO DATA (one of the standard options) but there is data as
            // VPR below shows. Find out if wrong arguments (will do in VDM/prototypes/vitals)
            function rpc2(callback) {
                var rpcName = 'GMV V/M ALLDATA';
                var rpcArgs = [RpcParameter.literal(id)];
                runRPC(rpcName, rpcArgs, callback);
            },
            // List Allergies
            function rpc3(callback) {
                var rpcName = 'ORQQAL LIST';
                var rpcArgs = [RpcParameter.literal(id)];
                runRPC(rpcName, rpcArgs, callback);
            },
            // Not used by CPRS: VPR rollup used for patient data record assembly. Can ask for
            // 'all' (remove second argument) or list domains wanted.
            //
            // Note: unless logged in user has key '', then this call will fail (shows
            // error returned when no permission)
            // Error would be: '-4 RPC [VPR GET PATIENT DATA] is not allowed to be run: The remote procedure VPR GET PATIENT DATA is not registered to the option OR CPRS GUI CHART.'
            function rpc4(callback) {
                var rpcName = "VPR GET PATIENT DATA";
                var rpcArgs = [
                    RpcParameter.literal(id),
                    RpcParameter.literal("demographic;vital;allergy")
                ];
                runRPC(rpcName, rpcArgs, callback);
            }
        ],
        function(error, result) {
            if (!error) {
                console.log('\n... finished processing one (more) patient.\n\n');
            }
            cb();
        });
}

reportPatients();