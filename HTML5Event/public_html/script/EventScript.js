var pThree;
var pFour;
var count=0;
function startUp(){
    alert("page loading");
    pThree=document.getElementById("third");
     pThree=document.getElementById("fourth");
}
function buttonClicked(){
    document.getElementById("first").innerHTML="Button Clicked";
    }
    function doubleClicked(){
        document.getElementById("first").innerHTML="Double Clicked";
}
function fontRed(){
    document.getElementById("second").style.color="red";
}
function fontBlack(){
    document.getElementById("second").style.color="black";
}
function backGreen(){
    pThree.style.backgroundColor= "green";
}
function backWhite(){
    pThree.style.backgroundColor= "white";
}
function fourthClicked(){
    pFour.innerHTML="fourth has been clicked";
}
