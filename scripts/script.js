//Sets the Minimum time for the loader to appear in window
const MIN_LOADER_TIME = 1500; 
//Starts Loader Time
const loaderStart = performance.now();
//Handles Page Loader
window.addEventListener("load", () => {
    
    const elapsed = performance.now() - loaderStart;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

    setTimeout(() => {
        const loader = document.getElementById("loader");
        const page = document.getElementById("page");

        loader.classList.add("is-hidden");
        page.classList.remove("is-hidden");

        setTimeout(() => loader.remove(), 400);

    }, remaining); // match CSS transition
});

//Tabs Functionality
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs li");
    const sections = document.querySelectorAll("#tab-content .container");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Tabs
            tabs.forEach(t => t.classList.remove("is-active"));
            tab.classList.add("is-active");

            // Content
            sections.forEach(s => s.classList.add("is-hidden"));
            const target = document.getElementById(tab.dataset.target);

            if (target) {
                target.classList.remove("is-hidden");
            }
        });
    });
});