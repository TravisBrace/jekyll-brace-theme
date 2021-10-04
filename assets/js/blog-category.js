
    function loadRecentArticles() {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  
        	      var blogIndex = document.createElement('html');
                      blogIndex.innerHTML = this.responseText;
        	      
        	      var page = document.querySelector('.column-main section.content');
        	      page.innerHTML = "";
        	      
        	      var articles = blogIndex.querySelectorAll('.content article');
        	      
        	      const urlParams = new URLSearchParams(window.location.search);
                  const pageCategory = urlParams.get('category');
                  
                  var pageTitle = document.querySelector('h1.page-title');
                  pageTitle.innerHTML = pageCategory + ' ' + pageTitle.innerHTML;
                  
                  for (var i = 0; i < articles.length; i++) {
                      var category = articles[i].getAttribute('category');
                      if (category !== null && category == pageCategory) {
                          page.innerHTML = page.innerHTML + articles[i].outerHTML;
                      }
                  }
        	
        	      
        	      
                }
              };
              xhttp.open("GET", "/~reynalawfirm/blog/", true);
              xhttp.send();
            }
    
    loadRecentArticles();