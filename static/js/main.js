// marketplace.js

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".market-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            items.forEach(item => {
                if(filter === "all" || item.dataset.category === filter){
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
