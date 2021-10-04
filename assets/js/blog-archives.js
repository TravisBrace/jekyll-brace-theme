
    function loadRecentArticles() {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  
        	      var blogIndex = document.createElement('html');
                      blogIndex.innerHTML = this.responseText;
        	      
        	      var page = document.querySelector('.main-content-container section.content');
        	      page.innerHTML = "";
        	      
        	      var articles = blogIndex.querySelectorAll('.content article');
        	      
        	      const urlParams = new URLSearchParams(window.location.search);
                  const pageArchive = urlParams.get('archive');
                  
                  var pageTitle = document.querySelector('h1.page-title');
                  pageTitle.innerHTML = pageArchive + ' ' + pageTitle.innerHTML;
                  
                  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                  
                  for (var i = 0; i < articles.length; i++) {
                      var archive = new Date(articles[i].getAttribute('date'));
                      archive = monthNames[archive.getMonth()] + ' ' + archive.getFullYear();
                      console.log(archive)
                      if (archive !== null && archive == pageArchive) {
                          page.innerHTML = page.innerHTML + articles[i].outerHTML;
                      }
                  }
                }
              };
              xhttp.open("GET", "/~reynalawfirm/blog/", true);
              xhttp.send();
            }
    
    loadRecentArticles();