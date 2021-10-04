 //***************
 //ADD ACTIVE CLASS ON SCROLL

 var activationsCompleted = 0;

 var toActivateOnScroll = Array.from(document.querySelectorAll('.activateOnScroll'));

     for (var i = 0; i < toActivateOnScroll.length; i++) {
         if (toActivateOnScroll[i].getBoundingClientRect().top <= (window.innerHeight - (window.innerHeight * .2))  && toActivateOnScroll[i].className.includes('active') == false) {
           var toActivateOnScrollClasses = toActivateOnScroll[i].className;
           toActivateOnScroll[i].className = toActivateOnScrollClasses + " active";
           activationsCompleted++;
         }
     }

 function activateOnScroll() {

     for (var i = 0; i < toActivateOnScroll.length; i++) {
         if (toActivateOnScroll[i].getBoundingClientRect().top <= (window.innerHeight - (window.innerHeight * .2)) && toActivateOnScroll[i].className.includes('active') == false) {
           var toActivateOnScrollClasses = toActivateOnScroll[i].className;
           toActivateOnScroll[i].className = toActivateOnScrollClasses + " active";
           activationsCompleted++;
           if (activationsCompleted > toActivateOnScroll.length) {window.removeEventListener("scroll", fadeInOnScroll);}
         }
     }
 }

 window.addEventListener("scroll", activateOnScroll);
