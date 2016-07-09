if("serviceWorker" in navigator){
    console.log("Service worker is supported");
    
    navigator.serviceWorker.register("sw.js").then(function(reg){
        console.log(":^)", reg);
    }).catch(function(err){
        console.log(":^(", err);
    });
}