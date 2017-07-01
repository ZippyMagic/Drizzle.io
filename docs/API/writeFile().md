# API
This is part of the [Drizzle.io](https://github.com/ZippyMagic/Drizzle.io/blob/master/docs/API/README.md) API Documents

## writeFile()
This API is called using the [use('FileSystem');](https://github.com/ZippyMagic/Drizzle.io/blob/master/docs/API/use().md) method. Once called, you gain access to the writeFile() library, also found [here](https://github.com/ZippyMagic/Drizzle.io/blob/master/src/api/use.js).

Some examples include:

* FileSystem.writeTextFile("C:/Documents/example.txt", "Greetings Human!", function(err) { return console.log(err); });
> This example creates a text file at C:/Document/example.txt that contains the text "Greetings Human!", but cancels it if an error has occured and logs it.
