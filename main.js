/*https://en.wikipedia.org/wiki/Lion
https://en.wikipedia.org/wiki/Cat
https://en.wikipedia.org/wiki/Dog*/
//https://teachablemachine.withgoogle.com/models/Ooh0oWzSR/
var animale = ""

document.getElementById("the_anchor").href="http://en.wikipedia.org/wiki/"+animale;
if(animale=="") {
    document.getElementById("learnMore").style.opacity=0.4
} else {
    document.getElementById("learnMore").style.opacity=1
}

function startClassification() {
    document.getElementById("iDisappear").style.display='none';
    var smt = navigator.mediaDevices
    smt.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(
    'https://teachablemachine.withgoogle.com/models/M8jw4szDY/model.json'
    , modelReady);
}

function myFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("https://tigg797.github.io/entendre-animaux/");
    // Alert the copied text
    alert("Copied the link: tigg797.github.io/entendre-animaux");
  }

function modelReady(){
    classifier.classify(gotResults);
}
