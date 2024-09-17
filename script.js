   // Timer
   var countDownDate = new Date("Jan 5, 2030 00:00:00").getTime();

   var x = setInterval(function () {

       var now = new Date().getTime();
       var distance = countDownDate - now;

       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       function pad(num) {
           return (num < 10) ? "0" + num : num;
       }

       document.getElementById("counterHour").innerHTML = pad(hours) + ": ";
       document.getElementById("counterMinute").innerHTML = pad(minutes) + ": ";
       document.getElementById("counterSeconds").innerHTML = pad(seconds);

       if (distance < 0) {
           clearInterval(x);
           document.getElementById("counterHour").innerHTML = "";
           document.getElementById("counterMinute").innerHTML = "EXPIRED";
           document.getElementById("counterSeconds").innerHTML = "";
       }
   }, 1000);
   //Timer End
   // FAQs Start
   const img1 = document.querySelector(".images");
   const drop1 = document.querySelector(".drop");

   const img2 = document.querySelector(".images2");
   const drop2 = document.querySelector(".drop2");

   const img3 = document.querySelector(".images3");
   const drop3 = document.querySelector(".drop3");

   const img4 = document.querySelector(".images4");
   const drop4 = document.querySelector(".drop4");

   function toggleImage(img) {
       if (img.src.includes("icon-plus.svg")) {
           img.src = "images/icon-minus.svg";
       } else {
           img.src = "images/icon-plus.svg";
       }
   }

   drop1.addEventListener('click', function () {
       toggleImage(img1);
   });

   drop2.addEventListener('click', function () {
       toggleImage(img2);
   });

   drop3.addEventListener('click', function () {
       toggleImage(img3);
   });

   drop4.addEventListener('click', function () {
       toggleImage(img4);
   });
   // Faqs End
   // Scroller Start
   const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
 addAnimation();
}

function addAnimation() {
 scrollers.forEach((scroller) => {
   // add data-animated="true" to every `.scroller` on the page
   scroller.setAttribute("data-animated", true);

   // Make an array from the elements within `.scroller-inner`
   const scrollerInner = scroller.querySelector(".scroller-inner");
   const scrollerContent = Array.from(scrollerInner.children);

   // For each item in the array, clone it
   // add aria-hidden to it
   // add it into the `.scroller-inner`
   scrollerContent.forEach((item) => {
     const duplicatedItem = item.cloneNode(true);
     console.log(duplicatedItem)
     duplicatedItem.setAttribute("aria-hidden", true);
     scrollerInner.appendChild(duplicatedItem);
   });
 });
}