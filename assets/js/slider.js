//array format is for slide divs inside div #slider

   var slides = document.querySelectorAll('#slider .slide');

   var slidepos = 0;

   document.querySelectorAll('#slider .slide')[slidepos].setAttribute('style', 'opacity:1;z-index:9;');

   function slideLoop() {
     setTimeout(function(){
       document.querySelectorAll('#slider .slide')[slidepos].setAttribute('style', 'opacity:0;');
       setTimeout(function(){
           document.querySelectorAll('#slider .slide')[slidepos].setAttribute('style', 'opacity:1;z-index:9;');
       }, 60)
       document.querySelectorAll('#slider .slide')[slidepos].setAttribute('style', 'opacity:0;');
       setTimeout(function(){document.querySelectorAll('#slider .slide')[slidepos].setAttribute('style', 'display:none;opacity:0;');},30)
       slidepos++;
       if (slidepos >= Object.keys(slides).length) {
         slidepos = 0
       }
       if (slidepos < 100) {
         slideLoop();
       }
     }, 8500);
   }

   slideLoop();
