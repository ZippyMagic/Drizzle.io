' Code for lockFile.js

#using <mscorlib.dll>
using namespace System;
using namespace System::IO;
using namespace System::Text;

void main()
{
    UnicodeEncoding* uniEncoding = new UnicodeEncoding();
    String* lastRecordText = 
        S"The last processed record number was: ";
    int textLength = uniEncoding->GetByteCount(lastRecordText);
    int recordNumber = 13;
    int byteCount = 
        uniEncoding->GetByteCount(recordNumber.ToString());
    String* tempString;

    Console::Write(
        S"\nEnter the file location");
    
    FileStream* fileStream = new FileStream(
        SConsole::ReadLine(), FileMode::OpenOrCreate, 
        FileAccess::ReadWrite, FileShare::ReadWrite);
    try
    {
        // Write the original file data.
        if(fileStream->Length == 0)
        {
            tempString = String::Concat(
                lastRecordText, recordNumber.ToString());
            fileStream->Write(uniEncoding->GetBytes(tempString), 
                0, uniEncoding->GetByteCount(tempString));
        }

        // Allow the user to choose the operation.
        Char consoleInput = 'R';
        Byte readText __gc[] = new Byte __gc[fileStream->Length];
        while(consoleInput != 'X')
        {
            Console::Write(
                S"\nEnter 'R' to read, 'W' to write, 'L' to "  
                S"lock, 'U' to unlock, anything else to exit: ");

            if((tempString = Console::ReadLine())->Length == 0)
            {
                break;
            }
            consoleInput = Char::ToUpper(tempString->get_Chars(0));
            switch(consoleInput)
            {
                // Read data from the file and 
                // write it to the console.
                case 'R':
                    try
                    {
                        fileStream->Seek(0, SeekOrigin::Begin);
                        fileStream->Read(
                            readText, 0, (int)fileStream->Length);
                        tempString = new String(
                            uniEncoding->GetChars(
                            readText, 0, readText->Length));
                        Console::WriteLine(tempString);
                        recordNumber = Int32::Parse(
                            tempString->Substring(
                            tempString->IndexOf(':') + 2));
                    }

                    // Catch the IOException* generated if the 
                    // specified part of the file is locked.
                    catch(IOException* e)
                    {
                        Console::WriteLine(S"{0}: The read " 
                            S"operation could not be performed " 
                            S"because the specified part of the " 
                            S"file is locked.", 
                            e->GetType()->Name);
                    }
                    break;

                // Update the file.
                case 'W':
                    try
                    {
                        fileStream->Seek(textLength, 
                            SeekOrigin::Begin);
                        fileStream->Read(
                            readText, textLength - 1, byteCount);
                        tempString = new String(
                            uniEncoding->GetChars(
                            readText, textLength - 1, byteCount));
                        recordNumber = Int32::Parse(tempString) + 1;
                        fileStream->Seek(
                            textLength, SeekOrigin::Begin);
                        fileStream->Write(uniEncoding->GetBytes(
                            recordNumber.ToString()), 0, byteCount);
                        fileStream->Flush();
                        Console::WriteLine(
                            S"Record has been updated.");
                    }

                    // Catch the IOException* generated if the 
                    // specified part of the file is locked.
                    catch(IOException* e)
                    {
                        Console::WriteLine(
                            S"{0}: The write operation could not " 
                            S"be performed because the specified " 
                            S"part of the file is locked.", 
                            e->GetType()->Name);
                    }
                    break;

                // Lock the specified part of the file.
                case 'L':
                    try
                    {
                        fileStream->Lock(textLength - 1, byteCount);
                        Console::WriteLine(S"The specified part " 
                            S"of file has been locked.");
                    }
                    catch(IOException* e)
                    {
                        Console::WriteLine(
                            S"{0}: The specified part of file is" 
                            S" already locked.", e->GetType()->Name);
                    }
                    break;

                // Unlock the specified part of the file.
                case 'U':
                    try
                    {
                        fileStream->Unlock(
                            textLength - 1, byteCount);
                        Console::WriteLine(S"The specified part " 
                            S"of file has been unlocked.");
                    }
                    catch(IOException* e)
                    {
                        Console::WriteLine(
                            S"{0}: The specified part of file is " 
                            S"not locked by the current process.", 
                            e->GetType()->Name);
                    }
                    break;

                // Exit the program.
                default:
                    consoleInput = 'X';
                    break;
            }
        }
    }
    __finally
    {
        fileStream->Close();
    }
}
