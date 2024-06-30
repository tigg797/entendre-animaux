/*https://en.wikipedia.org/wiki/Lion
https://en.wikipedia.org/wiki/Cat
https://en.wikipedia.org/wiki/Dog*/
//https://teachablemachine.withgoogle.com/models/Ooh0oWzSR/
var animale = ""

document.getElementById("the_anchor").href="http://en.wikipedia.org/wiki/"+animale;
if(animale==="") {
    document.getElementById("learnMore").style.opacity=0.4
} else {
    document.getElementById("learnMore").style.opacity=1
}

