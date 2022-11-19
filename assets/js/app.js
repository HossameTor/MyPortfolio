function talk() {
    var know = {
        "man": " whoami: Get to know me . <br>"+  
        " github: Get the link to my github profile.<br> "+
        "volunteering & experiences : Discover all my professional and volouneering experiences",
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
    };
    var user = document.getElementById("userBox").value;
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