document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });
});

/* typing */
const title = "AOISEIKOU";
const tag = "#DocumentingCulture";

let i = 0;
let j = 0;

function typeTitle(){
    if(i < title.length){
        document.getElementById("title").innerHTML += title[i++];
        setTimeout(typeTitle, 100 + Math.random()*40);
    } else {
        setTimeout(typeTag, 400);
    }
}

function typeTag(){
    if(j < tag.length){
        document.getElementById("tagline").innerHTML += tag[j++];
        setTimeout(typeTag, 60 + Math.random()*20);
    } else {
        startEnter();
    }
}

function startEnter(){
    const el = document.getElementById("enter");
    el.innerText = "ENTER";
}

/* NAVIGATION */
let transitioning = false;

function enterSite(){
    if(transitioning) return;
    transitioning = true;

    document.body.classList.add("leaving");

    setTimeout(() => {
        window.location.href = "home.html";
    }, 350);
}

document.getElementById("enter").addEventListener("click", enterSite);

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") enterSite();
});

typeTitle();