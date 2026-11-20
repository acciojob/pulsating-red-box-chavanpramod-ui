//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector(".box")) {
        const box = document.createElement("div");
        box.classList.add("box");
        document.body.appendChild(box);
    }
});