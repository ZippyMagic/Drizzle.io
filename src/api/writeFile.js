/*
* writeFile() API will be worked on
*
* Created by @ZippyMagic on 6/16/17. Will be logged
*/
'use-strict'


function Drizzle() {
  
  
  // Defines the 'writeTextFile()' command
  // TODO: Make way to link files using C++, C#, or C
  this.writeTextFile = function(  name, path, contents ) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile(path + name + ".txt", true);
    var letter = 0;
    var letter2;
    var string = "";
    var string2;
  
    // Checks to see if '/n' is in, if it is then it breaks to a new line.
    // Repeats until strings has been fully parsed
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
