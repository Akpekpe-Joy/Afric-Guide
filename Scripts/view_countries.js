



const btn = document.querySelector(".countries-btn");
const boxes = document.querySelectorAll(".box-container .box");
let expanded = false;

btn.addEventListener("click", function(e) {
    e.preventDefault();
    
    if (!expanded) {
        // Show all
        boxes.forEach(box => box.style.display = "inline-block");
        btn.textContent = "Show Less";
        expanded = true;
    } else {
        // Show only first 5
        boxes.forEach((box, index) => {
            box.style.display = index < 5 ? "inline-block" : "none";
        });
        btn.textContent = "View All 54 Countries";
        expanded = false;
    }
});


