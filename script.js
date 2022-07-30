function a(){
var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

if(n1>n2){
    document.querySelector("h1").textContent="Player 1 Wins!";
    document.querySelectorAll(".crown")[0].innerHTML="&#128081;";
    document.querySelectorAll(".crown")[1].innerHTML=" ";
    }
    else if(n1===n2){
        document.querySelector("h1").textContent="Draw";
        document.querySelectorAll(".crown")[0].innerHTML="&#128081;";
        document.querySelectorAll(".crown")[1].innerHTML="&#128081;";
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins!";
        document.querySelectorAll(".crown")[1].innerHTML=" &#128081;";
        document.querySelectorAll(".crown")[0].innerHTML=" ";
    }

    var s1="IMAGES/dice"+n1+".png";
    var s2="IMAGES/dice"+n2+".png";



    document.querySelector(".img1").setAttribute("src",s1);
    document.querySelector(".img2").setAttribute("src",s2);
}