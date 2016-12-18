The rpcNodeOnlyServer is based on the rpcServer module which uses the rpcFacade from MVDM module to run either the rpcLocker or rpcRunner. It is configured and run in a very similar way to rpcServer. See the [README](https://github.com/vistadataproject/nodeVISTA/blob/master/rpcServer/README.md) for rpcServer.

The first main difference in the rpcNodeOnlyServer is that it is a single process. The main purpose of this server was to do timing analysis so the single process eliminates the overhead from the latency in the interprocess communication of master and worker present in the original rpcServer.

The second difference is that, there are utilityRPCs that are implemented directly in javascript uesd in the RPC Locker. These do not need to access patient data, for example, calls that would return a date. rpcNodeOnlyServer adds a third path besides the Locker or Runner. If called RPC is in utilityRPCs, the javascript is called directly instead of going through the Locker. This allows a full bypass of crossing the JS/MUMPS boundary. The results from timing tests help to investigate areas that may cause slowdowns. This path is configurable from the MVDM management page.