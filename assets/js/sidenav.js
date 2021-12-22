	var sideLinks = document.querySelectorAll('.sidebar-PA a');
    var titlebar = document.querySelector('.titlebar');
    for (var i = 0; i < sideLinks.length; i++) {
        if (window.location.href == sideLinks[i].href) {    
 
            //this sets styles for the area parent title, styles can be changed to do anything
            if (sideLinks[i].className == "title") { 
                sideLinks[i].setAttribute('style', 'font-weight:800');
             } else { sideLinks[i].setAttribute('style', 'font-weight:800');}
             
            //this sets styles for the child links, styles can be changed to anything
            if (sideLinks[i].parentElement.className == "submenu") {
                sideLinks[i].parentElement.setAttribute('style', 'display:block;');
            } 
        if (sideLinks[i].nextElementSibling != null && sideLinks[i].nextElementSibling.className =="submenu") { 
                 sideLinks[i].nextElementSibling.setAttribute('style', 'display:block;');
            }
       
       function capital_letter(str) {
           str = str.toLowerCase();
           str = str.split(" ");
       
           for (var i = 0, x = str.length; i < x; i++) {
               str[i] = str[i][0].toUpperCase() + str[i].substr(1);
           }
       
           str = str.join(" ");
           document.querySelector('.titlebar .title').innerHTML = str;
       }
       titleBarText = sideLinks[i].innerHTML;
       capital_letter(titleBarText);
       }
    }
