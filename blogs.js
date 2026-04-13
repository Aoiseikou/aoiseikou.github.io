const links = document.querySelectorAll(".link");

const title = document.getElementById("p-title");
const desc = document.getElementById("p-desc");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {
        title.innerText = link.dataset.title;
        desc.innerText = link.dataset.desc;
    });

    link.addEventListener("mouseleave", () => {
        title.innerText = "Hover a blog";
        desc.innerText = "Preview will appear here.";
    });

});