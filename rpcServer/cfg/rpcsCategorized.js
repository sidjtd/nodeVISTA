var rpcsCategorized = {
    "DG CHK BS5 XREF ARRAY": {
        "mn": "DG", 
        "catag": "READ STRUCTURED"
    }, 
    "DG CHK BS5 XREF Y/N": {
        "mn": "DG", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "patient with same name - XREF use ... ie/ ala parameter, special handling"
    }, 
    "DG CHK PAT/DIV MEANS TEST": {
        "mn": "DG", 
        "catag": "READ STRUCTURED", 
        "descr": "MEANS test check"
    }, 
    "DG SENSITIVE RECORD ACCESS": {
        "mn": "DG", 
        "catag": "AUTHENTICATION", 
        "descr": "4 different responses checking if user and patient are the same, a key that allow access for a user to sensitive data and warning messages. Like most authentication, this is effectively a utility.",
        "tags": [
            "DFN"
        ]
    }, 
    "DG SENSITIVE RECORD BULLETIN": {
        "mn": "DG", 
        "catag": "CHANGE"
    }, 
    "GMRC LIST CONSULT REQUESTS": {
        "catag": "READ STRUCTURED", 
        "descr": "number of days to look backwards",
        "tags": [
            "PARAMETER",
            "DFN"
        ]
    }, 
    "GMV ADD VM": {
        "mn": "GMV", 
        "catag": "CHANGE",
        "tags": [
            "DFN"
        ]
    }, 
    "GMV ALLERGY": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED",
        "tags": [
            "DFN"
        ]
    }, 
    "GMV CLOSEST READING": {
        "catag": "READ STRUCTURED", 
        "descr": "uses PXRMINDX",
        "tags": [
            "DFN"
        ]
    }, 
    "GMV CONVERT DATE": {
        "mn": "GMV", 
        "catag": "UTILITY"
    }, 
    "GMV DLL VERSION": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED"
    }, 
    "GMV EXTRACT REC": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED"
    }, 
    "GMV GET CATEGORY IEN": {
        "catag": "READ STRUCTURED", 
        "files": ["120.53"],
        "exArgs": "[\"LOCATION\"]",
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "GMV GET CURRENT TIME": {
        "mn": "GMV", 
        "catag": "UTILITY", 
        "descr": "True JS only",
        "tags": [
            "HARD CODED"
        ]
    }, 
    "GMV GET VITAL TYPE IEN": {
        "catag": "READ STRUCTURED", 
        "files": ["120.51"],
        "exArgs": "[\"HEIGHT\"]",
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "GMV LATEST VM": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED"
    }, 
    "GMV LOCATION SELECT": {
        "mn": "GMV", 
        "catag": "UTILITY", 
        "descr": "Despite name, seems to execute any \"OPTION\" and return the results. So this is a flexible UTILITY in effect. Akin to other 'generic query RPCs"
    }, 
    "GMV MANAGER": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] ?", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "GMV MARK ERROR": {
        "mn": "GMV", 
        "catag": "CHANGE"
    }, 
    "GMV PARAMETER": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] ?", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "GMV USER": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] or 200?", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "GMV V/M ALLDATA": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED"
    }, 
    "GMV VITALS/CAT/QUAL": {
        "mn": "GMV", 
        "catag": "READ STRUCTURED", 
        "descr": "META K"
    }, 
    "MAG4 REMOTE IMPORT": {
        "mn": "MAG4", 
        "catag": "CHANGE", 
        "descr": "IMPORT IMAGES"
    }, 
    "OR GET COMBAT VET": {
        "mn": "OR", 
        "catag": "READ STRUCTURED", 
        "descr": "relies on the VADPT code, code that grabs pieces of PATIENT (2) into subobjects. Some of the logic there should be reproduced in the MVDM structure and VDM maps."
    }, 
    "ORALWORD ALLWORD": {
        "mn": "ORALWORD", 
        "catag": "READ STRUCTURED", 
        "descr": "Can an Order be made (med - TRYIT)"
    }, 
    "ORB DELETE ALERT": {
        "mn": "ORB", 
        "catag": "CHANGE"
    }, 
    "ORB FOLLOW-UP ARRAY": {
        "mn": "ORB", 
        "catag": "READ STRUCTURED", 
        "descr": "Notification follow-up Order"
    }, 
    "ORB FOLLOW-UP STRING": {
        "mn": "ORB", 
        "catag": "READ STRUCTURED", 
        "descr": "Notification follow-up Order String"
    }, 
    "ORB FOLLOW-UP TYPE": {
        "mn": "ORB", 
        "catag": "READ STRUCTURED"
    }, 
    "ORB FORWARD ALERT": {
        "mn": "ORB", 
        "catag": "CHANGE", 
        "descr": "Forward an alert (in pool with PRINTER?)"
    }, 
    "ORB RENEW ALERT": {
        "mn": "ORB", 
        "catag": "CHANGE", 
        "descr": "alerts in 8992"
    }, 
    "ORB SORT METHOD": {
        "mn": "ORB", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] ?", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORBCMA5 GETUDID": {
        "catag": "READ STRUCTURED", 
        "descr": "From 'PSJ OR PAT OE' in 101.41 and argument passed isn't processed",
        "files": ["101.41"],
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "ORCDLR2 CHECK ALL LC TO WC": {
        "mn": "ORCDLR2", 
        "catag": "READ STRUCTURED", 
        "descr": "list of lab orders with invalid times"
    }, 
    "ORCDLR2 CHECK ONE LC TO WC": {
        "mn": "ORCDLR2", 
        "catag": "READ STRUCTURED", 
        "descr": "\"lab order\""
    }, 
    "ORCHECK DELMONO": {
        "mn": "ORCHECK", 
        "catag": "UTILITY", 
        "descr": "temporary (TMP) monograph delete - was setup in OCAPI. Monographs are returned in GETMONO etc, GLOBAL ARRAY RPCs",
        "tags": [
            "K/META",
            "REENTRANCY"
        ]
    }, 
    "ORCHECK GETMONO": {
        "catag": "READ STRUCTURED", 
        "descr": "read from TMP ORMONOGRAPH which was setup in OCAPI. Example of GLOBAL ARRAY RPC which returns the name of a TMPs setup from Order to be checked. Example of GLOBAL ARRAY RPC which returns the name of a TMP",
        "tags": [
            "K/META",
            "REENTRANCY"
        ]
    }, 
    "ORCHECK GETMONOL": {
        "mn": "ORCHECK", 
        "catag": "READ STRUCTURED", 
        "descr": "read from TMP ORMONOGRAPH which was setup in OCAPI",
        "tags": [
            "K/META",
            "REENTRANCY"
        ]
    }, 
    "ORCHECK GETXTRA": {
        "mn": "ORCHECK", 
        "catag": "READ STRUCTURED", 
        "descr": "Gets multi-line in Monograph whose info is setup by OCAPI",
        "tags": [
            "K/META",
            "REENTRANCY"
        ]
    }, 
    "ORCHECK ISMONO": {
        "mn": "ORCHECK", 
        "catag": "READ STRUCTURED", 
        "descr": "Is TMP ORMONOGRAPH setup from Order to be checked ie/ determines if monographs to read",
        "tags": [
            "K/META",
            "IS-A",
            "REENTRANCY"
        ]
    }, 
    "ORCNOTE GET TOTAL": {
        "mn": "ORCNOTE", 
        "catag": "READ STRUCTURED", 
        "descr": "Count notes"
    }, 
    "ORDDPAPI ADMTIME": {
        "mn": "ORDDPAPI", 
        "catag": "READ STRUCTURED", 
        "descr": "GETWP^XPAR", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORDDPAPI CLOZMSG": {
        "mn": "ORDDPAPI", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] GETWP^XPAR (TRY IT)", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORDEA CSVALUE": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "1/0 for controlled substance or not - 101.43"
    }, 
    "ORDEA DEATEXT": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] GETWP^XPAR (TRY IT)", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORDEA HASHINFO": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "basic info (include patient) for order"
    }, 
    "ORDEA LNKMSG": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "GETWP^XPAR", 
        "tags": [
            "PARAMETER",
            "S/META"
        ]
    }, 
    "ORDEA ORDHINFO": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "101.52 etc"
    }, 
    "ORDEA PINLKCHK": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "if active PIN - uses TMP set in PINLK set (TRY IT) - rpcRunner"
    }, 
    "ORDEA PINLKSET": {
        "mn": "ORDEA", 
        "catag": "CHANGE", 
        "descr": "TMP set (TRY IT)"
    }, 
    "ORDEA PNDHLD": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "1/0 on pending or not"
    }, 
    "ORDEA SIGINFO": {
        "mn": "ORDEA", 
        "catag": "READ STRUCTURED", 
        "descr": "info to show when signing a controlled substance"
    }, 
    "ORECS01 CHKESSO": {
        "mn": "ORECS01", 
        "catag": "UTILITY", 
        "descr": "is a patch installed (\"$$PATCH^XPDUTL\")"
    }, 
    "ORECS01 ECPRINT": {
        "mn": "ORECS01", 
        "catag": "UTILITY", 
        "descr": "PRINT ECS report to device"
    }, 
    "ORECS01 ECRPT": {
        "mn": "ORECS01", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "REPORT"
    }, 
    "ORECS01 GETDIV": {
        "mn": "ORECS01", 
        "catag": "READ STRUCTURED", 
        "descr": "yet another get DUZ(2)/ mvdm.getFacility"
    }, 
    "ORECS01 SAVPATH": {
        "mn": "ORECS01", 
        "catag": "CHANGE", 
        "descr": "of and by PARAMETERS (TRY IT)"
    }, 
    "ORECS01 VSITID": {
        "mn": "ORECS01", 
        "catag": "READ STRUCTURED", 
        "descr": "visit IEN from criteria (may overlap with allergy visit lookup)"
    }, 
    "OREVNTX ACTIVE": {
        "mn": "OREVNTX", 
        "catag": "READ STRUCTURED", 
        "descr": "active in 100.5"
    }, 
    "OREVNTX LIST": {
        "mn": "OREVNTX", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX PAT": {
        "mn": "OREVNTX", 
        "catag": "READ STRUCTURED", 
        "descr": "100.2 (per patient) delayed event ie/ MAS move or OR return could delay orders"
    }, 
    "OREVNTX1 AUTHMREL": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "note OREVNTX1 and rOrders.pas:"
    }, 
    "OREVNTX1 CHGEVT": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE", 
        "descr": "change orders events (get into 100.5 for orders)"
    }, 
    "OREVNTX1 CMEVTS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 COMP": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 CPACT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 CURSPE": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DEFLTS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DELDFLT": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE"
    }, 
    "OREVNTX1 DELPTEVT": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE"
    }, 
    "OREVNTX1 DFLTDLG": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DFLTEVT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DIV": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DIV1": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 DLGIEN": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "IEN based on name - K/META"
    }, 
    "OREVNTX1 DONE": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE"
    }, 
    "OREVNTX1 EMPTY": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 EVT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 EXISTS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 GETDLG": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "dlg 101.43 (meta)"
    }, 
    "OREVNTX1 GETSTS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "order status (CLINICAL)"
    }, 
    "OREVNTX1 GTEVT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "event based on 100.5 info"
    }, 
    "OREVNTX1 GTEVT1": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "event based on 100.5 info"
    }, 
    "OREVNTX1 HAVEPRT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "parent patient event"
    }, 
    "OREVNTX1 ISDCOD": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE", 
        "descr": "uses XPAR (TO TRY)"
    }, 
    "OREVNTX1 ISHDORD": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "on hold"
    }, 
    "OREVNTX1 ISPASS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "1/0"
    }, 
    "OREVNTX1 ISPASS1": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "1/0"
    }, 
    "OREVNTX1 LOC": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "Default hospital locn"
    }, 
    "OREVNTX1 LOC1": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 MATCH": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "match or not"
    }, 
    "OREVNTX1 MULTS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "speciality list"
    }, 
    "OREVNTX1 NAME": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 ODPTEVID": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "one value again"
    }, 
    "OREVNTX1 PRMPTID": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 PROMPT IDS": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "prompt ids for 100.41 (TRY IT/ K)"
    }, 
    "OREVNTX1 PUTEVNT": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE", 
        "descr": "save events in 100.2"
    }, 
    "OREVNTX1 SETDFLT": {
        "mn": "OREVNTX1", 
        "catag": "CHANGE", 
        "descr": "SETS PARAMETER (TRY IT)"
    }, 
    "OREVNTX1 TYPEXT": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED"
    }, 
    "OREVNTX1 WRLSTED": {
        "mn": "OREVNTX1", 
        "catag": "READ STRUCTURED", 
        "descr": "list of dialogs so K/meta"
    }, 
    "ORIMO IMOLOC": {
        "mn": "ORIMO", 
        "catag": "READ STRUCTURED", 
        "descr": "LOC"
    }, 
    "ORIMO IMOOD": {
        "mn": "ORIMO", 
        "catag": "READ STRUCTURED", 
        "descr": "is IMO order?"
    }, 
    "ORIMO ISCLOC": {
        "mn": "ORIMO", 
        "catag": "READ STRUCTURED", 
        "descr": "is clinic location?"
    }, 
    "ORIMO ISIVQO": {
        "mn": "ORIMO", 
        "catag": "READ STRUCTURED", 
        "descr": "is it an IV quick order?"
    }, 
    "ORK TRIGGER": {
        "mn": "ORK", 
        "catag": "READ STRUCTURED", 
        "descr": "list of order check msgs"
    }, 
    "ORPRF CLEAR": {
        "mn": "ORPRF", 
        "catag": "UTILITY", 
        "descr": "\"Clears up the ORPRF TMP global set by HASFLG"
    }, 
    "ORPRF GETFLG": {
        "mn": "ORPRF", 
        "catag": "READ STRUCTURED", 
        "descr": "relies on HASFLG setup"
    }, 
    "ORPRF HASFLG": {
        "mn": "ORPRF", 
        "catag": "READ STRUCTURED", 
        "descr": "National or local flags. 26.11/26.15 files. This returns flags of patient and also sets up TMP with those flags for use by GETFLG"
    }, 
    "ORPRF TRIGGER POPUP": {
        "mn": "ORPRF", 
        "catag": "READ STRUCTURED", 
        "descr": "for CPRS - should it trigger a popup because patient has flags - 1 or 0"
    }, 
    "ORQ NULL LIST": {
        "mn": "ORQ", 
        "catag": "UTILITY", 
        "descr": "Silly return empty list",
        "tags": [
            "HARD CODED"
        ]
    }, 
    "ORQOR DETAIL": {
        "mn": "ORQOR", 
        "catag": "READ UNSTRUCTURED"
    }, 
    "ORQOR LIST": {
        "catag": "READ STRUCTURED", 
        "descr": "list of patient orders",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQORB SORT": {
        "mn": "ORQORB", 
        "catag": "READ STRUCTURED", 
        "descr": "sort method for user/division etc"
    }, 
    "ORQPT ATTENDING/PRIMARY": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] patient's attending physician and primary provider.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQPT CLINIC PATIENTS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] [QUERY] patients with appointments at a clinic between start and stop dates", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "ORQPT CLINICS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "a list of clinics."
    }, 
    "ORQPT DEFAULT CLINIC DATE RANG": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "default start and stop dates for clinics"
    }, 
    "ORQPT DEFAULT LIST SORT": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "current user's default patient selection list SORT ORDER setting. TRY IT as may be"
    }, 
    "ORQPT DEFAULT LIST SOURCE": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "the source of the current user's default patient list."
    }, 
    "ORQPT DEFAULT PATIENT LIST": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "returns the current user's default patient list."
    }, 
    "ORQPT KILL RPL": {
        "mn": "ORQPT", 
        "catag": "CHANGE", 
        "descr": "but really utility as ^TMP $J of ORRPL effected"
    }, 
    "ORQPT MAKE RPL": {
        "mn": "ORQPT", 
        "catag": "CHANGE", 
        "descr": "Passes Team List IEN, creates a TMP file"
    }, 
    "ORQPT PATIENT TEAM PROVIDERS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "list of providers linked to a patient via teams."
    }, 
    "ORQPT PROVIDER PATIENTS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "patients linked to a provider/user."
    }, 
    "ORQPT PROVIDERS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "an array of providers."
    }, 
    "ORQPT READ RPL": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "global ref leads to list of patients for scroll box (44 max)"
    }, 
    "ORQPT SPECIALTIES": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "treating specialties."
    }, 
    "ORQPT SPECIALTY PATIENTS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "patients linked to a treating specialty."
    }, 
    "ORQPT TEAM PATIENTS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "patients on a team."
    }, 
    "ORQPT TEAMS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "list of teams."
    }, 
    "ORQPT WARD PATIENTS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "patients on a ward."
    }, 
    "ORQPT WARDRMBED": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] the ward, room-bed for a patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQPT WARDS": {
        "mn": "ORQPT", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQAL DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "complexity": "LOW",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQAL LIST": {
        "mn": "ORQQAL", 
        "catag": "READ STRUCTURED",
        "complexity": "LOW",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQAL LIST REPORT": {
        "catag": "READ UNSTRUCTURED",
        "complexity": "LOW",
        "descr": "Patients allergy reactions in Report format (vs ORQQAL LIST)", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQCN ADDCMT": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "comment to consult change - may send alert"
    }, 
    "ORQQCN ADMIN COMPLETE": {
        "mn": "ORQQCN", 
        "catag": "CHANGE"
    }, 
    "ORQQCN ASSIGNABLE MED RESULTS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "medicine results that can be attached to a procedure."
    }, 
    "ORQQCN ATTACH MED RESULTS": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "med result to be attached to a procedure request."
    }, 
    "ORQQCN CANEDIT": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED",
        "descr": "whether a consult/procedure request can beresubmitted."
    }, 
    "ORQQCN DEFAULT REQUEST REASON": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQCN DETAIL": {
        "mn": "ORQQCN", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "formatted detailed information regarding the consult request,including result report if available."
    }, 
    "ORQQCN DISCONTINUE": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "Discontinue a consult or deny a consult request."
    }, 
    "ORQQCN EDIT DEFAULT REASON": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "when the consults'reason for request can be edited."
    }, 
    "ORQQCN FIND CONSULT": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "a Consult IEN in file 123, return a formatted list item for that", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQCN FORWARD": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "Forwards a consult to a subservice of the forwarding service, as definedin file 123.5"
    }, 
    "ORQQCN GET CONSULT": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "Given a Consult ID from file 123, return the zero node to the client forloading into a consult record. If the consult has anyassociated TIU records (completion, addenda) these will be returned"
    }, 
    "ORQQCN GET MED RESULT DETAILS": {
        "mn": "ORQQCN", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "Detailed display of medicine results."
    }, 
    "ORQQCN GET ORDER NUMBER": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQCN GET PROC IEN": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "orderable item IEN, return pointer to file 123.3"
    }, 
    "ORQQCN GET PROC SVCS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "an orderable item from the S.PROC XREF in 101.43, return theConsults service from 123.5 that can perform the procedure."
    }, 
    "ORQQCN GET SERVICE IEN": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQCN ISPROSVC": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "This RPC is used to disable the Earliest Appropriate Date field and value when ordering Prosthetics requests via CPRS GUI."
    }, 
    "ORQQCN LIST": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "consult requests for a patient within optional date range"
    }, 
    "ORQQCN LOAD FOR EDIT": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "the current values of that record's fields."
    }, 
    "ORQQCN MED RESULTS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "a display of Medicine Package results, followed by any TIU results."
    }, 
    "ORQQCN PRINT SF513": {
        "mn": "ORQQCN", 
        "catag": "UTILITY"
    }, 
    "ORQQCN PROVDX": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "provisional dx prompting info for service"
    }, 
    "ORQQCN RECEIVE": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "version of RECEIVE CONSULT for use with GUI"
    }, 
    "ORQQCN REMOVABLE MED RESULTS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "list of medicine results that are currently attached to a procedure."
    }, 
    "ORQQCN REMOVE MED RESULTS": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "removal of medicine results from a procedure."
    }, 
    "ORQQCN RESUBMIT": {
        "mn": "ORQQCN", 
        "catag": "CHANGE", 
        "descr": "resubmission of a cancelled consult or procedure request afterediting. This is a backdoor resubmission, and CPRS will be notified via the HL7 proocess."
    }, 
    "ORQQCN SET ACT MENUS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "Based on the IEN of the consult passed in, returns a string representingvarious facets of the user's access level for that consult and service. This allows dynamic enabling/disabling of GUI menus based on the user's ability to act on that particular consult. ie/ CPRS config but not parameters?"
    }, 
    "ORQQCN SF513 WINDOWS PRINT": {
        "mn": "ORQQCN", 
        "catag": "UTILITY", 
        "descr": "Print consults Standard Form 513"
    }, 
    "ORQQCN SHOW SF513": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "text of form 513 consults (ie/ K)"
    }, 
    "ORQQCN SIGFIND": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "significant findings"
    }, 
    "ORQQCN STATUS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "files": ["123.1"],
        "descr": "consult statuses currently in use, as reflected in the \"AC\" XREF of ^GMR(123.1. ie/ [K/META]", 
        "tags": [
            "K/META",
            "XREF"
        ]
    }, 
    "ORQQCN SVC W/SYNONYMS": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQCN SVCLIST": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQCN SVCTREE": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "K"
    }, 
    "ORQQCN UNRESOLVED": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "USER PER PATIENT CONSULTS unresolved"
    }, 
    "ORQQCN URGENCIES": {
        "mn": "ORQQCN", 
        "catag": "READ STRUCTURED", 
        "descr": "Per user - protocol 101 in play"
    }, 
    "ORQQCN2 GET CONTEXT": {
        "mn": "ORQQCN2", 
        "catag": "READ STRUCTURED", 
        "descr": "GET^XPAR PARAMETER - TRY IT"
    }, 
    "ORQQCN2 GET PREREQUISITE": {
        "mn": "ORQQCN2", 
        "catag": "READ STRUCTURED", 
        "descr": "blurbs from 123.5"
    }, 
    "ORQQCN2 SAVE CONTEXT": {
        "mn": "ORQQCN2", 
        "catag": "CHANGE", 
        "descr": "[DUZ] new view preferences 'ORCH CONTEXT CONSULTS' [PARAMETER] GET|CHG|SAVE", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORQQCN2 SCHEDULE CONSULT": {
        "mn": "ORQQCN2", 
        "catag": "CHANGE", 
        "descr": "consult to 'scheduled' and optional comment"
    }, 
    "ORQQLR DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "descr": "Details of a lab order",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQLR SEARCH RANGE INPT": {
        "mn": "ORQQLR", 
        "catag": "READ STRUCTURED", 
        "descr": "? on global parameter config"
    }, 
    "ORQQLR SEARCH RANGE OUTPT": {
        "mn": "ORQQLR", 
        "catag": "READ STRUCTURED", 
        "descr": "ala INPT"
    }, 
    "ORQQPL ADD SAVE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL AUDIT HIST": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "RETURN PROBLEM AUDIT HISTORY"
    }, 
    "ORQQPL CHECK DUP": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPL CLIN FILTER LIST": {
        "catag": "READ STRUCTURED", 
        "descr": "List of Clinics passed in",
        "tags": [
            "LOCATION",
            "IEN-LOOKUP"
        ]
    }, 
    "ORQQPL CLIN SRCH": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "clinics for problem list (so PATIENT?)"
    }, 
    "ORQQPL DELETE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL EDIT LOAD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL EDIT SAVE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL INACTIVATE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL INIT PT": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "returns death indicator, sc and exposures",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPL INIT USER": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "user params for problem list (per user or ...)?"
    }, 
    "ORQQPL LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL PROB COMMENTS": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "Clinical, problem of user"
    }, 
    "ORQQPL PROBLEM LEX SEARCH": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED", 
        "descr": "list from clinical lexicon for display in list or combo box"
    }, 
    "ORQQPL PROBLEM LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL PROBLEM NTRT BULLETIN": {
        "mn": "ORQQPL", 
        "catag": "CHANGE", 
        "descr": "generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.va.gov:7151/ntrt/."
    }, 
    "ORQQPL PROV FILTER LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL PROVIDER LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL REPLACE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE"
    }, 
    "ORQQPL SAVEVIEW": {
        "mn": "ORQQPL", 
        "catag": "CHANGE", 
        "descr": "[DUZ] to new person file field 125. And parameter ORCH CONTEXT PROBLEMS [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORQQPL SERV FILTER LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL SRVC SRCH": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPL UPDATE": {
        "mn": "ORQQPL", 
        "catag": "CHANGE"
    }, 
    "ORQQPL USER PROB CATS": {
        "mn": "ORQQPL", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPL USER PROB LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPL VERIFY": {
        "mn": "ORQQPL", 
        "catag": "CHANGE"
    }, 
    "ORQQPL4 LEX": {
        "mn": "ORQQPL4", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPP LIST": {
        "mn": "ORQQPP", 
        "catag": "READ STRUCTURED",
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQPS DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPS LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX GET DEF LOCATIONS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX GET FOLDERS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX GET HIST LOCATIONS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX GET NOT PURPOSE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX IMMUN LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX LVREMLST": {
        "mn": "ORQQPX", 
        "catag": "READ STRUCTURED", 
        "descr": "cover sheet reminder settings"
    }, 
    "ORQQPX NEW COVER SHEET ACTIVE": {
        "mn": "ORQQPX", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER]", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORQQPX NEW COVER SHEET REMS": {
        "mn": "ORQQPX", 
        "catag": "READ STRUCTURED", 
        "descr": "Reminders per [DUZ] from 200 and [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORQQPX NEW REMINDERS ACTIVE": {
        "mn": "ORQQPX", 
        "catag": "READ STRUCTURED", 
        "descr": "Reminders per [DUZ] from 200 and [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORQQPX REM INSERT AT CURSOR": {
        "mn": "ORQQPX", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] per [DUZ]", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORQQPX REMINDER DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX REMINDERS LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPX SAVELVL": {
        "mn": "ORQQPX", 
        "catag": "CHANGE", 
        "descr": "Saves [PARAMETER] cover sheet settings EN|DEL", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORQQPX SET FOLDERS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM CHECK REM VERSION": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Getting version of package ie/ 9.4 (Package Prototype ie/ util though used from Reminder"
    }, 
    "ORQQPXRM DIALOG ACTIVE": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "For a list of reminders [#811.9] returns same list with status to indicateif an active dialog exists for the reminder ie/ local K"
    }, 
    "ORQQPXRM DIALOG PROMPTS": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Additional prompts for a given dialog element ... local K"
    }, 
    "ORQQPXRM EDUCATION SUBTOPICS": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "K - subtopics education"
    }, 
    "ORQQPXRM EDUCATION SUMMARY": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "K"
    }, 
    "ORQQPXRM EDUCATION TOPIC": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Detailed description of education topic - 9999999_09 is file"
    }, 
    "ORQQPXRM GEC DIALOG": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "this RPC will evaluate the Reminder Dialogs as the Finish button is clickfor the GEC Project. THis RPC will return an error messages if the fourGEC Reminder Dialogs are done out of order."
    }, 
    "ORQQPXRM GEC FINISHED?": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC pass a boolean value to PXRMGECU"
    }, 
    "ORQQPXRM GEC STATUS PROMPT": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "This remote procedure will return the text value to display in CPRS of the status of the current GEC Referral."
    }, 
    "ORQQPXRM GET WH LETTER TEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM GET WH LETTER TYPE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM GET WH PROC RESULT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM GET WH REPORT TEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM MENTAL HEALTH": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "K but wants \"instrument\" name. Boils down to 601.71"
    }, 
    "ORQQPXRM MENTAL HEALTH RESULTS": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "May be per patient (PXRMDLR)"
    }, 
    "ORQQPXRM MENTAL HEALTH SAVE": {
        "mn": "ORQQPXRM", 
        "catag": "CHANGE", 
        "descr": "stores test results responses from reminder dialog"
    }, 
    "ORQQPXRM MHDLL": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "another Reminder score builder"
    }, 
    "ORQQPXRM MHV": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "but like others, a score calc => calculated field"
    }, 
    "ORQQPXRM MST UPDATE": {
        "mn": "ORQQPXRM", 
        "catag": "CHANGE", 
        "descr": "change 'MST' data?"
    }, 
    "ORQQPXRM PROGRESS NOTE HEADER": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Calls PXRM PROGRESS NOTE HEADERS in XPAR"
    }, 
    "ORQQPXRM REMINDER CATEGORIES": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "K"
    }, 
    "ORQQPXRM REMINDER DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQPXRM REMINDER DIALOG": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Dialog for a given reminder"
    }, 
    "ORQQPXRM REMINDER EVALUATION": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Allows evaluation of a list of reminders. Returns a list of clinicalreminders due/applicable or not applicable to the patient ie/ Calculation and not stored in a fixed way but as a calc == a change!"
    }, 
    "ORQQPXRM REMINDER INQUIRY": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Detailed description of reminder"
    }, 
    "ORQQPXRM REMINDER WEB": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "Web addresses for selected reminder"
    }, 
    "ORQQPXRM REMINDERS APPLICABLE": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPXRM REMINDERS UNEVALUATED": {
        "mn": "ORQQPXRM", 
        "catag": "READ STRUCTURED"
    }, 
    "ORQQPXRM WOMEN HEALTH SAVE": {
        "mn": "ORQQPXRM", 
        "catag": "CHANGE", 
        "descr": "Pass back data to be file in the Women's Health Package file 790.1."
    }, 
    "ORQQVI NOTEVIT": {
        "mn": "ORQQVI", 
        "catag": "READ STRUCTURED", 
        "descr": "Patient's vitals from a visit of a note ie/ two lookups [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI VITALS": {
        "mn": "ORQQVI", 
        "catag": "READ STRUCTURED", 
        "descr": "Most recent vitals (used inside NODEVIT) [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI VITALS FOR DATE RANGE": {
        "mn": "ORQQVI", 
        "catag": "READ STRUCTURED", 
        "descr": "vitals for date range [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI1 DETAIL": {
        "mn": "ORQQVI1", 
        "catag": "READ STRUCTURED", 
        "descr": "Detail of Tests. Uses ^PXRMINDX(120.5 etc. ie/ vitals too [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI1 GRID": {
        "mn": "ORQQVI1", 
        "catag": "READ STRUCTURED", 
        "descr": "^PXRMINDX(120.5 again leveraged [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI2 VITALS HELP": {
        "mn": "ORQQVI2", 
        "catag": "READ UNSTRUCTURED"
    }, 
    "ORQQVI2 VITALS RATE CHECK": {
        "mn": "ORQQVI2", 
        "catag": "UTILITY", 
        "descr": "backed by meta K"
    }, 
    "ORQQVI2 VITALS VAL & STORE": {
        "mn": "ORQQVI2", 
        "catag": "CHANGE", 
        "descr": "PCE i/f - stores into 120.5 if measurements validated [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORQQVI2 VITALS VALIDATE": {
        "mn": "ORQQVI2", 
        "catag": "UTILITY", 
        "descr": "Validates against meta. Subset of VAL and STORE."
    }, 
    "ORQQVI2 VITALS VALIDATE TYPE": {
        "mn": "ORQQVI2", 
        "catag": "UTILITY", 
        "descr": "Validate type is valid against K data"
    }, 
    "ORQQVS DETAIL NOTES": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQVS DETAIL SUMMARY": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORQQVS VISITS/APPTS": {
        "mn": "ORQQVS", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORQQXMB MAIL GROUPS": {
        "mn": "ORQQXMB", 
        "catag": "READ STRUCTURED", 
        "descr": "System wide mail groups, file 3.8"
    }, 
    "ORQQXQA PATIENT": {
        "mn": "ORQQXQA", 
        "catag": "READ STRUCTURED", 
        "descr": "Notifications per Patient per User [DUZ] - XQALERT leverages 8992, the Alert file which has entry per User and multiple per alert (ie/ hierarchy pattern vs alerts flat and index on user which would be better for MVDM)", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORQQXQA USER": {
        "mn": "ORQQXQA", 
        "catag": "READ STRUCTURED", 
        "descr": "Notifications for User [DUZ] ... exs from Patch install issue etc etc beyond PATIENT", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORRHCQ QRYITR": {
        "mn": "ORRHCQ", 
        "catag": "READ STRUCTURED", 
        "descr": "Query for a patient [DFN] - more generic approach with ORDERs, VISITs, CONSULTs", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORVAA VAA": {
        "mn": "ORVAA", 
        "catag": "READ STRUCTURED", 
        "descr": "VA Advantage policy name - seems to go into PATIENT(2)/2.312 which holds insurance policies."
    }, 
    "ORVW FACLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWCH LDFONT": {
        "mn": "ORWCH", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] one parameter", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH LOADALL": {
        "mn": "ORWCH", 
        "catag": "READ STRUCTURED", 
        "descr": "size related CPRS GUI chart params for user [DUZ] [PARAMETER] - rolls up a series of parameters", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH LOADSIZ": {
        "mn": "ORWCH", 
        "catag": "CHANGE", 
        "descr": "size/bounds for CPRS GUI Control [DUZ] [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH SAVEALL": {
        "mn": "ORWCH", 
        "catag": "CHANGE", 
        "descr": "saves user's GUI chart sizes [DUZ] [PARAMETER] (a number of parameters in one go)", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH SAVECOL": {
        "mn": "ORWCH", 
        "catag": "CHANGE", 
        "descr": "col width sizes for reports for user [DUZ] [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH SAVESIZ": {
        "mn": "ORWCH", 
        "catag": "CHANGE", 
        "descr": "saves bounds for particular gui control [DUZ] [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCH SAVFONT": {
        "mn": "ORWCH", 
        "catag": "CHANGE", 
        "descr": "save user's font preference [DUZ] - straight [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWCIRN AUTORDV": {
        "mn": "ORWCIRN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWCIRN CHECKLINK": {
        "mn": "ORWCIRN", 
        "catag": "UTILITY", 
        "descr": "Check for active HL7 link [SYS]", 
        "tags": [
            "S/META"
        ]
    }, 
    "ORWCIRN FACLIST": {
        "mn": "ORWCIRN", 
        "catag": "READ STRUCTURED", 
        "descr": "Return list of remote facilities for patient [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWCIRN HDRON": {
        "mn": "ORWCIRN", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] pure get of 'ORWRP HDR ON'", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWCIRN WEBADDR": {
        "mn": "ORWCIRN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWCOM DETAILS": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWCOM GETOBJS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWCOM ORDEROBJ": {
        "mn": "ORWCOM", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWCOM PTOBJ": {
        "mn": "ORWCOM", 
        "catag": "UTILITY", 
        "descr": "COM object entries from different [PARAMETERS] !", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWCS LIST OF CONSULT REPORTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWCS PRINT REPORT": {
        "mn": "ORWCS", 
        "catag": "UTILITY"
    }, 
    "ORWCS REPORT TEXT": {
        "mn": "ORWCS", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWCV DTLVST": {
        "mn": "ORWCV", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] This API returns the text of a progress note or discharge summary relatedto a visit/appointment.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWCV LAB": {
        "mn": "ORWCV", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] labs for a patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWCV POLL": {
        "mn": "ORWCV", 
        "catag": "READ STRUCTURED", 
        "descr": "Poll for completed parts STARTed by START [DUZ]", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWCV START": {
        "mn": "ORWCV", 
        "catag": "UTILITY", 
        "descr": "[PARAMETER] - \"ORWOR COVER RETRIEVAL\" used [DUZ] - start coversheet build in background", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWCV STOP": {
        "mn": "ORWCV", 
        "catag": "UTILITY", 
        "descr": "[DFN] stop coversheet build", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWCV VST": {
        "mn": "ORWCV", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] visits/admissions for a patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWCV1 COVERSHEET LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD DT": {
        "mn": "ORWD", 
        "catag": "UTILITY"
    }, 
    "ORWD FORMID": {
        "mn": "ORWD", 
        "catag": "READ STRUCTURED", 
        "descr": "map to windows form for order dialog ... tells the GUI DELPHI code which form to use to process the order dialog ex/ OD_ALLERGY 105 etc. K for GUI that isn't in PARAMETERS"
    }, 
    "ORWD GET4EDIT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD KEY": {
        "mn": "ORWD", 
        "catag": "READ STRUCTURED", 
        "descr": "returns a 1 if the user holds the PARAMETER, otherwise a 0 is returned. [PARAMETER] [DFN] ... per user lookup (close to generic)", 
        "tags": [
            "PARAMETER", 
            "DFN"
        ]
    }, 
    "ORWD OI": {
        "mn": "ORWD", 
        "catag": "READ STRUCTURED", 
        "descr": "Orderables (101.43) iterator using named XREF - [K/META]", 
        "exArgs": "[\"B\",0,\"A\"]",
        "files": ["101.43"],
        "tags": [
            "K/META"
        ]
    }, 
    "ORWD PROVKEY": {
        "mn": "ORWD", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] does User possess the \"PROVIDER\" key", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWD SAVE": {
        "mn": "ORWD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] save an order ** SIGNIFICANT **", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWD SAVEACT": {
        "mn": "ORWD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] saves action for an order ** SIGNFICANT **", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWD SIGN": {
        "mn": "ORWD", 
        "catag": "CHANGE", 
        "descr": "Changes signature status on a list of orders and optionally releases the orders to their respective services. [DFN], and checks DUZ has 'ORES' key", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWD VALIDACT": {
        "mn": "ORWD", 
        "catag": "READ STRUCTURED", 
        "descr": "is action valid for order"
    }, 
    "ORWD1 COMLOC": {
        "mn": "ORWD1", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWD1 PARAM": {
        "mn": "ORWD1", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWD1 PRINTGUI": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD1 RVPRINT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD1 SIG4ANY": {
        "mn": "ORWD1", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWD1 SIG4ONE": {
        "mn": "ORWD1", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWD1 SVONLY": {
        "mn": "ORWD1", 
        "catag": "UTILITY", 
        "descr": "print ..."
    }, 
    "ORWD2 DEVINFO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWD2 MANUAL": {
        "mn": "ORWD2", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDAL32 ALLERGY MATCH": {
        "mn": "ORWDAL32", 
        "catag": "READ STRUCTURED", 
        "descr": "Given a text string, return a list of possible matches from severaldifferent sources - K meta for Allergy",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDAL32 CLINUSER": {
        "mn": "ORWDAL32", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "Can use mark allergy as EIE? [DUZ] [PARAMETER] - combination of parameters", 
        "tags": [
            "DUZ", 
            "PARAMETER",
            "IS-A"
        ]
    }, 
    "ORWDAL32 DEF": {
        "catag": "READ STRUCTURED", 
        "descr": "Get dialog data for allergies - some hard coded, some from 120.84, some like 'top ten symptoms' reflect system use",
        "complexity": "MEDIUM",
        "tags": [
            "K/META",
            "HARD CODED"
        ]
    }, 
    "ORWDAL32 LOAD FOR EDIT": {
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDAL32 SAVE ALLERGY": {
        "catag": "CHANGE", 
        "complexity": "HIGH",
        "descr": "Bulletins by side effect for create allergy and EIE. Also 'fires' protocol for event listeners and med watch updates if drug allergy",
        "tags": [
            "DFN",
            "BULLETIN",
            "PROTOCOL"
        ]
    }, 
    "ORWDAL32 SEND BULLETIN": {
        "mn": "ORWDAL32", 
        "catag": "UTILITY", 
        "descr": "Send bulletin if user attempts free text entry - covers DUZ and DFN. Bulletins sent by side effect in SAVE ALLERGY.", 
        "tags": [
            "DFN",
            "BULLETIN"
        ]
    }, 
    "ORWDAL32 SITE PARAMS": {
        "mn": "ORWDAL32", 
        "catag": "READ STRUCTURED", 
        "descr": "Parameters inside 120.84 for the site ie/ domain setting for site (ie/ not for user but for domain). If VISTA consistent then these would go into PARAMETERs ie. not all site or user parameters go into PARAMETERs",
        "tags": [
            "I/META"
        ]
    }, 
    "ORWDAL32 SYMPTOMS": {
        "mn": "ORWDAL32", 
        "catag": "READ STRUCTURED", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDBA1 BASTATUS": {
        "mn": "ORWDBA1", 
        "catag": "READ STRUCTURED", 
        "descr": "Billing awareness RPC"
    }, 
    "ORWDBA1 GETORDX": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA1 ORPKGTYP": {
        "mn": "ORWDBA1", 
        "catag": "READ STRUCTURED", 
        "descr": "hard coded for packages (?)"
    }, 
    "ORWDBA1 RCVORCI": {
        "mn": "ORWDBA1", 
        "catag": "CHANGE", 
        "descr": "[DFN] Receive Order Entry Billing Aware data from CPRS.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDBA1 SCLST": {
        "mn": "ORWDBA1", 
        "catag": "UTILITY", 
        "descr": "ORDER IDs and summarize?"
    }, 
    "ORWDBA2 ADDPDL": {
        "mn": "ORWDBA2", 
        "catag": "CHANGE", 
        "descr": "change provider's preferences (ICD etc) ie/ profile [PARAMETER] ?", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDBA2 DELPDL": {
        "mn": "ORWDBA2", 
        "catag": "CHANGE", 
        "descr": "[DUZ] personal diag list in 200 of User", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWDBA2 GETDUDC": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA2 GETPDL": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA3 HINTS": {
        "mn": "ORWDBA3", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDBA4 GETBAUSR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA4 GETTFCI": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA7 GETIEN9": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDBA7 ISWITCH": {
        "mn": "ORWDBA7", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] has insurance?", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWDCN32 DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDCN32 NEWDLG": {
        "mn": "ORWDCN32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDCN32 ORDRMSG": {
        "mn": "ORWDCN32", 
        "catag": "READ STRUCTURED", 
        "descr": "order message for orderable Meta"
    }, 
    "ORWDCN32 PROCEDURES": {
        "mn": "ORWDCN32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDCSLT DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDCSLT LOOK200": {
        "mn": "ORWDCSLT", 
        "catag": "READ STRUCTURED", 
        "descr": "User in 200 [DUZ]", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWDFH ADDLATE": {
        "mn": "ORWDFH", 
        "catag": "CHANGE", 
        "descr": "Diet order"
    }, 
    "ORWDFH ATTR": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "K meta for a diet order - repackages raw FM form of 101.43"
    }, 
    "ORWDFH CURISO": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH CURRENT MEALS": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] list of current meal orders", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDFH DIETS": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH FINDTYP": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWDFH ISOIEN": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH ISOLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDFH NFSLOC READY": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDFH OPDIETS": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "list of up to 5 outpatient diets from file 119.9 but seems to just use 101.43"
    }, 
    "ORWDFH PARAM": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH QTY2CC": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH TFPROD": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDFH TXT": {
        "mn": "ORWDFH", 
        "catag": "READ STRUCTURED", 
        "descr": "text of the current and any future diets for [DFN] - specific index in 100 ... ie/ will need to analyze indexes", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDGX LOAD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDGX VMDEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR ABBSPEC": {
        "mn": "ORWDLR", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR ALLSAMP": {
        "mn": "ORWDLR", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR LOAD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR OIPARAM": {
        "mn": "ORWDLR", 
        "catag": "READ STRUCTURED", 
        "descr": "meta about a lab test"
    }, 
    "ORWDLR STOP": {
        "mn": "ORWDLR", 
        "catag": "UTILITY", 
        "descr": "Calculated stop date - CANDIDATE FOR VDM UTILITY"
    }, 
    "ORWDLR32 ABBSPEC": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 ALLSAMP": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 ALLSPEC": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR32 GET LAB TIMES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR32 IC DEFAULT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR32 IC VALID": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR32 IMMED COLLECT": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 LAB COLL TIME": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER]", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDLR32 LOAD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDLR32 MAXDAYS": {
        "mn": "ORWDLR32",
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 ONE SAMPLE": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 ONE SPECIMEN": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR32 STOP": {
        "mn": "ORWDLR32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR33 FUTURE LAB COLLECTS": {
        "mn": "ORWDLR33", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDLR33 LASTTIME": {
        "mn": "ORWDLR33", 
        "catag": "READ STRUCTURED", 
        "descr": "Goes into 101.41 but also read TMP(ORECALL) set earlier for 'last collection time used' [REENTRANT]", 
        "tags": [
            "REENTRANCY"
        ]
    }, 
    "ORWDLR33 LC TO WC": {
        "mn": "ORWDLR33", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ] text used when \"LC changed to WC\"", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWDOR LKSCRN": {
        "mn": "ORWDOR", 
        "catag": "READ STRUCTURED", 
        "descr": "off XREF of 100"
    }, 
    "ORWDOR VALNUM": {
        "mn": "ORWDOR", 
        "catag": "UTILITY", 
        "descr": "Validate num form - CANDIDATE FOR VDM UTILITY"
    }, 
    "ORWDOR VMSLCT": {
        "mn": "ORWDOR", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS1 CHK94": {
        "mn": "ORWDPS1", 
        "catag": "UTILITY", 
        "descr": "has a patch been installed. Crude check if index present", 
        "tags": [
            "S/META",
            "PATCH"
        ]
    }, 
    "ORWDPS1 DFLTSPLY": {
        "mn": "ORWDPS1", 
        "catag": "UTILITY", 
        "descr": "off K - days supply given quantity for med"
    }, 
    "ORWDPS1 DOSEALT": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] - dose alternatives - all from 101.43 lookup (part of Pharmacy/Med prototype scope)", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDPS1 DOWSCH": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "all schedules [DFN] - though can't see DFN use quickly (revisit)", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS1 FAILDEA": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "check - [COMPUTED] - [DUZ] - combo of nature of 101.43 and the provider and has to be on the fly due to combos. Genuine [LOGIC]", 
        "tags": [
            "COMPUTED", 
            "DUZ", 
            "LOGIC"
        ]
    }, 
    "ORWDPS1 FORMALT": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "101.43, formulary alternatives [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDPS1 HASOIPI": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "101.41, [K/META] - put orderable into SIG (may be a parameter in other domains but per orderable here)", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDPS1 HASROUTE": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "101.41, [K/META] - routes", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDPS1 IVDEA": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "'only be called for an outpaitent and IV dialog' - 101.43 and [DUZ] ie/ user's detox. [COMPUTED] - light combo of meta and user [LOGIC]", 
        "tags": [
            "DUZ", 
            "COMPUTED", 
            "LOGIC"
        ]
    }, 
    "ORWDPS1 LOCPICK": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] - value is mapped but pure XPAR on 'ORWDPS ROUTING DEFAULT' per location (passed in) ie/ [LOCATION] preference for where pick up happens (Window or By Mail or In clinic) etc.", 
        "tags": [
            "PARAMETER", 
            "LOCATION"
        ]
    }, 
    "ORWDPS1 ODSLCT": {
        "mn": "ORWDPS1", 
        "catag": "UTILITY", 
        "descr": "fixed values in code for DEFAULTs with a few variables check (location etc). This would go to pure JS or preferably a config meta defn. ie/ dialog defaults."
    }, 
    "ORWDPS1 QOMEDALT": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] per package 9.4 off 101.41, 101.43 ? on whether [COMPUTED] or plain get(s)", 
        "tags": [
            "K/META", 
            "COMPUTED"
        ]
    }, 
    "ORWDPS1 SCHALL": {
        "mn": "ORWDPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] all schedules [LOCATION]", 
        "tags": [
            "DFN", 
            "LOCATION"
        ]
    }, 
    "ORWDPS2 ADMIN": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] but 101.43 and [LOCATION] too", 
        "tags": [
            "DFN", 
            "LOCATION"
        ]
    }, 
    "ORWDPS2 CHKGRP": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] indirectly ie/ concrete order categorized [COMPUTED] ... legimate computed property", 
        "tags": [
            "DFN", 
            "COMPUTED"
        ]
    }, 
    "ORWDPS2 CHKPI": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] pre-existing patient instruction", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS2 DAY2QTY": {
        "mn": "ORWDPS2", 
        "catag": "UTILITY", 
        "descr": "pure JS candidate from input arguments"
    }, 
    "ORWDPS2 MAXREF": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] maximum # of refills", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS2 OISLCT": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "defaults for 101.43 values. Should be in parameter/config file - K meta", 
        "tags": [
            "HARD CODED",
            "K/META"
        ]
    }, 
    "ORWDPS2 QOGRP": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "101.43 quick order categorization K meta [COMPUTED] - legitimate computed property", 
        "tags": [
            "COMPUTED"
        ]
    }, 
    "ORWDPS2 QTY2DAY": {
        "mn": "ORWDPS2", 
        "catag": "UTILITY", 
        "descr": "calculate quantity in days given arguments ie/ [COMPUTED]", 
        "tags": [
            "COMPUTED"
        ]
    }, 
    "ORWDPS2 REQST": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] calculated from [LOCATION] and 101.43 meta", 
        "tags": [
            "DFN", 
            "LOCATION"
        ]
    }, 
    "ORWDPS2 SCHREQ": {
        "mn": "ORWDPS2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] - is schedule required [IS-A] for a combination of orderable item, route, specific drug", 
        "tags": [
            "K/META", 
            "IS-A"
        ]
    }, 
    "ORWDPS32 ALLIVRTE": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] Route 51.2", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDPS32 ALLROUTE": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 AUTH": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] permission for in patient meds", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWDPS32 AUTHNVA": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] permission for in non VA meds", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWDPS32 DLGSLCT": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 DOSES": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 DRUGMSG": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 FORMALT": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 ISSPLY": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 IVAMT": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 MEDISIV": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 OISLCT": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 SCSTS": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 VALQTY": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "Validate a medication quantity and return a 1 if it is valid, otherwisereturn 0."
    }, 
    "ORWDPS32 VALRATE": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 VALROUTE": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWDPS32 VALSCH": {
        "mn": "ORWDPS32", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [K/META] validate schedule", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "ORWDPS33 COMPLOC": {
        "mn": "ORWDPS33", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [DFN] as about an order and its [LOCATION]", 
        "tags": [
            "IS-A", 
            "DFN", 
            "LOCATION"
        ]
    }, 
    "ORWDPS33 GETADDFR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDPS33 IVDOSFRM": {
        "mn": "ORWDPS33", 
        "catag": "READ STRUCTURED", 
        "descr": "K META 101.43 with lists of ids"
    }, 
    "ORWDPS4 CPINFO": {
        "mn": "ORWDPS4", 
        "catag": "CHANGE"
    }, 
    "ORWDPS4 CPLST": {
        "mn": "ORWDPS4", 
        "catag": "READ STRUCTURED", 
        "descr": "get 'copay' questions DFN on 100", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS4 IPOD4OP": {
        "mn": "ORWDPS4", 
        "catag": "READ STRUCTURED", 
        "descr": "DFN is an Inpt (IV OI) order on an OutPatient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS4 ISUDIV": {
        "mn": "ORWDPS4", 
        "catag": "READ STRUCTURED", 
        "descr": "IS-A DFN True: OI of the order is for both UD and IV [COMPUTED] - valid computed property ie/ isUDandIV", 
        "tags": [
            "IS-A", 
            "DFN", 
            "COMPUTED"
        ]
    }, 
    "ORWDPS4 UPDTDG": {
        "mn": "ORWDPS4", 
        "catag": "CHANGE"
    }, 
    "ORWDPS5 ISVTP": {
        "mn": "ORWDPS5", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] [IS-A] [COMPUTED] order is verbalTelephonedOrPolicy ie/ should be an enum, added in RPC", 
        "tags": [
            "DFN", 
            "IS-A", 
            "COMPUTED"
        ]
    }, 
    "ORWDPS5 LESAPI": {
        "mn": "ORWDPS5", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] Call LES Api from inside CPRS for validating changed lab order - means goes outside to outer server ie/ VISTA routes?", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDPS5 LESGRP": {
        "mn": "ORWDPS5", 
        "catag": "UTILITY", 
        "descr": "'all of the orders' display groups LES checked' ie/ IEN's in 100.98 for LABORITORY, BLOOD BANK, CHEMISTRY, ... ie/ this is lookup by name! Allows LAB to be LAB or more ie/ name variation hard coded. [QUERY]", 
        "tags": [
            "QUERY"
        ]
    }, 
    "ORWDRA DEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWDRA32 APPROVAL": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] radiologists who can approve a procedure ie/ [QUERY]", 
        "tags": [
            "DUZ", 
            "QUERY"
        ]
    }, 
    "ORWDRA32 DEF": {
        "catag": "READ STRUCTURED", 
        "descr": "Argument decides which of the (hard coded) meta data you want to see",
        "tags": [
            "K/META",
            "HARD CODED"
        ]
    }, 
    "ORWDRA32 IMTYPSEL": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "[QUERY] List of active imaging types - 79.2 but keys off a check to 101.43 of $D(^ORD(101.43,\"S.\"_ORX)) which seems to be id's of imaging types that can be ordered. K META", 
        "tags": [
            "QUERY"
        ]
    }, 
    "ORWDRA32 ISOLATN": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] [IS-A] is a patient on isolation procedures? [COMPUTED]", 
        "tags": [
            "DFN", 
            "IS-A", 
            "COMPUTED"
        ]
    }, 
    "ORWDRA32 LOCTYPE": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] type", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWDRA32 PROCMSG": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "K META - order message for procedure 101.43 but none in nodeVISTA (bound(8))"
    }, 
    "ORWDRA32 RADSRC": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "K META - contract agreements of type SHARING or CONTRACT file 34. [QUERY] empty in nodeVISTA. Referenced by rad/med orders", 
        "tags": [
            "QUERY"
        ]
    }, 
    "ORWDRA32 RAORDITM": {
        "mn": "ORWDRA32", 
        "catag": "READ STRUCTURED", 
        "descr": "K META - [QUERY] subset of orderable imaging types", 
        "tags": [
            "QUERY"
        ]
    }, 
    "ORWDX AGAIN": {
        "mn": "ORWDX", 
        "domain": "ORDER",
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "Property of 101.41 dictates whether this dialog leads to another",
        "tags": [
            "K/META",
            "IS-A"
        ]
    }, 
    "ORWDX CHANGE": {
        "mn": "ORWDX", 
        "catag": "CHANGE", 
        "complexity": "MEDIUM",
        "descr": "First Parameter is list of Order IENs separated by semicolons; DFN is next; boolean for IMO order or not. Boolean true means check for quick order dialog; false means add treating specialist if INPATIENT. In CPRS description, use to change location if ward is selected",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX DGNM": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "100.98 display group by name", 
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "ORWDX DGRP": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "Like DGNM except allowed to pass tick mark and IEN of 100.48 too",
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "ORWDX DISMSG": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "Return 'disabled message' for 101.41 dialog if available (none in nodeVISTA)",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDX DLGDEF": {
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "Name of 101.41 will return a dialog definition",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDX DLGID": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "descr": "Get IEN of Dialog of Order",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX DLGQUIK": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED",
        "descr": "Pass in either X + IEN of Order or IEN of cached quick order or IEN of orderable (101.43) and get responses for an orderable. Normally never mix DFN and K/META but here K/META comes indirectly from 100 if that is used instead of orderable reference directly",
        "tags": [
            "DFN",
            "K/META"
        ]
    }, 
    "ORWDX FORMID": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "descr": "Pass IEN of Order and get form id of the base dialog of the order. Only means something to Delphi. Another example of 100 Id leading into K/META when should have started in K/META id",
        "tags": [
            "DFN",
            "K/META"
        ]
    }, 
    "ORWDX LOADRSP": {
        "catag": "READ STRUCTURED",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDX LOCK": {
        "catag": "UTILITY", 
        "descr": "Locks at patient level - this type of locks is stored in ^XTMP('ORPTLK-'_DFN,1). Used for Allergies as well as Orders",
        "tags": [
            "LOCK"
        ]
    }, 
    "ORWDX LOCK ORDER": {
        "catag": "UTILITY", 
        "descr": "Lock at Order level (as opposed to plain LOCK which locks at patient level)",
        "tags": [
            "LOCK"
        ]
    }, 
    "ORWDX MSG": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "descr": "Message text of 101.43 orderable",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDX ORDITM": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "descr": "subset of orderable items - starting value for looping index, direction, index name",
        "tags": [
            "K/META",
            "QUERY"
        ]
    }, 
    "ORWDX SAVE": {
        "catag": "CHANGE", 
        "descr": "Create an Order",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX SEND": {
        "mn": "ORWDX", 
        "catag": "CHANGE", 
        "descr": "Sign a list of orders with DFN, DUZ, encrypted code etc", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX SENDED": {
        "mn": "ORWDX", 
        "catag": "CHANGE", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX SENDP": {
        "mn": "ORWDX", 
        "catag": "CHANGE", 
        "descr": "Ala ORWDX SEND but print devices specified - can't see in nodeVISTA", 
        "tags": [
            "DFN", 
            "PRINT"
        ]
    }, 
    "ORWDX UNLKOTH": {
        "mn": "ORWDX", 
        "catag": "UTILITY", 
        "descr": "^XTMP('ORPTLK-'_DFN)'", 
        "tags": [
            "LOCK",
            "DFN"
        ]
    }, 
    "ORWDX UNLOCK": {
        "catag": "UTILITY", 
        "descr": "^XTMP('ORPTLK-'_DFN) - patient unlock if lock 'owned' by current process",
        "tags": [
            "LOCK"
        ]
    }, 
    "ORWDX UNLOCK ORDER": {
        "catag": "UTILITY", 
        "descr": "^XTMP('ORLK-'_ORDER,0)",
        "tags": [
            "LOCK"
        ]
    }, 
    "ORWDX WRLST": {
        "mn": "ORWDX", 
        "catag": "READ STRUCTURED", 
        "descr": "list of dialogs for writing orders. One optional argument is LOCATION.",
        "tags": [
            "K/META",
            "LOCATION"
        ]
    }, 
    "ORWDX1 DCORIG": {
        "mn": "ORWDX1", 
        "catag": "CHANGE", 
        "descr": "Discontinues an Order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX1 DCREN": {
        "mn": "ORWDX1", 
        "catag": "CHANGE", 
        "descr": "Pass in array of 100s; original orders returned", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX1 ORDMATCH": {
        "mn": "ORWDX1", 
        "catag": "UTILITY", 
        "descr": "list of order and assumed status - returns false for mismatched values ie/ a remote", 
        "tags": [
            "DFN",
            "IS-A"
        ]
    }, 
    "ORWDX1 PATWARD": {
        "mn": "ORWDX1", 
        "catag": "READ STRUCTURED", 
        "descr": "patient ward", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX1 STCHANGE": {
        "mn": "ORWDX1", 
        "catag": "UTILITY", 
        "complexity": "MEDIUM",
        "descr": "Order/Status combinations to check", 
        "tags": [
            "DFN",
            "IS-A"
        ]
    }, 
    "ORWDX1 UNDCORIG": {
        "mn": "ORWDX1", 
        "catag": "CHANGE", 
        "complexity": "LOW",   
        "descr": "List of Orders and set original order value to null - bug in implementation as returns nothing", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDX2 DCREASON": {
        "mn": "ORWDX2", 
        "catag": "READ STRUCTURED",
        "complexity": "LOW", 
        "descr": "List of valid discontinuation reasons from 100.03.",
        "tags": [
            "K/META",
            "QUERY"
        ]
    }, 
    "ORWDXA ALERT": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "complexity": "LOW",
        "descr": "set order to send alert when resulted ie/ sets field in 100", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA COMPLETE": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "complexity": "MEDIUM",
        "descr": "Complete an order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA DC": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "complexity": "HIGH",
        "descr": "discontinue, cancel, or delete an existing order.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA DCREQIEN": {
        "mn": "ORWDXA", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "IEN for Requesting Physician Cancelled reason 100.03",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA FLAG": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "flag an order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA FLAGTXT": {
        "mn": "ORWDXA", 
        "catag": "READ STRUCTURED", 
        "descr": "text of flag on order",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA HOLD": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "hold an order - adds action (100.008)", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA ISACTOI": {
        "mn": "ORWDXA", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "files": ["101.43"],
        "descr": "is order item 101.43 active?",
        "tags": [
            "K/META",
            "IS-A"
        ]
    }, 
    "ORWDXA OFCPLX": {
        "mn": "ORWDXA", 
        "catag": "READ STRUCTURED", 
        "descr": "is order a parent?", 
        "tags": [
            "DFN",
            "IS-A"
        ]
    }, 
    "ORWDXA UNFLAG": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "Unflag an existing order. Involves IEN of sub record?", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA UNHOLD": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "Unhold", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA VALID": {
        "catag": "UTILITY", 
        "descr": "is action valid for Order",
        "tags": [
            "DFN",
            "IS-A"
        ]
    }, 
    "ORWDXA VERIFY": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "Verify an order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA WCGET": {
        "catag": "READ STRUCTURED", 
        "descr": "matches WCPUT - returns WARD COMMENTs for an Order",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXA WCPUT": {
        "mn": "ORWDXA", 
        "catag": "CHANGE", 
        "descr": "Set ward comments for an order.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXC ACCEPT": {
        "mn": "ORWDXC", 
        "catag": "UTILITY", 
        "descr": "order checks - calculations from data, not straight FM data. Variation of DISPLAY for accepted orders.",      
        "tags": [
            "DFN",
            "REENTRANCY",
            "PARAMETER"
        ]
    }, 
    "ORWDXC DELAY": {
        "mn": "ORWDXC", 
        "catag": "UTILITY", 
        "descr": "order checks - calculations from data, not straight FM data. Variation of DISPLAY for delayed orders.", 
        "tags": [
            "DFN",
            "REENTRANCY",
            "PARAMETER"
        ]
    }, 
    "ORWDXC DELORD": {
        "mn": "ORWDXC", 
        "catag": "CHANGE", 
        "descr": "Deletes Order in some circumstances? (hence catag of CHANGE). Part of TMP using Order checks. Delete order checks. Effects 100.05 which caches checks", 
        "tags": [
            "DFN",
            "REENTRANCY"
        ]
    }, 
    "ORWDXC DISPLAY": {
        "mn": "ORWDXC", 
        "catag": "UTILITY", 
        "descr": "order checks - calculations from data, not straight FM data. Different for Pharmacy and Lab and uses XTMP to log if PARAMETER set", 
        "tags": [
            "DFN",
            "REENTRANCY",
            "PARAMETER"
        ]
    }, 
    "ORWDXC FILLID": {
        "mn": "ORWDXC", 
        "catag": "READ STRUCTURED", 
        "descr": "Filler ID (namespace) for a dialog. 101.41/100.98 - part of Order Checks", 
        "files": ["101.41", "100.98"],
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXC ON": {
        "mn": "ORWDXC", 
        "catag": "READ STRUCTURED", 
        "descr": "ORK SYSTEM ENABLE/DISABLE ie/ if order checking on", 
        "tags": [
            "PARAMETER",
            "IS-A"
        ]
    }, 
    "ORWDXC SAVECHK": {
        "catag": "UTILITY", 
        "descr": "Moves Order Checks in ORMONOGRAPH over to 100.05. Calling a UTILITY as part of a set of TMP using RPCs as opposed to straight data being sent and FM being updated",
        "tags": [
            "DFN",
            "REENTRANCY"
        ]
    }, 
    "ORWDXC SESSION": {
        "mn": "ORWDXC", 
        "catag": "UTILITY", 
        "descr": "Return list of Order Checks on Release Order - calls SESSION^ORCHECK which checks ORK SYSTEM ENABLE/DISABLE and sets up ORMONOGRAPH from 100.05", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXM AUTOACK": {
        "mn": "ORWDXM", 
        "catag": "CHANGE", 
        "descr": "Place a quick order (101.41 must have default dialog field and few in nodeVISTA) in CPRS GUI without the verify step.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXM DLGNAME": {
        "mn": "ORWDXM", 
        "catag": "READ STRUCTURED", 
        "descr": "name(s) of dialog & base dialog given IEN", 
        "tags": [
            "K/META",
            "IEN-LOOKUP"
        ]
    }, 
    "ORWDXM FORMID": {
        "mn": "ORWDXM", 
        "catag": "READ STRUCTURED", 
        "descr": "the FormID for a dialog 101.41", 
        "files": ["101.41"],
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXM LOADSET": {
        "catag": "READ STRUCTURED", 
        "descr": "Contents of an Order Set 101.41",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXM MENU": {
        "mn": "ORWDXM", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] menu contents for an order dialog", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXM MSTYLE": {
        "mn": "ORWDXM", 
        "catag": "READ STRUCTURED", 
        "descr": "the menu style for the system PARAMETER at system level", 
        "tags": [
            "PARAMETER",
            "S/META"
        ]
    }, 
    "ORWDXM PROMPTS": {
        "mn": "ORWDXM", 
        "catag": "READ STRUCTURED", 
        "descr": "101.41 ... record summary", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXM1 BLDQRSP": {
        "mn": "ORWDXM1", 
        "catag": "UTILITY", 
        "descr": "Build responses for an order - formal input nicely defined ** IMPORTANT **", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXM1 SVRPC": {
        "mn": "ORWDXM1", 
        "catag": "READ STRUCTURED", 
        "descr": "PARAMETER 'OR RA RFS CARRY ON' - should 'study' continue?", 
        "tags": [
            "PARAMETER",
            "DUZ",
            "IS-A"
        ]
    }, 
    "ORWDXM2 CLRRCL": {
        "mn": "ORWDXM2", 
        "catag": "UTILITY", 
        "descr": "clears a TMP ORECALL - so part of a transaction sequence"
    }, 
    "ORWDXM3 ISUDQO": {
        "mn": "ORWDXM3", 
        "catag": "READ STRUCTURED", 
        "descr": "is this a unit dose quick order ie/ set of &'s. COMPUTED or could have a set of classifications that are calculated", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "ORWDXQ DLGNAME": {
        "mn": "ORWDXQ", 
        "catag": "READ STRUCTURED", 
        "descr": "101.41 name", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXQ DLGSAVE": {
        "catag": "CHANGE", 
        "descr": "One of few change K/META's - makes QUICK ORDER from ORDERABLE",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXQ GETQLST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXQ GETQNAM": {
        "catag": "READ STRUCTURED", 
        "descr": "More Quick order stuff",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXQ PUTQLST": {
        "mn": "ORWDXQ", 
        "catag": "CHANGE", 
        "descr": "Save quick order list - per DUZ too?", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWDXQ PUTQNAM": {
        "mn": "ORWDXQ", 
        "catag": "CHANGE", 
        "descr": "Save display name for quick order dialog. RPC just has Q - does nothing",
        "tags": [
            "K/META",
            "HARD CODED"
        ]
    }, 
    "ORWDXR CANRN": {
        "mn": "ORWDXR", 
        "catag": "UTILITY", 
        "descr": "DFN IS-A can you renew? Could be COMPUTED?", 
        "tags": [
            "DFN", 
            "IS-A" 
        ]
    }, 
    "ORWDXR GETPKG": {
        "catag": "READ STRUCTURED", 
        "descr": "(prefix of) Package 9.4 to which Order is related (should really be on Orderable?)",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR GTORITM": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "complexity": "LOW",
        "descr": "return orderable item", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR ISCPLX": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "descr": "DFN - is it complex? IS-A COMPUTED", 
        "tags": [
            "DFN", 
            "IS-A", 
            "COMPUTED"
        ]
    }, 
    "ORWDXR ISNOW": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "descr": "DFN - is first time for Order, NOW?", 
        "tags": [
            "DFN", 
            "IS-A", 
            "COMPUTED"
        ]
    }, 
    "ORWDXR ISREL": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "descr": "has 100 been released?", 
        "tags": [
            "DFN", 
            "IS-A"
        ]
    }, 
    "ORWDXR ORCPLX": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "descr": "children orders of a complex order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR RENEW": {
        "mn": "ORWDXR", 
        "catag": "CHANGE", 
        "descr": "Renew an existing order.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR RNWFLDS": {
        "mn": "ORWDXR", 
        "catag": "READ STRUCTURED", 
        "descr": "return fields for the renew action", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR01 CANCHG": {
        "mn": "ORWDXR01", 
        "catag": "READ STRUCTURED", 
        "descr": "can edit?", 
        "tags": [
            "DFN", 
            "IS-A", 
            "COMPUTED"
        ]
    }, 
    "ORWDXR01 ISSPLY": {
        "mn": "ORWDXR01", 
        "catag": "READ STRUCTURED", 
        "descr": "is PLO SUPPLY DIALOG?", 
        "tags": [
            "IS-A",
            "K/META"
        ]
    }, 
    "ORWDXR01 OXDATA": {
        "mn": "ORWDXR01", 
        "catag": "READ STRUCTURED", 
        "descr": "order check usage", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXR01 SAVCHG": {
        "catag": "CHANGE", 
        "descr": "Save refills",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXVB COMPORD": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "Get sequence order of Blood Components for selection. Returns 101.43 in sequence and 101.43 walk summarizes these components", 
        "tags": [
            "K/META", 
            "PARAMETER"
        ]
    }, 
    "ORWDXVB GETALL": {
        "catag": "READ STRUCTURED", 
        "descr": "Patient's blood bank activity",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXVB NURSADMN": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] This procedure checks the parameter OR VBECS SUPPRESS NURS ADMIN to seeif the Nursing Administration Order prompt/pop-up should be supressedafter a VBECS Blood Bank order has been created.", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDXVB RAW": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "Return raw Lab Test Results associated with Blood Bank order - pass in test 60s too", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXVB RESULTS": {
        "mn": "ORWDXVB", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "Return patient's Lab Test Results associated with Blood Bank order", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWDXVB STATALOW": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER ie/ USER PROFILE", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWDXVB SUBCHK": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "Check to see if selected test is a Blood Component or a Diagnostic Test. 101.43", 
        "tags": [
            "K/META", 
            "COMPUTED"
        ]
    }, 
    "ORWDXVB VBTNS": {
        "mn": "ORWDXVB", 
        "catag": "READ STRUCTURED", 
        "descr": "days back to check 'ORWDXVB VBECS TNS CHECK'", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDXVB3 COLLTIM": {
        "mn": "ORWDXVB3", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC checks the value of the parameter OR VBECS REMOVE COLL TIMEto determine if a default collection time should be presented on theVBECS order dialog. [PARAMETER] 'OR VBECS REMOVE COLL TIME'", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDXVB3 DIAGORD": {
        "mn": "ORWDXVB3", 
        "catag": "READ STRUCTURED", 
        "descr": "Get sequence order of Diagnostic Tests for selection. List kept in [PARAMETER] and walks 101.43 for Diagnostic tests. Like 'ORWDXVB COMPORD'", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWDXVB3 SWPANEL": {
        "mn": "ORWDXVB3", 
        "catag": "READ STRUCTURED", 
        "descr": "PARAMETER OR VBECS DIAGNOSTIC PANEL 1ST - This RPC checks the value of the parameter OR VBECS DIAGNOSTIC PANEL 1STto determine the location of the Diagnostic and Component panels on theVBECS order dialog.", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWGEPT CLINRNG": {
        "mn": "ORWGEPT", 
        "catag": "NOT OSEHRA"
    }, 
    "ORWGN AUTHUSR": {
        "mn": "ORWGN", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ] can a user access group notes ie/ USER PREFERENCE", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWGN GNLOC": {
        "mn": "ORWGN", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] is valid GN location [IS-A]", 
        "tags": [
            "PARAMETER", 
            "IS-A"
        ]
    }, 
    "ORWGN IDTVALID": {
        "mn": "ORWGN", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWGN MAXFRQ": {
        "mn": "ORWGN", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] and Lexicon - checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values. (strange in group note utils)", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWGRPC ALLITEMS": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] patient summary - all items", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC ALLVIEWS": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] all views of user - USER PREFERENCE", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWGRPC CLASS": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] classifications from 50.605 etc", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWGRPC DATEITEM": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] patient items in date range", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC DELVIEWS": {
        "mn": "ORWGRPC", 
        "catag": "CHANGE", 
        "descr": "[DUZ] delete view", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWGRPC DETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC DETAILS": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC FASTDATA": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] all non graph data on patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC FASTITEM": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC FASTLABS": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC FASTTASK": {
        "mn": "ORWGRPC", 
        "catag": "UTILITY", 
        "descr": "[DFN] setup items - task XTMP et al", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC GETDATES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC GETPREF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC GETSIZE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC GETVIEWS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC ITEMDATA": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC ITEMS": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC LOOKUP": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] - item names for long lookup", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWGRPC PUBLIC": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] list", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWGRPC RPTPARAM": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] 101.24 OE/RR REPORT", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWGRPC SETPREF": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC SETSIZE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC SETVIEWS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWGRPC TAX": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] reminder taxonomies", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWGRPC TESTING": {
        "mn": "ORWGRPC", 
        "catag": "UTILITY"
    }, 
    "ORWGRPC TESTSPEC": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "Test spec data for lab tests [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWGRPC TYPES": {
        "mn": "ORWGRPC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] all types of data on a patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLEX GETFREQ": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWLEX GETI10DX": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWLR CUMULATIVE REPORT": {
        "mn": "ORWLR", 
        "catag": "UTILITY", 
        "descr": "This call returns an up to date laboratory cumulative report for a given patient. [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLR CUMULATIVE SECTION": {
        "mn": "ORWLR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] This rpc retrieves the part of the lab cumulative report selected by the user on the Labs tab.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLR REPORT LISTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWLRR ALLTESTS": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] lab results", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWLRR ATESTS": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] lab", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWLRR ATG": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] lab", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWLRR ATOMICS": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR CHART": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR CHEMTEST": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR GRID": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR INFO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWLRR INTERIM": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "Interim Report [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR INTERIMG": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR INTERIMS": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR MICRO": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR NEWOLD": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWLRR PARAM": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab param"
    }, 
    "ORWLRR SPEC": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR TG": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab [DUZ]", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWLRR USERS": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR UTGA": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR UTGD": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWLRR UTGR": {
        "mn": "ORWLRR", 
        "catag": "READ STRUCTURED", 
        "descr": "lab"
    }, 
    "ORWMC PATIENT PROCEDURES": {
        "mn": "ORWMC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] returns a list of patient procedures for a specific patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWMC PATIENT PROCEDURES1": {
        "mn": "ORWMC", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] This remote procedure call returns a list of patient procedures for a specific patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWMHV MHV": {
        "mn": "ORWMHV", 
        "catag": "UTILITY",
        "descr": "return if patient has MyHeatheVet (remote) data"
    }, 
    "ORWNSS CHKSCH": {
        "mn": "ORWNSS", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] schedule", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWNSS NSSMSG": {
        "mn": "ORWNSS", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ]", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWNSS QOSCH": {
        "mn": "ORWNSS", 
        "catag": "READ STRUCTURED", 
        "descr": "101.41 [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWNSS VALSCH": {
        "mn": "ORWNSS", 
        "catag": "READ STRUCTURED", 
        "descr": "100 [IS-A] [DFN]", 
        "tags": [
            "IS-A", 
            "DFN"
        ]
    }, 
    "ORWOR ACTION TEXT": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "100 [DFN] Return detail action information", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR EXPIRED": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER]", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWOR PKISITE": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "100.7 SITE PARAMETER not in parameter by [LOCATION] as accesses site set global", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWOR PKIUSE": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] user can use PKI Digital Signature?", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWOR RESULT": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "esults of order identified by ID [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR RESULT HISTORY": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] 100", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR SHEETS": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] order sheets for a patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR TSALL": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] 45.7 - treating specialities straight return", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWOR UNSIGN": {
        "mn": "ORWOR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] return unsigned orders", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR VWGET": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR VWSET": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR1 CHKDIG": {
        "mn": "ORWOR1", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] is digital sig required", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWOR1 GETDEA": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR1 GETDSCH": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR1 GETDSIG": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR1 GETDTEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWOR1 SETDTEXT": {
        "mn": "ORWOR1", 
        "catag": "CHANGE"
    }, 
    "ORWOR1 SIG": {
        "mn": "ORWOR1", 
        "catag": "CHANGE", 
        "descr": "[DFN] 101.52, store the sig", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB AUTOUNFLAG ORDERS": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] 100 Auto unflag orders/delete alert.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB FASTUSER": {
        "mn": "ORWORB", 
        "catag": "READ STRUCTURED", 
        "descr": "'notifications for current user', rolled up (note: need to get into notifications)"
    }, 
    "ORWORB GET TIU ALERT INFO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORB GETDATA": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORB GETSORT": {
        "mn": "ORWORB", 
        "catag": "READ STRUCTURED", 
        "descr": "'method for sorting gui display' - [PARAMETER] !", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWORB KILL EXPIR MED ALERT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] 100.9 Evaluate expiring med orders.  If none remain, kill current alert forcurrent user.  Kill for other users if alert so defined.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB KILL EXPIR OI ALERT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB KILL UNSIG ORDERS ALERT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] Check patient's unsigned orders, and kill unsigned orders alert for thisuser if no unsigned orders remain for his/her signature.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB KILL UNVER MEDS ALERT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] Delete UNVERIFIED MEDS notification if none remaining within current admission/30 days", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB KILL UNVER ORDERS ALERT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] Delete UNVERIFIED ORDER notification if none remaining within current admission/30 days", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORB SETSORT": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "YEP set [PARAMETER] (effects LIST)", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWORB TEXT FOLLOWUP": {
        "mn": "ORWORB", 
        "catag": "READ STRUCTURED", 
        "descr": "Returns text for notifications/alerts with a simple text message follow-upaction."
    }, 
    "ORWORB UNSIG ORDERS FOLLOWUP": {
        "mn": "ORWORB", 
        "catag": "CHANGE", 
        "descr": "[DFN] After viewing unsigned orders for a patient via an alert, evaluateswhether the alert should be deleted for the current user. The following two exception conditions exist when determining how alertdeletion will occur.  In all other cases, alert deletion will occur whenthe patient has no unsigned orders. 1)      If the recipient of this alert does NOT have the ORES key, thealert will be deleted for that recipient after he reviews the unsignedorders.  2)      If the recipient has the ORES key and is NOT linked to the patientas attending, inpatient primary provider or via OE/RR teams, his alertwill be deleted when his unsigned orders are signed.  (If unsigned orderswritten by other providers for the patient remain, alerts for these other providers will not be deleted.)  For example, a consulting surgeon (withORES) places three unsigned orders for a patient.  He then receives an \"Order requires electronic signature\" alert for the patient.  He uses the View Alerts follow-up action and is presented with ten unsigned orders forthe patient.  Only three of the ten orders are his.  The surgeon signs histhree unsigned orders.  If the surgeon is not linked to the patient asattending, inpatient primary providers or via OE/RR teams, the alert will be deleted (for him only.)   In most cases alert deletion will occur when the patient has no unsignedorders.  For example, if a recipient has the ORES key and is linked to thepatient as attending, inpatient primary provider or via OE/RR teams, allunsigned orders for the patient must be signed before his alert isdeleted.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWORDG ALLTREE": {
        "mn": "ORWORDG", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] 100.98", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWORDG GRPSEQB": {
        "mn": "ORWORDG", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] [PARAMETER] 'ORWOR CATEGORY SEQUENCE' 100.98", 
        "tags": [
            "K/META", 
            "PARAMETER"
        ]
    }, 
    "ORWORDG IEN": {
        "mn": "ORWORDG", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] [QUERY] lookup 100.98 by name", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "ORWORDG MAPSEQ": {
        "mn": "ORWORDG", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] [PARAMETER] 100.98 DISPLAY GROUP GROUPED", 
        "tags": [
            "K/META", 
            "PARAMETER"
        ]
    }, 
    "ORWORDG REVSTS": {
        "mn": "ORWORDG", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META]  Return the status flags available for review orders", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWORR AGET": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORR GET": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORR GET4LST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORR GETBYIFN": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORR GETTXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWORR RGET": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWPCE ACTIVE CODE": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "is code active at a particular date - ICD/CPT etc", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE ACTIVE PROV": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "Provider active for PCE for a visit date ie/ not a particular visit?",
        "tags": [
            "DUZ",
            "IS-A"
        ]
    }, 
    "ORWPCE ACTPROB": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "Build list of active problems for patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE ALWAYS CHECKOUT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "? CHECK IF STRUCT"
    }, 
    "ORWPCE ANYTIME": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] status of the ORWPCE ANYTIME ENCOUNTERS parameter [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWPCE ASKPCE": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] ORWPCE ASK ENCOUNTER UPDATE parameter value [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWPCE AUTO VISIT TYPE SELECT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "DUZ",
            "PARAMETER",
            "IS-A"
        ]
    }, 
    "ORWPCE CPTMODS": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] modifiers for CPT", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE CPTREQD": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [DFN] does note need a CPT?", 
        "tags": [
            "IS-A", 
            "DFN"
        ]
    }, 
    "ORWPCE CXNOSHOW": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] should workload requirement be skipped for this note's visit? [DFN]", 
        "tags": [
            "IS-A", 
            "DFN"
        ]
    }, 
    "ORWPCE DELETE": {
        "catag": "CHANGE", 
        "descr": "Delete PCE information related to a note being deleted.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE DIAG": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "get list of diagnoses for clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE FORCE": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "Retrieve FORCE GUI PCE Entry for a given User/Location", 
        "tags": [
            "DUZ", 
            "LOCATION", 
            "PARAMETER"
        ]
    }, 
    "ORWPCE GAFOK": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "patch - true if all supporting MH GAF Code exists", 
        "tags": [
            "IS-A", 
            "PATCH"
        ]
    }, 
    "ORWPCE GAFURL": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "returns MH url which is in YTAPI5.m", 
        "tags": [
            "HARD CODED",
            "S/META"
        ]
    }, 
    "ORWPCE GET DX TEXT": {
        "catag": "READ STRUCTURED", 
        "descr": "mixed one - setting screen size based on narrative text for code.",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE GET EDUCATION TOPICS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET EXAM TYPE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET EXCLUDED": {
        "catag": "READ STRUCTURED", 
        "descr": "List of excluded PCE entries - for user, kept in PARAMETER",
        "tags": [
            "PARAMETER",
            "DUZ"
        ]
    }, 
    "ORWPCE GET HEALTH FACTORS TY": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET IMMUNIZATION TYPE": {
        "catag": "READ STRUCTURED", 
        "descr": "Active immunizations",
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET SET OF CODES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET SKIN TEST TYPE": {
        "catag": "READ STRUCTURED",
        "descr": "Active entries in 9999999.28", 
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET TREATMENT TYPE": {
        "catag": "READ STRUCTURED", 
        "descr": "TREATMENT (9999999_17) listing",
        "tags": [
            "QUERY",
            "K/META"
        ]
    }, 
    "ORWPCE GET VISIT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "DFN",
            "IEN-LOOKUP"
        ]
    }, 
    "ORWPCE GETMOD": {
        "catag": "READ STRUCTURED", 
        "descr": "Info for a specified modifier",
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE GETSVC": {
        "catag": "READ STRUCTURED",
        "descr": "Right service connected category",
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE HASCPT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "type maps to CPT through 811_1 (leverages meta)", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE HASVISIT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "doc has visit", 
        "tags": [
            "DFN",
            "IS-A"
        ]
    }, 
    "ORWPCE HF": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "Part of set like IMM ... list of health factors for clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE HNCOK": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "true if Head and/or Neck Cancer is enabled ... PATCH checker", 
        "tags": [
            "IS-A", 
            "PATCH",
            "S/META"
        ]
    }, 
    "ORWPCE I10IMPDT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "Note: about meta data so should work in nodeVISTA as is",
        "tags": [
            "HARD CODED",
            "S/META"
        ]
    }, 
    "ORWPCE ICDVER": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "System config - ICD code version 9 or 10",
        "tags": [
            "HARD CODED",
            "S/META"
        ]
    }, 
    "ORWPCE IMM": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "list of immunizations for clinic - calls into 357.6 PACKAGE INTERFACE, 357.2 SELECTION LIST etc. Not Parameter as would seem to fit", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE ISCLINIC": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "is it a clinic?", 
        "tags": [
            "LOCATION", 
            "IS-A"
        ]
    }, 
    "ORWPCE LEX": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "lexicon", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE LEXCODE": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "lexicon", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWPCE LOADGAF": {
        "catag": "READ STRUCTURED",
        "descr": "GAF score Patient", 
        "tags": [
            "DFN",
            "REDACTED"
        ]
    }, 
    "ORWPCE MH TEST AUTHORIZED": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] Indicates if a given mental health test can be given by the given user.", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWPCE MHCLINIC": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] if mental health clinic [IS-A]", 
        "tags": [
            "LOCATION", 
            "IS-A"
        ]
    }, 
    "ORWPCE MHTESTOK": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "mental health APIs active and user allowed", 
        "tags": [
            "DUZ", 
            "PARAMETER",
            "IS-A"
        ]
    }, 
    "ORWPCE NOTEVSTR": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] visit - author for note", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE PCE4NOTE": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "encounter for note", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE PED": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] list of education topics for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE PROC": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "list of procedures for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE SAVE": {
        "catag": "CHANGE", 
        "descr": "Save PCE info from CPRS to PCE with visit string passed in",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE SAVEGAF": {
        "catag": "CHANGE", 
        "descr": "Save new GAF score - mental health but redacted in OSEHRA",
        "tags": [
            "DFN",
            "REDACTED"
        ]
    }, 
    "ORWPCE SCDIS": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "service connected and rated disabilities", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE SCSEL": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "sc conditions that may be selected for patient", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPCE SK": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] skin tests for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE TRT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "treatment types for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE VISIT": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "visit types for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE XAM": {
        "mn": "ORWPCE", 
        "catag": "READ STRUCTURED", 
        "descr": "exams for a clinic", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWPCE1 NONCOUNT": {
        "mn": "ORWPCE1", 
        "catag": "READ STRUCTURED", 
        "descr": "Is a given HOSPITAL LOCATION (file 44) a non-count clinic?  (DBIA #964) [LOCATION]", 
        "tags": [
            "LOCATION",
            "IS-A"
        ]
    }, 
    "ORWPCE4 LEX": {
        "mn": "ORWPCE4", 
        "catag": "READ STRUCTURED", 
        "tags": [
            "QUERY", 
            "K/META"
        ]
    }, 
    "ORWPFSS IS PFSS ACTIVE?": {
        "mn": "ORWPFSS", 
        "catag": "READ STRUCTURED", 
        "descr": "should you pass visit string with order - PATCH check and others", 
        "tags": [
            "IS-A", 
            "PATCH",
            "S/META"
        ]
    }, 
    "ORWPS ACTIVE": {
        "mn": "ORWPS", 
        "catag": "READ STRUCTURED",
        "descr": "listing of a patient’s active inpatient and outpatientmedications.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPS COVER": {
        "mn": "ORWPS", 
        "catag": "READ STRUCTURED",
        "descr": "list of medications to display on the CPRS GUI cover sheet for apatient.",
        "tags": [
            "DFN",
            "QUERY"
        ]
    }, 
    "ORWPS DETAIL": {
        "catag": "READ STRUCTURED", 
        "descr": "Med Order Detail",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPS MEDHIST": {
        "mn": "ORWPS", 
        "catag": "READ STRUCTURED", 
        "descr": "Show admin history for a med - uses Orders (100)", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPS REASON": {
        "mn": "ORWPS", 
        "catag": "READ STRUCTURED", 
        "descr": "non va med reasons - reasons/meta stored in PARAMETER. Could have been K/META file. ex/ \"1^Non-VA medication not recommended by VA provider.\"", 
        "tags": [
            "PARAMETER",
            "K/META"
        ]
    }, 
    "ORWPS1 NEWDLG": {
        "mn": "ORWPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "Return order dialog info for New Medication, in or outpatient - D NEWDLG^ORWPS1(.X,0) works - 101_41-147 to PSO OERR", 
        "tags": [
            "PARAMETER", 
            "K/META"
        ]
    }, 
    "ORWPS1 PICKUP": {
        "mn": "ORWPS1", 
        "catag": "READ STRUCTURED", 
        "descr": "file 550 CMOP Setup/Config (disabled in nodeVISTA - problem?) - simple two value setting",
        "tags": [
            "S/META"
        ]
    }, 
    "ORWPS1 REFILL": {
        "mn": "ORWPS1", 
        "catag": "CHANGE", 
        "descr": "RPC to submit a request for a refill.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT ADMITLST": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED",
        "tags": [
            "DFN"  
        ]
    }, 
    "ORWPT APPTLST": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "date ranges for clinic appointments",
        "tags": [
            "DFN",
            "LOCATION"
        ]
    }, 
    "ORWPT BYWARD": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "list of patients in a ward (file 42)",
        "tags": [
            "DFN",
            "LOCATION"
        ]
    }, 
    "ORWPT CLINRNG": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "date ranges for clinic appointments",
        "tags": [
            "K/META",
            "HARD CODED"
        ]
    }, 
    "ORWPT CWAD": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "CWAD flags for patient - relies on TIU and its indexes (hence A shows). Put into Doc Issue.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT DFLTSRC": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "Users default patient list source - parameter 'ORLP DEFAULT LIST SOURCE' used", 
        "tags": [
            "PARAMETER",
            "DUZ"
        ]
    }, 
    "ORWPT DIEDON": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "Date of death if expired.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT DISCHARGE": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "given a patient and an admission date, return the discharge date/time.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT ENCTITL": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "Values to display for encounter (LOCNAME^LOCABBR^ROOMBED^PROVNAME)",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT FULLSSN": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "SSN in the format 999999999(P), return a list of matchingpatients.",
        "tags": [
            "DFN",
            "QUERY"
        ]
    }, 
    "ORWPT FULLSSN RPL": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "an SSN in the format 999999999(P), return a list of matching patients based on Restricted Patient List. From Users 101.21 and OE/RR LIST",
        "tags": [
            "DFN",
            "QUERY"
        ]
    }, 
    "ORWPT ID INFO": {
        "catag": "READ STRUCTURED", 
        "descr": "identifying information for a patient - series of values from Patient (2)",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT INPLOC": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "Patient location keys off .102, patient movement in PATIENT (2)",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT LAST5": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "list of patients by matching A9999 identifiers",
        "tags": [
            "DFN",
            "QUERY"
        ]
    }, 
    "ORWPT LAST5 RPL": {
        "mn": "ORWPT", 
        "descr": "Takes DUZ and returns list from User record either its fixed 101.02 patient selection list OR from its OE/RR LIST (100_21) list",
        "catag": "READ STRUCTURED",
        "tags": [
            "DFN",
            "QUERY"
        ]
    }, 
    "ORWPT LEGACY": {
        "mn": "ORWPT", 
        "catag": "UTILITY", 
        "descr": "Remote access: checks legacy systems (out of VDP scope)",
        "tags": [
            "DFN",
            "REMOTE",
            "OUT-OF-SCOPE"
        ]
    }, 
    "ORWPT LIST ALL": {
        "catag": "READ STRUCTURED", 
        "descr": "Return a bolus of patient names.  From is either Name or IEN^Name.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT PTINQ": {
        "mn": "ORWPT", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "Returns formatted patient inquiry text for display in GUI environment.",
        "tags": [
            "DFN"
        ]
    }, 
    "ORWPT SAVDFLT": {
        "catag": "CHANGE", 
        "descr": "Save new default patient list - sets a series of PARAMETERs",
        "tags": [
            "DUZ",
            "PARAMETER"
        ]
    }, 
    "ORWPT SELCHK": {
        "mn": "ORWPT", 
        "catag": "CHANGE", 
        "descr": "sensitive patient check - 38.1 has entry per sensitive patient and access logs are recorded/created here too. This RPC sees is sensitive set for the patient.",
        "keys": [
            "DFN"
        ]
    }, 
    "ORWPT SELECT": {
        "mn": "ORWPT", 
        "catag": "CHANGE", 
        "descr": "Returns info from PATIENT(2), if patient sensitive then logs in 38.1 and sends bulletin and also sets DISV which is picked up in TOP (and returns demographic data but set is key)",
        "tags": [
            "DFN",
            "REENTRANCY",
            "BULLETIN"
        ]
    }, 
    "ORWPT SHARE": {
        "mn": "ORWPT", 
        "catag": "UTILITY", 
        "descr": "\"SET GLOBAL 'ORWCHART' to share patient with other apps! ie/ key tmp",
        "tags": [
            "DFN",
            "REENTRANCY"
        ]
    }, 
    "ORWPT TOP": {
        "mn": "ORWPT", 
        "catag": "READ STRUCTURED", 
        "descr": "'last selected patient' => profile? stored in GLOBAL DISV! (implicltly per user). ORWPT SELECT sets",
        "tags": [
            "DFN",
            "REENTRANCY"
        ]
    }, 
    "ORWPT1 PCDETAIL": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWPT1 PRCARE": {
        "mn": "ORWPT1", 
        "catag": "READ STRUCTURED", 
        "descr": "Primary care info and used by JLV"
    }, 
    "ORWPT16 ADMITLST": {
        "mn": "ORWPT16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return a list of admissions per patient (relies on 42 and 405 - see ADMITLST^ORWPT)"
    }, 
    "ORWPT16 APPTLST": {
        "mn": "ORWPT16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return list of appointments per patient. Done in VISIT prototype as goes there."
    }, 
    "ORWPT16 DEMOG": {
        "mn": "ORWPT16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return common patient demographic info - nice and easy - straight out of DPT(2)/PATIENT. See DEMOG^ORWPT16"
    }, 
    "ORWPT16 GETVSIT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWPT16 ID INFO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWPT16 LIST ALL": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWPT16 LOOKUP": {
        "mn": "ORWPT16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return a set of patient names - uses FM API on PATIENT (2) - should be easy to lock. LOOKUP^ORWPT16"
    }, 
    "ORWPT16 PSCNVT": {
        "mn": "ORWPT16", 
        "catag": "READ STRUCTURED", 
        "descr": "seems to do nothing S VAL=0"
    }, 
    "ORWRA DEFAULT EXAM SETTINGS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRA IMAGING EXAMS": {
        "mn": "ORWRA", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] This remote procedure call returns a list on imaging exams for aspecific patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWRA IMAGING EXAMS1": {
        "mn": "ORWRA", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] This remote procedure call returns a list on imaging exams for aspecific patient.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWRA PRINT REPORT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRA REPORT TEXT": {
        "mn": "ORWRA", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWRA REPORT TEXT1": {
        "mn": "ORWRA", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWRP COLUMN HEADERS": {
        "mn": "ORWRP", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] Get list of Column headers for a ListView type report from file 101.24.", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP GET DEFAULT PRINTER": {
        "mn": "ORWRP", 
        "catag": "UTILITY", 
        "descr": "but may be just a READ"
    }, 
    "ORWRP LAB REPORT LISTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT LAB REMOTE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT LAB REPORTS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT REMOTE REPORT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT REPORT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT V REPORT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT WINDOWS LAB REMOTE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT WINDOWS REMOTE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP PRINT WINDOWS REPORT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP REPORT LISTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP REPORT TEXT": {
        "mn": "ORWRP", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "[DFN] This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll n scroll version of CPRS.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWRP SAVE DEFAULT PRINTER": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP WINPRINT DEFAULT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP WINPRINT LAB REPORTS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP1 LISTNUTR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP16 REPORT LISTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWRP16 REPORT TEXT": {
        "mn": "ORWRP16", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "VITALS CUMMULATE/ HEALTH SUMMARY etc as options (TRY NOW: see RPTLIST^ORWRP16)"
    }, 
    "ORWRP2 COMPABV": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC returns an array of the ADHOC Health Summary components by abbreviation. 142 Health Summary Type - a hard coded 'GMTS HS ADHOC OPTION' id for health summary which gathers others.", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 COMPDISP": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC returns an array of the ADHOC Health Summary components by display name. Ala COMPABV, different form", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 GETLKUP": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] not per user 'ORWRP ADHOC LOOKUP' global", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWRP2 HS COMP FILES": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC gets a list of files to select from for the ADHOC Health Summary. 142.5", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 HS COMPONENT SUBS": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC returns an array of ADHOC Health Summary subcomponents. Particular subcomponent", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 HS COMPONENTS": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC returns an array of the ADHOC Health Summary components.", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 HS FILE LOOKUP": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC gets the list of file entries for the file defined for a specificHealth Summary component on the ADHOC Health Summary.  Current choicesinclude files 60, 9999999.64, 811.9 (reminder defn), 8925.1, 81, and possibly others(handled generically).  The file entries are used to populate a combo boxon the form.", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 HS REPORT TEXT": {
        "mn": "ORWRP2", 
        "catag": "READ UNSTRUCTURED", 
        "descr": "(TRY NOW) uses HEALTH SUMMARY META file 142 ie/ key HEALTH SUMMARY REPORT"
    }, 
    "ORWRP2 HS SUBITEMS": {
        "mn": "ORWRP2", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] This RPC expands a Laboratory Test panel to all it's sub-components forselection in the ADHOC Health Summary. ie/ type 60", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWRP2 SAVLKUP": {
        "mn": "ORWRP2", 
        "catag": "CHANGE", 
        "descr": "[PARAMETER] [DUZ] 'ORWRP ADHOC LOOKUP' ad hoc lookup for a user", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWRP3 EXPAND COLUMNS": {
        "mn": "ORWRP3", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC loads and expands nested reports defined in the OE/RR Reportsfile (#101.24) for use on the Reports Tab in CPRS. [K/META] [PARAMETER] and more.", 
        "tags": [
            "K/META", 
            "PARAMETER"
        ]
    }, 
    "ORWRP4 HDR MODIFY": {
        "mn": "ORWRP4", 
        "catag": "UTILITY", 
        "descr": "This RPC looks at data returned from the HDR and makes any modifications necessary to make the data compatible with CPRS Reports. OE/RR REPORT (101_24) related."
    }, 
    "ORWSR CASELIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWSR GET SURG CONTEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWSR IS NON-OR PROCEDURE": {
        "mn": "ORWSR", 
        "catag": "READ STRUCTURED", 
        "descr": "Surgery [DFN] - is case non-OR or not [IS-A]", 
        "tags": [
            "DFN", 
            "IS-A"
        ]
    }, 
    "ORWSR LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWSR ONECASE": {
        "mn": "ORWSR", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] Given a TIU document IEN, return the surgical case record and all otherdocuments related to the case, for display in the GUI treeview.", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWSR RPTLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWSR SAVE SURG CONTEXT": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWSR SHOW OPTOP WHEN SIGNING": {
        "mn": "ORWSR", 
        "catag": "READ STRUCTURED", 
        "descr": "Hard coded - config ie/ should be [PARAMETER]", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWSR SHOW SURG TAB": {
        "mn": "ORWSR", 
        "catag": "READ STRUCTURED", 
        "descr": "Check for presence of SR - [PARAMETER] and patch - decides whether to show surgery tab in CPRS (ala show vital tab?) 'ORWOR SHOW SURGERY TAB'", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWTIU CANLINK": {
        "mn": "ORWTIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] Given a title, call CANLINK^TIULP to determine whether this title can use linked as an Interdisciplinary child note. dbia #2322 - error messages if can't link document", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWTIU CHKTXT": {
        "mn": "ORWTIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] Check for existence of text in TIU(8925,TIUDA, either in \"TEXT\" or \"TEMP\" nodes, before allowing signature. (should be easy to try)", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWTIU GET DCSUMM CONTEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU GET LISTBOX ITEM": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU GET SAVED CP FIELDS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU GET TIU CONTEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU IDNOTES INSTALLED": {
        "mn": "ORWTIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[PATCH] check if patch installed [IS-A] - returned 1 on OSEHRA", 
        "tags": [
            "PATCH", 
            "IS-A"
        ]
    }, 
    "ORWTIU SAVE DCSUMM CONTEXT": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU SAVE TIU CONTEXT": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTIU WINPRINT NOTE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD ACTDF": {
        "mn": "ORWTPD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] Make default time/occ setting take action on each report - [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPD DELDFLT": {
        "mn": "ORWTPD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] [PARAMETER] Delete user level's specific health summary component setting( date range and max occurences) ie/ profile stuff", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPD GETDFLT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD GETIMG": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD GETOCM": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD GETSETS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD PUTOCM": {
        "mn": "ORWTPD", 
        "catag": "CHANGE", 
        "descr": "[PARAMETER] 'ORCH CONTEXT MEDS' [DUZ]", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWTPD RSDFLT": {
        "mn": "ORWTPD", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] get system or package level default setting for all repors.", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWTPD SUDF": {
        "mn": "ORWTPD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] [PARAMETER] Set user level default time/occ limits for all reports", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPD SUINDV": {
        "mn": "ORWTPD", 
        "catag": "CHANGE", 
        "descr": "[DUZ] [PARAMETER] set user level individual report's time/occ setting", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPD1 GETCSDEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD1 GETCSRNG": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD1 GETEAFL": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD1 GETEDATS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD1 GETEFDAT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPD1 PUTCSRNG": {
        "mn": "ORWTPD1", 
        "catag": "CHANGE", 
        "descr": "[DUZ] [PARAMETER] Save user's Cover Sheet data range defaults.", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPD1 PUTEDATS": {
        "mn": "ORWTPD1", 
        "catag": "CHANGE", 
        "descr": "[DUZ] [PARAMETER] Save Encounter app't date range params at user level.", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPN GETCLASS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPN GETTC": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPO CSARNGD": {
        "mn": "ORWTPO", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] ORQQCSDR CS RANGE START' get defaults", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWTPO CSLABD": {
        "mn": "ORWTPO", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] lab results", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWTPO GETIMGD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPO GETTABS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP ADDLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP CHKSURR": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ] check if current user's surrogate is valid", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWTPP CLDAYS": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ] get user's clinic defaults", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWTPP CLEARNOT": {
        "mn": "ORWTPP", 
        "catag": "CHANGE", 
        "descr": "[DUZ] clear current user's notifications - gets into Alert Tracking 8992.1", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWTPP CLRANGE": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] get current user's default clinic start, stop dates [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPP CSARNG": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] get current user's start, stop defaults [PARAMETER]", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWTPP CSLAB": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[PARAMETER] [DUZ] get user's lab date range defaults", 
        "tags": [
            "PARAMETER", 
            "DUZ"
        ]
    }, 
    "ORWTPP DELLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETCOMBO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETCOS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETDCOS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETIMG": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETNOT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETNOTO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETOC": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETOTHER": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETREM": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETSUB": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETSURR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETTD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP GETTU": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP LSDEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP NEWLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP PLISTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP PLTEAMS": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] get current user's teams and personal lists - uses OE/RR LIST (100_21) which links providers and patients", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWTPP REMLIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVECD": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVECS": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVELIST": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVENOT": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVENOTO": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVEOC": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVEPLD": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVESURR": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SAVET": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETCOMBO": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETDCOS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETIMG": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETOTHER": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETREM": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SETSUB": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP SORTDEF": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWTPP TEAMS": {
        "mn": "ORWTPP", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] all teams a user is a member of (exculdes personal lists) - 100.21 (should be pure get but 'c' index used seems to be a MUMPS index)", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWTPR NOTDESC": {
        "mn": "ORWTPR", 
        "catag": "READ STRUCTURED", 
        "descr": "OE/RR NOTIFICATIONS ie/ used to generate notifications [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWTPR OCDESC": {
        "mn": "ORWTPR", 
        "catag": "READ STRUCTURED", 
        "descr": "Order checks 100_8 (ex duplicate drug) - gets text [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWTPT ATEAMS": {
        "mn": "ORWTPT", 
        "catag": "READ STRUCTURED", 
        "descr": "100.21 all teams available to subscribe to [I/META]", 
        "tags": [
            "I/META"
        ]
    }, 
    "ORWTPT GETTEAM": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWU CLINLOC": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] set of clinics", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWU DEFAULT DIVISION": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWU DEVICE": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "subset of entries from the device file [I/META]", 
        "tags": [
            "I/META"
        ]
    }, 
    "ORWU DT": {
        "mn": "ORWU",
        "catag": "UTILITY",
        "descr": "lot's of nuance - see www.hardhats.org/fileman/pm/cl_dt1.htm",
        "tags": [
            "HARD CODED"
        ]
    },
    "ORWU EXTNAME": {
        "mn": "ORWU", 
        "catag": "UTILITY", 
        "descr": "external form of a pointer"
    }, 
    "ORWU GBLREF": {
        "mn": "ORWU", 
        "catag": "UTILITY", 
        "descr": "global reference for a file number"
    }, 
    "ORWU GENERIC": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[UTILITY] set of entries from any XREF", 
        "tags": [
            "UTILITY"
        ]
    }, 
    "ORWU HAS OPTION ACCESS": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] does a user have access to a specified menu option", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWU HASKEY": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] does user possess a security key?", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWU HOSPLOC": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] a set of locations from HOSPITAL LOCATION", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWU INPLOC": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[LOCATION] a set of wards from HOSPITAL LOCATION", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWU NEWPERS": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "returns set of names from 200",
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWU NPHASKEY": {
        "mn": "ORWU", 
        "catag": "AUTHENTICATION"
    }, 
    "ORWU PARAM": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] Simple call to return a parameter value.  The call assumes the currentuser, defaultable entities, and one instance.", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWU PARAMS": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] Simple call to return a list of parameter values using GETLST", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWU PATCH": {
        "mn": "ORWU", 
        "catag": "UTILITY", 
        "descr": "[PATCH] Patch No for code - path ends up looking in 9.4 etc. TODO: inventory what uses underlying call too", 
        "tags": [
            "PATCH"
        ]
    }, 
    "ORWU TOOLMENU": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [PARAMETER] number of items for tool menu", 
        "tags": [
            "DUZ", 
            "PARAMETER"
        ]
    }, 
    "ORWU USERINFO": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "TRYIT ... User Parameters ie/ add to User Prototype"
    }, 
    "ORWU VALDT": {
        "catag": "UTILITY", 
        "tags": [
            "HARD CODED"
        ]
    }, 
    "ORWU VALIDSIG": {
        "mn": "ORWU", 
        "catag": "UTILITY"
    }, 
    "ORWU VERSION": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "version number of package or namespace [SYS]", 
        "tags": [
            "S/META"
        ]
    }, 
    "ORWU VERSRV": {
        "mn": "ORWU", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] server version of option name", 
        "tags": [
            "K/META"
        ]
    }, 
    "ORWU1 NAMECVT": {
        "mn": "ORWU1", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] 200/20.2 (sig block)", 
        "tags": [
            "DUZ"
        ]
    }, 
    "ORWU1 NEWLOC": {
        "mn": "ORWU1", 
        "catag": "READ STRUCTURED", 
        "descr": "Return \"CZ\" locations from HOSPITAL LOCATION file [LOCATION]", 
        "tags": [
            "LOCATION"
        ]
    }, 
    "ORWU16 DEVICE": {
        "mn": "ORWU16", 
        "catag": "READ STRUCTURED", 
        "descr": "devices"
    }, 
    "ORWU16 HOSPLOC": {
        "mn": "ORWU16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return a bolus from the HOSPITAL LOCATION file", 
        "tags": [
            "QUERY", 
            "LOCATION"
        ]
    }, 
    "ORWU16 NEWPERS": {
        "mn": "ORWU16", 
        "catag": "READ STRUCTURED", 
        "descr": "Return a bolus from the NEW PERSON file [QUERY] 200 but not for particular user. KEY used to filter list (who has key?)", 
        "tags": [
            "QUERY"
        ]
    }, 
    "ORWU16 USERINFO": {
        "mn": "ORWU16", 
        "catag": "READ STRUCTURED"
    }, 
    "ORWU16 VALDT": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "ORWU16 VALIDSIG": {
        "mn": "ORWU16", 
        "catag": "UTILITY"
    }, 
    "ORWU2 COSIGNER": {
        "mn": "ORWU2", 
        "catag": "READ STRUCTURED", 
        "descr": "[DFN] cosigner 200 in TIUs", 
        "tags": [
            "DFN"
        ]
    }, 
    "ORWUH POPUP": {
        "mn": "ORWUH", 
        "catag": "READ STRUCTURED", 
        "descr": "instructions for given control [PARAMETER]", 
        "tags": [
            "PARAMETER"
        ]
    }, 
    "ORWUL FV4DG": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "101.44, 101.43 ie quick and orderables - list [K/META] [QUERY]", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "ORWUL FVIDX": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "101.43 return index of item beginning with FROM [K/META] [QUERY]", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "ORWUL FVSUB": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "101.44 - subset of orders in view [K/META] [QUERY]", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "ORWUL QV4DG": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "[QUERY] [PARAMETER] [K/META] the quick order list, given a display group name ... checks parameter ORWDQ QUICK VIEW for permission and group from 100.98", 
        "tags": [
            "QUERY", 
            "PARAMETER", 
            "K/META"
        ]
    }, 
    "ORWUL QVIDX": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "101.44 / [K/META] [QUERY]", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "ORWUL QVSUB": {
        "mn": "ORWUL", 
        "catag": "READ STRUCTURED", 
        "descr": "subset of orders in view [QUERY] [K/META]", 
        "tags": [
            "QUERY", 
            "K/META"
        ]
    }, 
    "ORWUX SYMTAB": {
        "mn": "ORWUX", 
        "catag": "READ STRUCTURED", 
        "descr": "[UTILITY] the current symbol table - be inside a TMP!", 
        "tags": [
            "UTILITY"
        ]
    }, 
    "ORWUXT LST": {
        "mn": "ORWUXT", 
        "catag": "READ STRUCTURED", 
        "descr": "just Q", 
        "tags": [
            "HARD CODED"
        ]
    }, 
    "ORWUXT REF": {
        "mn": "ORWUXT", 
        "catag": "READ STRUCTURED", 
        "descr": "just Q", 
        "tags": [
            "HARD CODED"
        ]
    }, 
    "ORWUXT VAL": {
        "mn": "ORWUXT", 
        "catag": "READ STRUCTURED", 
        "descr": "just Q", 
        "tags": [
            "HARD CODED"
        ]
    }, 
    "PXRM REMINDER CATEGORY": {
        "mn": "PXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "811.7 List reminders and categories in display order for a reminder category.", 
        "tags": [
            "K/META"
        ]
    }, 
    "PXRM REMINDER DIALOG (TIU)": {
        "mn": "PXRM", 
        "catag": "UTILITY", 
        "descr": "801.41 used to build - loads dialog for a user and evaluates it (eventually EVALTERM^PXRMTERM) [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "PXRM REMINDERS AND CATEGORIES": {
        "mn": "PXRM", 
        "catag": "READ STRUCTURED", 
        "descr": "gives list of reminder types - straight IEN^NAME ie/ ala SELECT in FMQL [QUERY] allows paging", 
        "tags": [
            "K/META", 
            "QUERY"
        ]
    }, 
    "TIU AUTHORIZATION": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] allows the calling application to evaluate privilege to performany ASU-mediated action on a TIU document. [IS-A] - logic on property combinations", 
        "tags": [
            "DUZ", 
            "IS-A"
        ]
    }, 
    "TIU CAN CHANGE COSIGNER?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[DUZ] [IS-A] BOOLEAN RPC to evaluate user's privilege to modify the expected cosigner, given the current status of the document, and the user's role with respect to it.", 
        "tags": [
            "DUZ", 
            "IS-A"
        ]
    }, 
    "TIU CREATE ADDENDUM RECORD": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU CREATE RECORD": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU DELETE RECORD": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU DETAILED DISPLAY": {
        "catag": "READ UNSTRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU DIV AND CLASS INFO": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED"
    }, 
    "TIU DOCUMENTS BY CONTEXT": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[QUERY] [DFN] documents by context", 
        "tags": [
            "QUERY", 
            "DFN"
        ]
    }, 
    "TIU FIELD CAN EDIT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD CHECK": {
        "mn": "TIU", 
        "catag": "UTILITY", 
        "descr": "Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved. rename XML fields"
    }, 
    "TIU FIELD DELETE": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD DOLMTEXT": {
        "mn": "TIU", 
        "catag": "UTILITY", 
        "descr": "Reads through an array of text and converts all entries of templatefields to their assocaited List Manager text values. ie/ fills in text in template places - would be user independent"
    }, 
    "TIU FIELD EXPORT": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "Exports Template Fields in XML format 8927.1 - [K/META] ... kind of utility", 
        "tags": [
            "K/META"
        ]
    }, 
    "TIU FIELD IMPORT": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "Imports Template Fields from XML format [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "TIU FIELD LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD LIST ADD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD LIST IMPORT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD LOAD": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD LOAD BY IEN": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD LOCK": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD NAME IS UNIQUE": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [K/META] Returns TRUE if the template field name is unique 8927.1", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU FIELD SAVE": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU FIELD UNLOCK": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET ADDITIONAL SIGNERS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET ALERT INFO": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET BOILERPLATE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DEFAULT PROVIDER": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DOCUMENT PARAMETERS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DOCUMENT STATUS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DOCUMENT TITLE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DOCUMENTS FOR REQUEST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DS TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET DS URGENCIES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET LINKED PRF NOTES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET LIST OF OBJECTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET PERSONAL PREFERENCES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET PN TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET PRF ACTIONS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET PRF TITLE": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET PRINT NAME": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET RECORD TEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET REQUEST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU GET SITE PARAMETERS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU HAS AUTHOR SIGNED?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [DFN] has author signed", 
        "tags": [
            "IS-A", 
            "DFN"
        ]
    }, 
    "TIU ID ATTACH ENTRY": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "This RPC will attach a a document as an Interdisciplinary (ID) entry to anID Parent document. [DUZ] sends alert too", 
        "tags": [
            "DUZ"
        ]
    }, 
    "TIU ID CAN ATTACH": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This BOOLEAN RPC evaluates the question of whether a particular documentmay be attached as an entry to an Interdisciplinary Note (i.e., can thisdocument be an ID Child?). [IS-A] [K/META] based on doc types", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU ID CAN RECEIVE": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?). [DFN] [IS-A]", 
        "tags": [
            "DFN", 
            "IS-A"
        ]
    }, 
    "TIU ID DETACH ENTRY": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "This call will remove an ID Entry from an Interdisciplinary Note. [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "TIU IDENTIFY CLINPROC CLASS": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC gets the CLINICAL PROCEDURES TIU Document Definitionfile (#8925.1) IEN. [K/META]", 
        "tags": [
            "K/META"
        ]
    }, 
    "TIU IDENTIFY CONSULTS CLASS": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC returns the record number of the class CONSULTS in the TIUDOCUMENT DEFINITION file (#8925.1). [QUERY] [K/META]", 
        "tags": [
            "QUERY", 
            "K/META"
        ]
    }, 
    "TIU IDENTIFY SURGERY CLASS": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1). [QUERY] [K/META]", 
        "tags": [
            "QUERY", 
            "K/META"
        ]
    }, 
    "TIU IS THIS A CLINPROC?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC evaluates whether or not a Title is under theCLINICAL PROCEDURES Class. [IS-A] [K/META]", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU IS THIS A CONSULT?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "BOOLEAN RPC which evaluates whether the title indicated is that of aconsult. [IS-A] [K/META]", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU IS THIS A SURGERY?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.). [IS-A] [K/META]", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU IS USER A PROVIDER?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This Boolean RPC returns TRUE if the user was a known provider on the date specified - Checks USR CLASS PROVIDER AND 200 Person Class. [DUZ] [IS-A]", 
        "tags": [
            "DUZ", 
            "IS-A"
        ]
    }, 
    "TIU IS USER A USR PROVIDER": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified. [DUZ] [IS-A]", 
        "tags": [
            "DUZ", 
            "IS-A"
        ]
    }, 
    "TIU ISPRF": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE. [IS-A] [K/META]", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU JUSTIFY DELETE?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED"
    }, 
    "TIU LINK TO FLAG": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "This RPC is used to link a Progress Note to a Patient Record Flag [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "TIU LOAD BOILERPLATE TEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LOAD RECORD FOR EDIT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LOCK RECORD": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LONG LIST BOILERPLATED": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LONG LIST CLINPROC TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LONG LIST CONSULT TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LONG LIST OF TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU LONG LIST SURGERY TITLES": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU NOTES": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME. [DFN] [QUERY]", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "TIU NOTES 16 BIT": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME. [DFN] [QUERY]", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "TIU NOTES BY VISIT": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This API gets lists of Progress Notes by visit from TIU. [DFN] [QUERY]", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "TIU ONE VISIT NOTE?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "Boolean RPC to evaulate if note has a corresponding visit. [DFN] [IS-A]", 
        "tags": [
            "DFN", 
            "IS-A"
        ]
    }, 
    "TIU PERSONAL TITLE LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU PRINT RECORD": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU REM DLG OK AS TEMPLATE": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [K/META] TRUE is the passed in reminder dialog is allowed to be used ina TIU Template.", 
        "tags": [
            "IS-A", 
            "K/META"
        ]
    }, 
    "TIU REMINDER DIALOGS": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] a list of reminder dialogs allowed for use as Templates.", 
        "tags": [
            "K/META"
        ]
    }, 
    "TIU REQUIRES COSIGNATURE": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false. [DUZ] [IS-A]", 
        "tags": [
            "DUZ", 
            "IS-A"
        ]
    }, 
    "TIU SET ADMINISTRATIVE CLOSURE": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU SET DOCUMENT TEXT": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "buffers text transmission"
    }, 
    "TIU SIGN RECORD": {
        "mn": "TIU", 
        "catag": "CHANGE", 
        "descr": "This API Supports the application of the user's electronic signature to aTIU document while evaluating authorization, and validating the user selectronic signature. [DFN]", 
        "tags": [
            "DFN"
        ]
    }, 
    "TIU SUMMARIES": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This API gets lists of Discharge Summaries for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME. [DFN] [QUERY]", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "TIU SUMMARIES BY VISIT": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This API returns lists of Discharge Summaries by visit. [DFN] [QUERY]", 
        "tags": [
            "DFN", 
            "QUERY"
        ]
    }, 
    "TIU TEMPLATE ACCESS LEVEL": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED"
    }, 
    "TIU TEMPLATE ALL TITLES": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[K/META] Returns a long list of all active titles.", 
        "tags": [
            "K/META"
        ]
    }, 
    "TIU TEMPLATE CHECK BOILERPLATE": {
        "mn": "TIU", 
        "catag": "UTILITY", 
        "descr": "This RPC will evaluate boilerplate passed in the input array, checking tosee whether any of the embedded objects are inactive, faulty, orambiguous."
    }, 
    "TIU TEMPLATE CREATE/MODIFY": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE DELETE": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GET DEFAULTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GET DESCRIPTION": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETBOIL": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETITEMS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETLINK": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETPROOT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETROOTS": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE GETTEXT": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE ISEDITOR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE LISTOWNR": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE LOCK": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE PERSONAL OBJECTS": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "a list or Patient Data Objects allowed in Personal Templates [DUZ]", 
        "tags": [
            "DUZ"
        ]
    }, 
    "TIU TEMPLATE SET DEFAULTS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE SET ITEMS": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU TEMPLATE UNLOCK": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU UNLOCK RECORD": {
        "catag": "UTILITY", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU UPDATE ADDITIONAL SIGNERS": {
        "mn": "TIU", 
        "catag": "CHANGE"
    }, 
    "TIU UPDATE RECORD": {
        "mn": "TIU", 
        "catag": "CHANGE"
    }, 
    "TIU USER CLASS LONG LIST": {
        "catag": "READ STRUCTURED", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU USER INACTIVE?": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "[IS-A] [DUZ] evaluates user's DIUSER status and termination status when selected.Returns 0 if active 1 if inactive", 
        "tags": [
            "IS-A", 
            "DUZ"
        ]
    }, 
    "TIU WAS THIS SAVED?": {
        "catag": "CHANGE", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "TIU WHICH SIGNATURE ACTION": {
        "mn": "TIU", 
        "catag": "READ STRUCTURED", 
        "descr": "This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC. [DUZ]", 
        "tags": [
            "DUZ"
        ]
    }, 
    "VAFCTFU CONVERT ICN TO DFN": {
        "mn": "VAFCTFU", 
        "catag": "READ STRUCTURED", 
        "descr": "Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2). [QUERY] [DFN]", 
        "tags": [
            "QUERY", 
            "DFN"
        ]
    }, 
    "XUS AV CODE": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS AV HELP": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS CCOW VAULT PARAM": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS CVC": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS DIVISION GET": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS DIVISION SET": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS GET CCOW TOKEN": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS GET TOKEN": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS GET USER INFO": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS INTRO MSG": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS PKI GET UPN": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS PKI SET UPN": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XUS SIGNON SETUP": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB CREATE CONTEXT": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB DEFERRED CLEARALL": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB DIRECT RPC": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB GET BROKER INFO": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB GET VARIABLE VALUE": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB IM HERE": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB REMOTE CLEAR": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB REMOTE GETDATA": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB REMOTE RPC": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "XWB REMOTE STATUS CHECK": {
        "catag": "AUTHENTICATION", 
        "tags": [
            "HEURISTIC"
        ]
    }, 
    "YS GAF API": {
        "mn": "YS", 
        "catag": "READ STRUCTURED", 
        "descr": "Mental Health [DFN]", 
        "tags": [
            "DFN"
        ]
    }
};

try {
   module.exports = rpcsCategorized;
}
catch(exception) {
   //will fail in browser - config is referenced by browser client for convenience
}