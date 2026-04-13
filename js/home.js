const categories = document.querySelectorAll(".category");

let catIndex = 0;
let tileIndex = 0;

const data = [
    ["Festival","Gatherings of culture","Culture Core"],
    ["Autoshow","Machines on display","Culture Core"],
    ["WildStyle","Raw expression","Culture Core"],
    ["Racing Division","Competitive structure","System Layer"],
    ["Blogs","Documentation logs","System Layer"],
    ["Community","System overview","System Layer"]
];

function update(){

    const currentCategory = categories[catIndex];
    const tiles = currentCategory.querySelectorAll(".tile");

    // reset
    document.querySelectorAll(".tile").forEach(t => t.classList.remove("focused"));
    categories.forEach(c => c.classList.remove("active"));

    // activate
    currentCategory.classList.add("active");

    // clamp tile index
    if(tileIndex < 0) tileIndex = 0;
    if(tileIndex >= tiles.length) tileIndex = tiles.length - 1;

    // focus tile
    tiles[tileIndex].classList.add("focused");

    // preview
    let globalIndex = tileIndex;
    if(catIndex === 1) globalIndex += 3;

    const item = data[globalIndex];

    document.getElementById("p-title").innerText = item[0];
    document.getElementById("p-desc").innerText = item[1];
    document.getElementById("p-cat").innerText = item[2];
}

/* init */
update();

/* keyboard */

document.addEventListener("keydown", (e)=>{

    if(e.key === "ArrowLeft") tileIndex--;
    if(e.key === "ArrowRight") tileIndex++;

    if(e.key === "ArrowUp"){
        catIndex--;
        tileIndex = 0;
    }

    if(e.key === "ArrowDown"){
        catIndex++;
        tileIndex = 0;
    }

    if(catIndex < 0) catIndex = 0;
    if(catIndex >= categories.length) catIndex = categories.length - 1;

    update();

    if(e.key === "Enter"){
        const tiles = categories[catIndex].querySelectorAll(".tile");
        const link = tiles[tileIndex].dataset.link;
        if(link) window.location.href = link;
    }
});

/* mouse */

categories.forEach((category, cIndex) => {

    const tiles = category.querySelectorAll(".tile");

    tiles.forEach((tile, tIndex) => {

        tile.addEventListener("mouseenter", ()=>{
            catIndex = cIndex;
            tileIndex = tIndex;
            update();
        });

        tile.addEventListener("click", ()=>{
            const link = tile.dataset.link;
            if(link) window.location.href = link;
        });

    });
});
