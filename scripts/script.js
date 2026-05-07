// Sets the minimum time for the loader to appear
const MIN_LOADER_TIME = 1500;
const loaderStart = performance.now();

// Handle page loader
window.addEventListener("load", () => {
    const elapsed = performance.now() - loaderStart;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

    setTimeout(() => {
        const loader = document.getElementById("loader");
        const page = document.getElementById("page");

        loader.classList.add("is-hidden");
        page.classList.remove("is-hidden");

        setTimeout(() => loader.remove(), 400);
    }, remaining);
});

// ── Shared tab-switching logic ──────────────────────────────────────────────
function activateTab(targetId) {
    const tabs     = document.querySelectorAll(".tabs li");
    const sections = document.querySelectorAll("#tab-content .container");

    // Update tab pill highlight
    tabs.forEach(t => {
        t.classList.toggle("is-active", t.dataset.target === targetId);
    });

    // Show the matching section
    sections.forEach(s => {
        s.classList.toggle("is-hidden", s.id !== targetId);
    });

    // Scroll smoothly to tab content
    document.getElementById("tab-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Tab pill clicks ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs li");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            activateTab(tab.dataset.target);
        });
    });

    // ── Navbar link clicks ───────────────────────────────────────────────────
    const navLinks = document.querySelectorAll(".nav-tab-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            activateTab(targetId);

            // Close the mobile hamburger menu after selection
            const burger  = document.querySelector(".navbar-burger");
            const navMenu = document.getElementById("navMenu");
            burger?.classList.remove("is-active");
            navMenu?.classList.remove("is-active");
        });
    });

    // ── Hamburger menu toggle ────────────────────────────────────────────────
    const burger  = document.querySelector(".navbar-burger");
    const navMenu = document.getElementById("navMenu");

    burger?.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        navMenu?.classList.toggle("is-active");
    });
});
