---
---
    function loadRecentArticles() {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  
        	      var blogIndex = document.createElement('html');
                      blogIndex.innerHTML = this.responseText;
        	      
        	      var page = document.querySelector('.main-content-container .content');
        	      page.innerHTML = "";
        	      
        	      var articles = blogIndex.querySelectorAll('.main-content-container article');
        	      
        	      const urlParams = new URLSearchParams(window.location.search);
                  const pageCategory = urlParams.get('category');
                  
                  var pageTitle = document.querySelector('h1.page-title');
                  pageTitle.innerHTML = pageCategory + ' ' + pageTitle.innerHTML;
                  
                  for (var i = 0; i < articles.length; i++) {
                      var category = articles[i].getAttribute('category');
                      if (category !== null && category.indexOf(", ") !== -1){
                        var categoryArray = category.split(", ");
                        for (var k = 0; k < categoryArray.length; k++){
                         
                          if (pageCategory == categoryArray[k]){
                            
                            page.innerHTML = page.innerHTML + articles[i].outerHTML;
                          } 
                        }
                      }
                      else if (category !== null && category == pageCategory){
                          page.innerHTML = page.innerHTML + articles[i].outerHTML;
                      } 
                  }
        	
        	      
        	      
                }
              };
              xhttp.open("GET", "/blog/", true);
              xhttp.send();
            }
    
    loadRecentArticles();

