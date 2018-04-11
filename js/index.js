jQuery(document).ready(function($) {
    SetupTerminal.CreateTerminal();
    SetupTerminal.StartTyping();
});

var SetupTerminal = (function () {
    var that = this;
    var typed;

    this.createTerminal = function() {
        var terminal = $('.content').terminal(function(command, term) {
            command = command.toLowerCase();

            if (command == 'home' || command == 'clear') {
                term.reset();
            } else if (command == 'experience') {
                term.echo(that.setExperienceCommand());
            } else if (command == 'projects') {
                term.echo(that.setProjectsCommand());
            } else if (command == 'about') {
                term.echo(that.setAboutCommand());
            } else if (command == 'blog') {
                that.setBlogCommand();
            } else if (command == 'help') {
                term.echo(that.setHelpCommand());
            } else if (command == 'message') {
                that.typed.destroy();
                that.startTyping();
            } else if (command == 'github') {
                term.echo(that.setGithubCommand());
            } else {
                term.echo("Unknown command. Please type or click 'help' to display the available commands.");
            }
        },
        {
            prompt: 'user@tsikopoulos:~ ',
            name: 'user@tsikopoulos:~',
            greetings: that.setTerminalGreeting(),
            onInit: function(term) {
                term.echo('Please, type or click [[b;#fff;]help] to display available commands. \n', { keepWords: true });
            },
            clear: false,
            history: false,
            exit: false,
            completion: function(command, callback) {
                callback(['home', 'clear', 'experience', 'projects', 'about', 'blog', 'help', 'message', 'github']);
            }
        });

        that.setButtonsClickEvents(terminal);
    }

    this.startTyping = function() {
        var options = {
            strings: ["<i>Hello visitor!</i>", 
                        "<i>This is Dimitrios Tsikopoulos!<i>", 
                        "<i>Welcome to tsikopoulos.eu.<i>", 
                        "<i>Please type 'help' to display all the available commands<i>",
                        "<i>or just click the menu items to type the commands for you!<i>",
                        "<i>If you want to see this message again please type 'message'<i>",
                        "<i>user@tsikopoulos:~<i>"
                    ],
            typeSpeed: 100,
            onComplete: function (self) {
                $(".typed-cursor").hide();
            }
        }
          
        that.typed = new Typed("#welcomemessage", options);
    }

    setButtonsClickEvents = function(terminal) {
        $("#home").on("click", function(){ terminal.exec("home"); });
        $("#experience").on("click", function(){ terminal.exec("experience"); });
        $("#projects").on("click", function(){ terminal.exec("projects"); });
        $("#about").on("click", function(){ terminal.exec("about"); });
        $("#blog").on("click", function(){ terminal.exec("blog"); });
        $("#help").on("click", function(){ terminal.exec("help"); });
        $("#github").on("click", function(){ terminal.exec("github"); });
    }

    setTerminalGreeting = function() {
        return   " _____        _   _                       _                   \n"
                +"|_   _| ___  |_| | |_   ___   ___   ___  | |  ___   ___       ___   _ _ \n"
                +"  | |  |_ -| | | | '_| | . | | . | | . | | | | . | |_ -|  _  | -_| | | |\n"
                +"  |_|  |___| |_| |_,_| |___| |  _| |___| |_| |___| |___| |_| |___| |___|\n"
                +"                             |_|                          \n"
    }

    setExperienceCommand = function() {
        var experienceText = '\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';
        experienceText += '| Years        | Company          | Job Description                                            |\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';
        experienceText += '| 2013 - 2015  | Acta SA          | Skills:                                                    |\n';
        experienceText += '|              |                  | Visual Basic .NET, SQLite, PHP & MySQL                     |\n';
        experienceText += '|              |                  | Systems Developed:                                         |\n';
        experienceText += '|              |                  | Examination system for Office Tools Back-end development   |\n';
        experienceText += '|              |                  | of Administration System                                   |\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';
        experienceText += '| 2015 - 2016  | Dataverse        | Skills:                                                    |\n';
        experienceText += '|              |                  | PHP, JavaScript, JQuery, MySQL, XML, JSON, Web Services    |\n';
        experienceText += '|              |                  | Systems Developed:                                         |\n';
        experienceText += '|              |                  | Hotel Property Management System, Booking Engine, Channel  |\n';
        experienceText += '|              |                  | Management using BBLiverate                                |\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';
        experienceText += '| 2016 - today | interworks.cloud | Skills:                                                    |\n';
        experienceText += '|              |                  | NET Framework, C#, Visual Studio, SQL Server 2016, IIS,    |\n';
        experienceText += '|              |                  | Powershell, Service manager automation using Hyper-V or    |\n';
        experienceText += '|              |                  | VMware deployments, Web Services, JavaScript, JQuery,      |\n';
        experienceText += '|              |                  | Office 365 Integration, Design Patterns, Refactoring       |\n';
        experienceText += '|              |                  | Systems:                                                   |\n';
        experienceText += '|              |                  | Maintaining and developing Website Panel                   |\n';
        experienceText += '|              |                  | Maintaining, developing and refactoring Company\'s software |\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';
        experienceText += '| 2007 - today | Freelancing      | Skills                                                     |\n';
        experienceText += '|              |                  | .Net Core 2, Angular, Ionic, Amazon Web Services, Python   |\n';
        experienceText += '|              |                  | Bash, Ethereum and Blockchain, Penetration Testing, Linux  |\n';
        experienceText += '|              |                  | Server Administration, Windows Server Administation.       |\n';
        experienceText += '+--------------+------------------+------------------------------------------------------------+\n';

        return experienceText;
    }

    setProjectsCommand = function() {
        var projectText = '\n';
        projectText += '+------------------+-------------------------------------+--------------------------------+\n';
        projectText += '| Project Name     | Project Description                 | Project Url                    |\n';
        projectText += '+------------------+-------------------------------------+--------------------------------+\n';
        projectText += '| Trainers Tracker | This is a simple application for    | trainers.tsikopoulos.eu        |\n';
        projectText += '|                  | trainers to keep their lessons      |                                |\n';
        projectText += '|                  | organized. Mobile app availability  |                                |\n';
        projectText += '+------------------+-------------------------------------+--------------------------------+\n';
        projectText += '| School Tracker   | This is an application for school   | school.tsikopoulos.eu          |\n';
        projectText += '|                  | management. Mobile app availability |                                |\n';
        projectText += '+------------------+-------------------------------------+--------------------------------+\n';
        projectText += '| Wedding Lists    | This is an appication for managing  | wedding.tsikopoulos.eu         |\n';
        projectText += '|                  | your wedding list. In addition you  |                                |\n';
        projectText += '|                  | can register a list at associated   |                                |\n';
        projectText += '|                  | shops                               |                                |\n';
        projectText += '+------------------+-------------------------------------+--------------------------------+\n';

        return projectText;
    }

    setAboutCommand = function() {
        var aboutText = '\n';
        aboutText += '+-----------+--------------------------------------------------------------------+\n';    
        aboutText += '| Education | BACHELOR OF EDUCATION (B.Ed.) - PRIMARY SCHOOL    - Completed      |\n';
        aboutText += '|           | MASTER OF SCIENCE (M. Sc.)    - SPECIAL EDUCATION - Completed      |\n';
        aboutText += '|           | BACHELOR OF SCIENCE (B.S.)    - COMPUTER SCIENCE  - Expected       |\n';
        aboutText += '+-----------+--------------------------------------------------------------------+\n';    
        aboutText += '| Why Me?   | My passion is learning new technologies. Writing readable and      |\n';  
        aboutText += '|           | reusable code is my mission. Penetration testing is what makes     |\n';   
        aboutText += '|           | me cool!                                                           |\n';  
        aboutText += '+-----------+--------------------------------------------------------------------+\n';  
        aboutText += '| Contact   | Email:    me at tsikopoulos.eu                                     |\n';   
        aboutText += '|           | Website:  tsikopoulos.eu                                           |\n';   
        aboutText += '|           | Blog:     tsikopoulos.eu/blog                                      |\n';   
        aboutText += '|           | Github:   github.com/jimtsikos                                     |\n';  
        aboutText += '|           | Linkedin: linkedin.com/in/dimitriostsikopoulos                     |\n';   
        aboutText += '+-----------+--------------------------------------------------------------------+\n'; 

        return aboutText;
    }

    setBlogCommand = function() {
        var win = window.open('http://tsikopoulos.eu/blog', '_blank');
        win.focus();
    }

    setHelpCommand = function() {
        var helpText = '\n';
        helpText += '+------------+----------------------------------+\n';
        helpText += '| Commands   | Description                      |\n';
        helpText += '+------------+----------------------------------+\n';
        helpText += '| home       | Clears the screen                |\n';
        helpText += '| experience | Display info about my experience |\n';
        helpText += '| projects   | Display info about my projects   |\n';
        helpText += '| about      | Display personal info            |\n';
        helpText += '| help       | Display these info               |\n';
        helpText += '| github     | Display my github projects       |\n';
        helpText += '| message    | Display the welcome message      |\n';
        helpText += '+------------+----------------------------------+\n';

        return helpText;
    }

    setGithubCommand = function() {
        var githubText = '\n';
        githubText += '+------------------+--------------------------------------------+---------------------------------------+\n';
        githubText += '| Project          | Description                                | Url                                   |\n';
        githubText += '+------------------+--------------------------------------------+---------------------------------------+\n';
        githubText += '| EasyConsole.Core | EasyConsole.Core is a library to make it   | github.com/jimtsikos/EasyConsole.Core |\n';
        githubText += '|                  | easier for developers to build a simple    |                                       |\n';
        githubText += '|                  | menu interface for a .NET Core console     |                                       |\n';
        githubText += '|                  | application.                               |                                       |\n';
        githubText += '+------------------+--------------------------------------------+---------------------------------------+\n';
        githubText += '| ReverseShells    | This is a .Net Core console application    | github.com/jimtsikos/ReverseShells    |\n';
        githubText += '|                  | that generates reverse shell code.         |                                       |\n';
        githubText += '+------------------+--------------------------------------------+---------------------------------------+\n';

        return githubText;
    }

    return {
        CreateTerminal: createTerminal,
        StartTyping: startTyping
    };
})(SetupTerminal || {});