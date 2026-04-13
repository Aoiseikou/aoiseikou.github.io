

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const extra = document.getElementById("extra");

const projects = document.getElementById("projectsNodes");
const people = document.getElementById("peopleNodes");

const nodes = document.querySelectorAll(".node");

/* smooth swap */
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

    if(id === "what"){
        swap(title, "What is Aoiseikou");

        swap(desc,
`Aoiseikou is a record of what is seen and experienced in car culture.

It exists as a space to admire machines on four wheels — from a Dacia Sandero to a Koenigsegg CC850.

Taste is subjective. This system does not enforce one perspective. It is a place to build, drive, share, and add layers to automotive culture.`);

        swap(extra, "");
    }

    if(id === "projects"){
        projects.classList.toggle("show");

        swap(title, "Projects");

        swap(desc,
`Core branches of Aoiseikou — each defining a different expression of culture, machines, and documentation.`);

        swap(extra, "Select a node to explore.");
    }

    if(id === "festival"){
        swap(title, "Festival");
        swap(desc, "Gathering-based cultural events focused on presence, machines, and shared identity.");
    }

    if(id === "autoshow"){
        swap(title, "Autoshow");
        swap(desc, "Machines presented as identity objects — engineering, stance, and aesthetic discipline.");
    }

    if(id === "wildstyle"){
        swap(title, "WildStyle");
        swap(desc, "Unstructured creative expression without constraints.");
    }

    if(id === "racing"){
        swap(title, "Racing Division");
        swap(desc,
`Competitive driving structure focused on precision and consistency.

“Evolution.”`);
    }

    if(id === "blogs"){
        swap(title, "Blogs");
        swap(desc, "Documentation layer of meets, builds, and progression logs.");
    }

    if(id === "people"){
        people.classList.toggle("show");

        swap(title, "People");

        swap(desc, "Individuals shaping Aoiseikou’s structure and direction.");
    }

    if(id === "nex"){
        swap(title, "Nex");
        swap(desc, "Founder. System architecture, direction, and long-term structure.");
    }

    if(id === "chyumi"){
        swap(title, "Chyumi");
        swap(desc, "Creative direction (Yipyen). Visual identity and aesthetic systems.");
    }

    if(id === "quinton"){
        swap(title, "Quinton");
        swap(desc, "Overseer — maintains structure and continuity.");
    }

    if(id === "lucas"){
        swap(title, "Lucas");
        swap(desc,
`Leads RWD/Stance representation of Aoiseikou.

Represents the crew in stance culture and helps coordinate group identity and presence.`);
    }

    if(id === "cece"){
        swap(title, "Cece");
        swap(desc, "Community promoter — connects people, events, and cultural flow.");
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