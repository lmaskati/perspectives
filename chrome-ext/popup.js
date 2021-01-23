document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      
      //extracting url - seems to be correct
      var url = tab.url;
      var source = url.split(".com")[0];
      source = source.split(".");
      source = source[source.length - 1];

      //need to get just the source from the url

      //making news-source dict (maybe don't do this all in one file lol idk)
      //mostly obtained from: https://www.allsides.com/media-bias/media-bias-ratings
      var sourceDict = {
        "cnn": "left", "nytimes": "left", "huffpost": "left",
        "foxnews": "right", "usatoday": "center", "reuters": "center",
        "politico": "left", "yahoo": "left", "npr": "center",
        "latimes": "left", "breitbart": "right", "nypost": "right",
        "abcnews": "left", "nbcnews": "left", "cbsnews": "left", 
        "newsweek": "center", "cbslocal": "left", "chicagotribune": "left", 
        "nydailynews": "left", "seattletimes": "center", 
        "mercurynews": "left", "washingtontimes": "right", "miamiherald": "left",
        "forbes": "center", "theguardian": "left",
        "bloomberg": "left", "bbc": "center", "buzzfeed": "left",
        "slate": "left", "theatlantic": "left", "wsj": "center",
        "bostonherald": "right", "bostonglobe": "left"
      };

      var lean = sourceDict[source];
document.getElementById("source").innerHTML = source;
document.getElementById("res").innerHTML = lean;

      //SEEMS UNECESSARY FOR US 
      // var f = d.createElement('form');
      // f.action = 'http://gtmetrix.com/analyze.html?bm';
      // f.method = 'post';
      // var i = d.createElement('input');
      // i.type = 'hidden';
      // i.name = 'url';
      // i.value = tab.url;
      // f.appendChild(i);
      // d.body.appendChild(f);
      // f.submit();
    });
  }, false);
}, false);
