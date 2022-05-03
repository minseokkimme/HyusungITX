(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    var randNum = Math.random();

    botOptions.JWTUrl = "http://localhost:3000/api/users/sts";
    botOptions.userIdentity = randNum;// Provide users email id here
    botOptions.botInfo = { name: "Starfield_FAQ", "_id": "st-da313bb3-a9ea-59a7-9d41-652709d4bf5d" }; // bot name is case sensitive

    /* 
    Important Note: These keys are provided here for quick demos to generate JWT token at client side but not for Production environment.
    Refer below document for JWT token generation at server side. Client Id and Client secret should maintained at server end.
    https://developer.kore.ai/docs/bots/sdks/user-authorization-and-assertion/
    **/
    botOptions.clientId = "cs-268a960a-de8a-58e1-9167-3e21509a6fba";
    botOptions.clientSecret = "p9QEr6hM+djA8wNAbMRBUu0/XJsox0E+Pin6ulzs3zs=";
    botOptions.brandingAPIUrl = botOptions.koreAPIUrl +'websdkthemes/'+  botOptions.botInfo._id+'/activetheme';
    botOptions.enableThemes = false;
// for webhook based communication use following option 
// botOptions.webhookConfig={
//     enable:true,
//     webhookURL:'PLEASE_PROVIDE_WEBHOOK_URL',
//     useSDKChannelResponses: false, //Set it to true if you would like to use the responses defined for Web/Mobile SDK Channel
//     apiVersion:2 //webhookURL will be converted to v2 by default. To use v1(not recommended) webhookURL change it to 1
// }
   
// To modify the web socket url use the following option
// botOptions.reWriteSocketURL = {
//     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
//     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
//     port: 'PORT_TO_BE_REWRITTEN'
// };
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: true, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: true, 			// set true, to show send button below the compose bar
        isTTSEnabled: true,			// set true, to hide speaker icon
        ttsInterface:'webapi',        // webapi or awspolly , where default is webapi
        isSpeechEnabled: true,			// set true, to hide mic icon
        allowGoogleSpeech: true,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: true,			// set false, to deny sending location to server
        loadHistory: true,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: true, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode: false,             // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css  
        multiPageApp: {
            enable: false,              //set true for non SPA(Single page applications)
            userIdentityStore: 'localStorage',//'localStorage || sessionStorage'
            chatWindowStateStore: 'localStorage'//'localStorage || sessionStorage'
        },              
        supportDelayedMessages:true,    // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI       
        maxTypingIndicatorTime:10000,   //time in milliseconds,typing indicator will be stopped after this time limit,even bot doesn't respond 
        pickersConfig:{
            showDatePickerIcon:false,           //set true to show datePicker icon
            showDateRangePickerIcon:false,      //set true to show dateRangePicker icon
            showClockPickerIcon:false,          //set true to show clockPicker icon
            showTaskMenuPickerIcon:false,       //set true to show TaskMenu Template icon
            showradioOptionMenuPickerIcon:false //set true to show Radio Option Template icon
        },
        sendFailedMessage:{
            MAX_RETRIES:3
        }
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);
