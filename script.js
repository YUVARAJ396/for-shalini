function openProposal(){
document.getElementById("proposalBox").style.display="block";
}

function moveNo(){
let btn=document.getElementById("noBtn");
btn.style.position="absolute";
btn.style.top=Math.random()*window.innerHeight+"px";
btn.style.left=Math.random()*window.innerWidth+"px";
}

function sayYes(){
createConfetti();

setTimeout(()=>{
document.body.innerHTML=
"<div style='display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(to bottom,#fff0f3,#ffe5ec);'>" +
"<h1 style='color:#9d0208;font-size:40px;text-align:center;'>Shalini Said YES 🖤💍<br><br>Forever Starts Now ❤️</h1>" +
"</div>";
},2000);
}

function createConfetti(){
for(let i=0;i<80;i++){
let conf=document.createElement("div");
conf.className="confetti";
conf.style.left=Math.random()*100+"vw";
conf.style.backgroundColor=["#ff4d6d","#c9184a","#ffb3c1","#9d0208"][Math.floor(Math.random()*4)];
document.body.appendChild(conf);
setTimeout(()=>conf.remove(),3000);
}
}

/* Floating Hearts Background */
for(let i=0;i<25;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(Math.random()*5+5)+"s";
document.body.appendChild(h);
}
