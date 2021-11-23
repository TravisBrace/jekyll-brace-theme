function mobileNav() {
  document.querySelector('div.mobile-nav').setAttribute('style', 'top: 9vw;');
  document.querySelector('div.mobile-nav-screen').setAttribute('style', 'display:block;');
  document.querySelector('body').setAttribute('style', 'overflow: hidden;');
  document.querySelector('div.mobile-nav-btn').setAttribute('onclick', 'bodyFunctions()');
  document.querySelector('.mobile-dotnav-close').setAttribute('style', 'opacity: 1;');
  for (var i = 0; i < 3; i++) {
    document.querySelectorAll('.nav-dot')[i].setAttribute('style', 'opacity:0;');
  }
}
function bodyFunctions() {
  var navigation = document.querySelector('div.mobile-nav');
  navigation.setAttribute('style', 'top: -220vw;');
  document.querySelector('div.mobile-nav-screen').setAttribute('style', 'display:none;');
  document.querySelector('body').setAttribute('style', '');
  document.querySelector('div.mobile-nav-btn').setAttribute('onclick', 'mobileNav()');
  document.querySelector('.mobile-dotnav-close').setAttribute('style', 'opacity: 0;');
  for (var i = 0; i < 3; i++) {
    document.querySelectorAll('.nav-dot')[i].setAttribute('style', 'opacity:1;');
  }
}
      function mobileNavSlidedown() {
 document.querySelector('#mobilePAButton').setAttribute('onclick', 'mobileNavSlideUp();');
 document.querySelector('#mobilePAButton').innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-up fa-w-14 fa-3x"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" class=""></path></svg> CLOSE PRACTICE AREAS';
 document.querySelector('#mobilePAButton svg').setAttribute('style', 'transform: rotateX(0);');
 document.querySelector('#mobilePAButton').setAttribute('style', 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);');
 document.querySelector('.sidebar-nav').setAttribute('style', 'top:5vw;');
 document.querySelector('body').setAttribute('style', 'overflow: hidden;');
 //document.querySelector('div.mobile-nav-screen').setAttribute('style', 'display:block;');
 //document.querySelector('div.mobile-nav-screen').setAttribute('onclick', 'mobileNavSlideUp()');
}
function mobileNavSlideUp() {
 document.querySelector('#mobilePAButton').setAttribute('onclick', 'mobileNavSlidedown();');
 document.querySelector('#mobilePAButton').innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-up fa-w-14 fa-3x"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" class=""></path></svg> OPEN PRACTICE AREAS';
  document.querySelector('#mobilePAButton svg').setAttribute('style', 'transform: rotateX(180);');
 document.querySelector('#mobilePAButton').setAttribute('style', 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);');
 document.querySelector('.sidebar-nav').setAttribute('style', 'top:-80vh;');
   document.querySelector('body').setAttribute('style', '');
 //document.querySelector('div.mobile-nav-screen').setAttribute('style', 'display:none;');
 //document.querySelector('div.mobile-nav-screen').setAttribute('onclick', 'bodyFunctions()');
}
