---
layout: blog
---  

**A Brief History and Why It Matters for Developers**

The command-line interface (CLI) has been an important tool for developers since the Stone Age of computing. From the first computers that relied on punched cards and teletype machines to the modern era of powerful workstations and cloud computing, the CLI has evolved alongside technology to become an essential part of software development. In this blog post, we'll explore the history of the CLI, the various shells you can use, and why it remains a key skill all developers should have.

**History of the CLI**

The Terminal allows users to interact with the computer using a keyboard and display, and it has primarily been used by programmers and system administrators since its introduction in the 1960s. At that time, home computers were not yet widespread, and their use was limited. In the 1970s and 1980s, the Command Line Interface (CLI) evolved with the introduction of Unix, a multi-user, multi-tasking operating system that was designed to be highly flexible and customizable. Unix popularized the use of shell scripts, which allowed users to automate tasks and workflows using a series of commands, making the CLI even more powerful and efficient. While the CLI has been largely supplanted by the Graphical User Interface (GUI), which enables users to navigate and manipulate computer functions through visual icons, menus, and buttons, proficiency in using the CLI remains a valuable asset for developers, as it enables them to work efficiently, automate tasks, and troubleshoot issues more effectively.

**Different Shells**

A shell is a user interface responsible for processing all commands typed on CLI. It reads and interprets the commands and instructs the operating system to perform tasks as requested. In other words, a shell is a user interface that manages CLI and acts as the man-in-the-middle, connecting users with the operating system.

Several different shells are available, each with its strengths and weaknesses. Some of the shells include:

- Bash (Bourne-Again Shell): is one of the most widely used shells and is the default shell on many Linux distributions.
- Zsh (Z shell): is another popular shell that offers many advanced features, is very customizable with Oh My Zsh, and is the current default on MacOS.
- Fish (Friendly Interactive Shell): is a newer shell that aims to make CLI easier for beginners.
- Bourne Shell (sh): The first default shell and was created in 1979.
- Bourne Again Shell (bash): This was the default login shell for earlier versions of macOS and was a remake of the sh shell that was the original.

**Why Knowing the CLI is Important for Developers**

Knowing how to use the CLI is essential for developers because it allows them to work efficiently and effectively. Here are just a few reasons why:

- Speed: The CLI is much faster than using a graphical user interface (GUI) for many tasks. For example, navigating through directories, running tests, and deploying applications can all be done much quicker using the CLI.
<br/>
<br/>
- Automation: The CLI allows developers to automate repetitive tasks using scripts, which saves time and reduces errors. This makes it easy to perform tasks like building and deploying applications, backing up data, and monitoring servers.
<br/>
<br/>
- Collaboration: Many development teams use the CLI to collaborate on projects. By sharing scripts and commands, team members can work together more easily and avoid misunderstandings.

Even though CLI is cool and important there are some downsides as well.

- GUI is more user-friendly.
- steeper learning curve associated with memorizing commands and complex syntax/arguments (however you can assign alias and automate commands)
- different commands used in different shells.
- example:
- List files and folders
- mac -> ls and windows -> dir
- Full path of current folder/directory
- mac -> pwd and windows -> cd

**Why this matters**

The CLI may seem old-school to some and IDEs like VSCode and others have made simple commands more user-friendly, but it remains a vital tool for developers. Its flexibility, speed, and power make it an essential part of any developer's toolkit. Whether you're a seasoned pro or just starting, learning the CLI will help you work more efficiently and effectively, and it will open up new possibilities for your development skills.  

Not only will it allow you to open your chance for work but will also give you a leg up on anyone who might not know how to work in the terminal.  You know what they say… everything always comes back, I mean have you seen all this denim and did you know that kids are using flip phones again?

So, if you haven't already, use the CLI more, make your files from your terminal, and jump to new directories – you won't regret it!

Below is a list of commands you might find useful:

| Command | Action |
| -- |
| pwd | Print Working Directory |
| --- | --- | --- |
| ls | List Directories |
| cd | Change Directory |
| mkdir | make a directory You can also create subdirectories at the same time with the -p (parent flag). |
| touch | Make New File |
| nano | Enter a text file to add text |
| vim | Another way to edit i to add:wq - to exit |
| cat | concatenate -> display contents |
| textutil  | Change the type of file txt, html, rtf, rtfd, doc, docx |
| cp | Copy |
| mv | Move |
| find - look | If you need to find something -> search bar find /home -name <file name> |
| man - look | You can get a manual of stuff man ls |
| whatis | Give you a brief break down |
| alias | If you want to make your own short hand |
| rm | Remove -take caution when using rm, there is no magical trash can that you can fish out removed files. Once they are gone, they are gone for good, so be careful.rm -f -> with force rm -i -> will ask if you want to rm -r -> is the big guns |
| exit | Get up out of there |
| diff | See the difference |
| cmp | Compare two files |
| history | See the previous commands you have run can also use the up arrow or just `!!` to rerun the same |
| shred | The dog ate my homework |

Here are some fun commands to run on your MacOS 

- caffeinate -u -t <seconds> - adjust the sleep settings
- open -a <app> <file> - can open an app
- cal - see a calendar
- top - see memory
- say - the computer will say out loud what ever you put after this command

**List of articles that were used in researching this post:**

- [Command-line Interface (CLI) - CIO Wiki (cio-wiki.org)](https://cio-wiki.org/wiki/Command-line_Interface_(CLI))
- [A Brief History of the Command Line (freecodecamp.org)](https://www.freecodecamp.org/news/the-command-line-1fdbc692b3bf/)
- [A Short History of Unix and its Command Line Interface ( CLI) – Victoria PiMakers And Others (vicpimakers.ca)](https://vicpimakers.ca/tutorials/raspbian/a-short-history-of-unix-and-its-command-line-interface-cli/)
- [Ancient History  What is the Command Line? Adafruit Learning Syste](https://learn.adafruit.com/what-is-the-command-line/ancient-history)
- [Mac Terminal Commands and Tricks List (macupdate.com)](https://www.macupdate.com/how-to/mac-terminal-commands-list)

**AI was also used to review for clarity and grammar**


|stripe=true|
|---|
| Cell 1 | Cell 2 
| --- | --- | --- |
| Cell 4 | Cell 5 | Cell 6 |
| --- | --- | --- |
| Cell 7 | Cell 8 | Cell 9 |