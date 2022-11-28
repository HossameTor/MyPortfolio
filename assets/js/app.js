function talk() {
    var know = {
        "man": " whoami: Get to know me . <br>"+  
        " github: Get the link to my github profile.<br> "+
        "volunteering & experiences : Discover all my professional and volouneering experiences.<br>"+
        "Linked in: Get the link to my LinkedIn profile.",
        "whoami": " I am 21 yo. I am from Casablanca. I am actually a software engineering "+ 
        "student at High National School for Computer Science and Systems Analysis - ENSIAS in Rabat, "+
        "a DevOps enthusiast and intersted by cloud and virtualisation.",
        "What can i do for you": "Search CodeWithRandom on Google>>Thank Me Later",
        "volunteering & experiences":
 "wibday: 2 moonths internship as a full stack developer<br>"+
 "IEEE ENSIAS Student branch: Vice chairman and technincal manager"+
 " ",

        "github": " <a href='https://github.com/HossameTor' target='blank' style='text-decoration:none'>Click me</a> ",
        Bye: "Okay! Will meet soon..",
        "Linked in" : " <a href='https://www.linkedin.com/in/hossame-torchi-09a8901b6/' target='blank' style='text-decoration:none'>Click me</a>",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = '';
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = "<span style='color:green;'>HossameTorchi@portfolio:</span><span style='color:blue;'>~$</span>" + know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
        "<span style='color:green;'>HossameTorchi@portfolio:</span><span style='color:blue;'>~$</span> "  + user + ": command not found <br>";
    }
}

function scrolltocmd(id){
    var element = document.getElementById(id);
    element.scrollIntoView(true);
}

function changemode(){
    checkbox = document.getElementById("flexSwitchCheckDefault");
    background = document.getElementById("BG");
    navbar = document.getElementById('navv');
    Go_to_command_butt = document.getElementById("Go_to_command_butt");
    if(checkbox.checked){
        background.innerHTML = "<div class='stars'></div> <div class='twinkling'></div>";
        navbar.setAttribute("style", " z-index: 4;");  
        navbar.classList.add('bg-dark','navbar-dark');
        Go_to_command_butt.setAttribute("style", "");

    }
    else{
        background.innerHTML = "<div class='area' ><ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div >";
        navbar.setAttribute("style", "background-color: #FBFACD; z-index: 4;");  
        navbar.classList.remove('bg-dark','navbar-dark');
        Go_to_command_butt.setAttribute("style", " background-color: #7F669D; border-color:#7F669D;");
    }
}