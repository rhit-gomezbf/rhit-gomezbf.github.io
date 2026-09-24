let pages = [
  { href: "index.html", label: "Home" },
  { href: "resume.html", label: "Resume" },
  { href: "portfolio.html", label: "Portfolio" },
];

let current = location.pathname.split("/").pop() || "index.html";

/*
   learned about how maps work in js:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    learned how to use templates with {} and `` characters more
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    referenced the DOM reading from 9/24 a lot

    read about accessibility


*/

let links = pages.map(p =>
  `<li><a href="${p.href}"${p.href === current ? ' aria-current="page"' : ""}>${p.label}</a></li>`
).join("");

document.getElementById("site-header").innerHTML =
`<nav aria-label="Main">
     <ul>${links}</ul>
   </nav>`;


document.getElementById("site-footer").innerHTML =
  `<p>Frances Gomez-Barrientos</p>
   <ul class="social-links">
     <li><a href="https://github.com/rhit-gomezbf">
       <img src="images/github.png" alt="GitHub">
     </a></li>
     <li><a href="https://rose-hulman.joinhandshake.com/profiles/6n4wqq">
       <img src="images/handshake.png" alt="Handshake">
     </a></li>
     <li><a href="https://www.linkedin.com/in/francesgb/">
       <img src="images/linkedin.png" alt="LinkedIn">
     </a></li>
     <li><a href="https://www.instagram.com/frances_gb/">
       <img src="images/instagram.png" alt="Instagram">
     </a></li>
   </ul>`;

   /* This stuff down here was my idea that i had. I just thought about how nice having the multiple buttons
   / and filtering for only specific keywords was interesting.
   / https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
   /
   / a lot of websites do this, but I looked at how instagram does this where you can filter your feed for specific things
   */

  let buttons = document.querySelectorAll(".filters button");
  let projects = document.querySelectorAll(".project");

  buttons.forEach(button =>{
    button.addEventListener("click", () =>{
      let tech = button.dataset.filter;

      buttons.forEach(b => b.setAttribute("aria-pressed", b === button));

      projects.forEach(p =>{
        let show = tech === "all" || p.dataset.tech.split(" ").includes(tech);
        p.classList.toggle("hidden", !show);
      });
    });
   });