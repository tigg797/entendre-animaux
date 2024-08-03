/*https://en.wikipedia.org/wiki/Lion
https://en.wikipedia.org/wiki/Cat
https://en.wikipedia.org/wiki/Dog*/
//https://teachablemachine.withgoogle.com/models/Ooh0oWzSR/
var animale = ""

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
    'https://teachablemachine.withgoogle.com/models/Ooh0oWzSR/model.json'
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

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        rnd_r = Math.floor(Math.random() * 255) + 1;
        rnd_g = Math.floor(Math.random() * 255) + 1;
        rnd_b = Math.floor(Math.random() * 255) + 1;

        rslt = document.getElementById("le_label")
        rslt.innerHTML = "I can hear: " + results[0].label;
        confi = (results[0].confidence * 100).toFixed(2) + '%'
        accu = document.getElementById("autre_label")
        accu.innerHTML = "I'm like " + confi + " sure";
        rslt.style.color = "rgb(" + rnd_r + "," + rnd_g + "," + rnd_b + ")";
        accu.style.color = "rgb(" + rnd_g + "," + rnd_b + "," + rnd_r + ")";
        an = document.getElementById("the_anchor")
        img1 = document.getElementById("l_animale");

        if (results[0].label == "Cat") {
            img1.src = "theCat.jpg";
            an.href="http://en.wikipedia.org/wiki/Cat"
            document.getElementById("learnMore").style.opacity=1

        } else if (results[0].label == "Dog") {
            img1.src = "theDog.jpg";
            an.href="http://en.wikipedia.org/wiki/Dog"
            document.getElementById("learnMore").style.opacity=1

        } else if (results[0].label == "Beep Bop") {
            img1.src = "theRobot.jpg";
            an.href="http://en.wikipedia.org/wiki/Robot"
            document.getElementById("learnMore").style.opacity=1
        }
        else if (results[0].label == "Lion") {
            img1.src = "theLion.jpg";
            an.href="http://en.wikipedia.org/wiki/Lion"
            document.getElementById("learnMore").style.opacity=1
        }
         else { 
                img1.src = "Speaker_Icon.png";  
                 an.href="https://tigg797.github.io/entendre-animaux"
                document.getElementById("learnMore").style.opacity=0.4

        }
    } 
}
