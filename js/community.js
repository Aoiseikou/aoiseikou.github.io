const title = document.getElementById("title");
const desc = document.getElementById("desc");
const extra = document.getElementById("extra");

const projects = document.getElementById("projectsNodes");
const people = document.getElementById("peopleNodes");

const nodes = document.querySelectorAll(".node");

/* page fade in */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

/* smooth text swap */
function swap(el, text){
    el.classList.add("fade-out");

    setTimeout(() => {
        el.innerText = text;
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
    }, 160);

    setTimeout(() => {
        el.classList.remove("fade-in");
    }, 320);
}

function clearActive(){
    nodes.forEach(n => n.classList.remove("active"));
}

function setContent(id){

    /* WHAT IS AOISEIKOU */

    if(id === "what"){
        swap(title, "What is Aoiseikou");

        swap(desc,
`Aoiseikou is a record of what is seen and experienced in car culture.

It exists as a space to admire machines on four wheels — from a Dacia Sandero to a Koenigsegg CC850.

Taste is subjective. This system does not enforce one perspective. It is a place to build, drive, share, and add layers to what already exists.

What you see here is just one view.
Everything after this is built by the people within it.`);

        swap(extra, "");
    }

    /* PROJECTS */

    if(id === "projects"){
        projects.classList.toggle("show");

        swap(title, "Projects");

        swap(desc,
`Projects are the active branches of Aoiseikou.

Each one represents a different way culture is experienced — through events, machines, competition, or documentation.`);

        swap(extra, "Select a node to explore a specific branch.");
    }

    if(id === "festival"){
        swap(title, "Festival");

        swap(desc,
`Festival is where Aoiseikou’s vision shines.

A controlled gathering of machines and people.
You could think of it as an environment where culture happens in real time — with no defined start, and no real end.

It exists as a physical expression of the system.
For now, that expression is experienced digitally — but the objective remains the same, which is machines and people occupying the same space, creating car culture as it actually is.`);
    }

    if(id === "autoshow"){
        swap(title, "Autoshow");

        swap(desc,
`Autoshow is where machines are understood.

Removed from motion, they are observed in full. Small details matter.

It is a curated space, not a display.

Currently digital, but structured with the discipline of a physical show — where every machine is presented as identity.`);
    }

    if(id === "wildstyle"){
        swap(title, "WildStyle");

        swap(desc,
`WildStyle has no structure.

It exists for output that doesn’t need permission — edits, visuals, ideas that don’t fit into defined systems.

Nothing here is meant to be clean or complete.

It’s where experimentation happens without constraint.

Currently digital, and intentionally left unrefined.`);
    }

    if(id === "racing"){
        swap(title, "Racing Division");

        swap(desc,
`Racing Division is the evolution layer of Aoiseikou.

Machines are actually used.

It combines precision and experimentation under pressure, where every run, every adjustment, every mistake feeds into progression.

There is no final form in the process of refinement

Currently digital, built with the intent of real competition.

Evolution.`);
    }

    if(id === "blogs"){
        swap(title, "Blogs");

        swap(desc,
`Blogs are why Aoiseikou exists.

Everything else happens — this is where it is kept.

Machines, moments, and people are written and preserved as they are experienced, to ensure it isn’t lost.

Purely for memories.`);
    }

    /* PEOPLE */

    if(id === "people"){
        people.classList.toggle("show");

        swap(title, "People");

        swap(desc,
`Aoiseikou is not a static project.

It is shaped by the people inside it — each one maintaining a different part of the system.`);
    }

    if(id === "nex"){
        swap(title, "Nex");

        swap(desc,
`Founder.

Builds the structure and direction of Aoiseikou — defining how the system functions and evolves.

Focused on creating frameworks where machines, people, and ideas can exist and grow over time.

Where ideas begin, he builds the system for them to hold.`);
    }

    if(id === "chyumi"){
        swap(title, "Chyumi");

        swap(desc,
`Creative Director — Yipyen Division.

Shapes the visual identity of Aoiseikou — how it is seen, felt, and remembered.

Her influence extends beyond design, maintaining cohesion across the system and ensuring it remains grounded as it grows.

Where systems are built, she gives them continuity.`);
    }

    if(id === "quinton"){
        swap(title, "Quinton");

        swap(desc,
`Overseer.

Maintains continuity across Aoiseikou.

When primary direction is absent, he ensures the system continues to operate smoothly — holding structure, alignment, and stability in place.`);
    }

    if(id === "m3"){
        swap(title, "M3");

        swap(desc,
`HR Executive.

Maintains internal structure within Aoiseikou.

Handles coordination between members, ensures clarity in roles, and keeps communication aligned.

Focuses on making sure the system functions smoothly as it grows both externally as well as internally.`);
    }

    if(id === "cece"){
        swap(title, "Cece");

        swap(desc,
`Community Promoter.

Responsible for outward movement — bringing people in, keeping activity alive, and maintaining energy within the system.

Connects individuals, events, and opportunities to ensure Aoiseikou continues expanding naturally.`);
    }
}

/* interactions */
nodes.forEach(n=>{
    n.addEventListener("click", ()=>{
        clearActive();
        n.classList.add("active");
        setContent(n.dataset.id);
    });
});

/* default load fix */
setContent("what");

/* page fade out */
document.addEventListener("click", (e) => {

    const link = e.target.closest("a");

    if(link && link.getAttribute("href")){
        e.preventDefault();

        document.body.classList.add("leaving");

        setTimeout(() => {
            window.location.href = link.href;
        }, 25);
    }
});
