 //PARALLAX DEFINING VARIABLES

 var parallaxBackground = Array.from(document.querySelectorAll('.parallax-background'));

 var slideContainer = document.querySelector('.highlight .content');

 //RUN ONCE TO SET INITAL PARALLAX SETTINGS

document.querySelector('.highlight .parallax-background-child').setAttribute('style', 'background-position: 50% ' + (((slideContainer.getBoundingClientRect().top * 100) / window.innerHeight) / 2) + '%;');

 for (var i = 0; i < parallaxBackground.length; i++) {
	parallaxBackground[i].setAttribute('style', 'background-position: 50% ' + (((parallaxBackground[i].getBoundingClientRect().top * 100) / window.innerHeight) / 2) + '%;');
	
 }

 //THIS IS THE FUNCTION FOR PARALLAX SCROLLING

 function parallax() {
    document.querySelector('.highlight .parallax-background-child').setAttribute('style', 'background-position: 50% ' + (((slideContainer.getBoundingClientRect().top * 100) / window.innerHeight) / 2) + '%;');
	for (var i = 0; i < parallaxBackground.length; i++) {
	parallaxBackground[i].setAttribute('style', 'background-position: 50% ' + (((parallaxBackground[i].getBoundingClientRect().top * 100) / window.innerHeight) / 2) + '%;');
 }
}

 window.addEventListener("scroll", parallax);


// ----------------------


// this is the parallax for the titlebars. slightly different rules.



if (document.querySelector('.titlebar') !== null) {

   //PARALLAX DEFINING VARIABLES

   var parallaxTitleBar = document.querySelector('.titlebar');


   //RUN ONCE TO SET INITAL PARALLAX SETTINGS

      parallaxTitleBar.setAttribute('style', 'background-position: 50% ' + (0 + (((parallaxTitleBar.getBoundingClientRect().top * 100) / window.innerHeight) / 2)) + '%;');


   //THIS IS THE FUNCTION FOR PARALLAX SCROLLING

   function addparallaxTitleBar() {
      parallaxTitleBar.setAttribute('style', 'background-position: 50% ' + (0 + (((parallaxTitleBar.getBoundingClientRect().top * 100) / window.innerHeight) / 2)) + '%;');
  }

   window.addEventListener("scroll", addparallaxTitleBar);
  }
