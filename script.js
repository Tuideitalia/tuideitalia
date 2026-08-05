/* ==========================================
   TUIDE ITALIA
   script.js
========================================== */

/* ===============================
   Fade in delle sezioni
================================ */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    observer.observe(section);

});


/* ===============================
   Pulsante Torna Su
================================ */

const button = document.createElement("button");

button.innerHTML="↑";

button.id="topButton";

document.body.appendChild(button);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        button.classList.add("visible");

    }

    else{

        button.classList.remove("visible");

    }

});

button.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===============================
   Hover Members
================================ */

const members=document.querySelectorAll(".member");

members.forEach(member=>{

member.addEventListener("mouseenter",()=>{

member.style.transform="translateY(-8px)";

});

member.addEventListener("mouseleave",()=>{

member.style.transform="translateY(0px)";

});

});


/* ===============================
   Countdown (placeholder)
================================ */

const debutDate = new Date("2026-08-24T11:00:00");

console.log("Debut date:", debutDate);


/* ===============================
   Console
================================ */

console.log("✅ TUIDE Italia loaded");