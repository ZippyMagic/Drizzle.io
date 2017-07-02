using System;

public enum Commands
{
    1 = "exit",
    2 = "help",
}
public class Terminal
{
    public static void Main()
    {
        Console.WriteLine("Accessing Terminal Code and scripts...");
        Console.WriteLine("Welcome to the terminal user!");
        
        System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo(@"C:\");

        while(command != "exit")
        {
            foreach (System.IO.FileInfo file in dir.GetFiles("*.*"))
            {
                Console.WriteLine("{0}, {1}", file.Name, file.Length);
            }
            int command = Console.ReadLine();
            
            for(int I = 0; I < Command.length; I++)
            {
                if(command == Commands.1)
                {
                    Application.Exit();
                } else if(command == Commands.2)
                {
                    Console.WriteLine("EXIT: Closes the terminal");
                    Console.WriteLine("HELP: Displays all commands");
                }
            }
        }
    }
}
