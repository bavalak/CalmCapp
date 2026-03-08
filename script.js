function openSection(id){
document.getElementById(id).style.display="block";
}
function closeSection(id){
document.getElementById(id).style.display="none";
}

/* CHAT */
function sendMsg(){
let input=document.getElementById("chatInput");
let box=document.getElementById("chatBox");
box.innerHTML+=`<p>You: ${input.value}</p>`;
box.innerHTML+=`<p>Bot: You are not alone 💚</p>`;
input.value="";
}

function go(page){
    window.location.href = page;
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


/* BREATHING */
function startBreathing(){
let text=document.getElementById("breathText");
text.innerText="Breathe In 🌿";
setTimeout(()=>text.innerText="Breathe Out 🌬️",60000);
setTimeout(()=>text.innerText="Well done 💖",120000);
}

/* GAME */
let count=0;
function relaxClick(){
count++;
document.getElementById("score").innerText="Relax count: "+count;
}


/* JOURNAL */
let journal=document.getElementById("journalText");
journal.value=localStorage.getItem("journal")||"";
function saveJournal(){
localStorage.setItem("journal",journal.value);
alert("Saved 💕");
}
<script src="script.js"></script>
