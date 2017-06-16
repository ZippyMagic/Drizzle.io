var a = Drizzle();



Drizzle.writeTextFile( name, path, contents ) {
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var a = fso.CreateTextFile(path + name + ".txt", true);
  var letter = 0;
  var letter2;
  var string = "";
  var string2;
  
  for(I = 0; I < contents.length; I++) {    
    if(contents.charAt[letter] === "/" && contents.charAt[letter + 1] === "n") {
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
