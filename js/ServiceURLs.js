﻿
var serviceURLslocal = {
    fileslist: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/GetFilesList",
    inspectionslist: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/GetInspectionsList",
    inspectionshistory: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/GetInspectionsHistory",
    uploadinspectionhistory: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/uploadinspectionhistory",
    uploadcustomfile: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/UploadCustomFile",
    fixuploadfile: "http://tct.reservoirkb.com/CMapSVCtest/Service1.svc/FixUploadedFile",
    EventCalendar: "http://tct.reservoirkb.com/CMapSvcTest/Service1.svc/GetEvents",    
    LoadUnits: "http://tct.reservoirkb.com/CMapSvcTest/Service1.svc/GetUnitNames",
    UnitDetails: "http://tct.reservoirkb.com/CMapSvcTest/Service1.svc/GetUnitDetails",
    GetRecent20Files: "http://tct.reservoirkb.com/CMapSvcTest/Service1.svc/GetRecent20Files"
};


	
var serviceURLsProd = {
    fileslist: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetFilesList",
    inspectionslist: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetInspectionsList",
    inspectionshistory: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetInspectionsHistory",
    uploadinspectionhistory: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/uploadinspectionhistory",
    uploadcustomfile: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/UploadCustomFile",
    fixuploadfile: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/FixUploadedFile",
    EventCalendar: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetEvents",
    LoadUnits: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetUnitNames",
    UnitDetails: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetUnitDetails",
    GetRecent20Files: "http://tct.reservoirkb.com/CMapSvc/Service1.svc/GetRecent20Files"
};
 
 
        window.serviceURLs = serviceURLslocal;
	   //window.serviceURLs = serviceURLsProd;