$(document).ready(function() {
   
   $("#cari").click(function(e) {
      $("#article-list").html(""); 
      
      if ($("#isi").val() === "") {
      } else {
         $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&grnnamespace=0&prop=extracts&exlimit=max&explaintext&exintro&gsrsearch=" + $("#isi").val() + "&callback=?", function(result) {
         if (result.hasOwnProperty("query")) {
            $.each(result.query.pages, function(key, page){
               var extract = page.extract.length > 464 ? page.extract.substring(0,464) + "..." : page.extract;
               $("#article-list").show(1000);
               $("#article-list").append('<li><h3><a target="_blank" href="http://en.wikipedia.org/?curid=' + page.pageid + '">' + page.title + '</a></h2>' + '<p>' + extract + '</p>' + '</li>');
               });
            }
          });
      }
      e.preventDefault();
   });
});

