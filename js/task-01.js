const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

console.log("");

const titleEl = document.querySelectorAll("h2");

categoriesEl.forEach(function(titleEl) {
    console.log(`Category: ${titleEl.firstElementChild.textContent}`);
    console.log(`Elements: ${titleEl.lastElementChild.children.length}`);
    console.log("");
    }
)
