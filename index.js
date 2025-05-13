if (performance.getEntriesByType("navigation")[0].type === "reload"){
  var rN1 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img1").setAttribute("src","./images/dice"+rN1+".png");

  var rN2 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img2").setAttribute("src","./images/dice"+rN2+".png");

  if(rN1 > rN2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

  } else if(rN1 < rN2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

  } else {
  document.querySelector("h1").innerHTML = "Draw!";

  }
}