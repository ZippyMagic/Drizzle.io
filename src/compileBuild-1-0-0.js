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
function FileSystem() {
  this.writeTextFile = function(  name, path, contents ) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile(path + name + ".txt", true);
    var letter = 0;
    var letter2;
    var string = "";
    var string2;
    for(I = 0; I < contents.length; I++) {    
      if(contents.charAt[letter] === "/n" && contents.charAt[letter + 1] === "n") {
        letter2 = letter;
        letter = letter2 + 2;
        a.WriteLine(string)      
      } else {
        string2 = string;
        string = string2 + contents.charAt[letter];
        letter++
      }
    }
    a.Close();
  }
}
