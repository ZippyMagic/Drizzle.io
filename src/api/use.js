/*
*Attaches all API together
*
*Created by @ZippyMagic
*/
var System;
var FileSystem;

function use(Import) {	
    if(Import === "System") {
        System = new System();
    } else if(Import.charAt(0) === "C" && Import.charAt(1) === ":") {
        readTextFile(Import + "\project.json", function(text){
            var data = JSON.parse(text);
            var key = data.module-name;

            window[key] = new Object;
		});
    } else if(Import === "FileSystem") {
        FileSystem = new FileSystem();
    } else {
        return console.log("net.Import.Module: {" + Import + "} does not exist.")
	}
}
