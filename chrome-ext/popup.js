document.addEventListener('DOMContentLoaded', function() {
  
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
        "cnn": "Left", "nytimes": "Left", "huffpost": "Left",
        "foxnews": "Right", "usatoday": "Center", "reuters": "Center",
        "politico": "Left", "yahoo": "Left", "npr": "Center",
        "latimes": "Left", "breitbart": "Right", "nypost": "Right",
        "abcnews": "Left", "nbcnews": "Left", "cbsnews": "Left", 
        "newsweek": "Center", "cbslocal": "Left", "chicagotribune": "Left", 
        "nydailynews": "Left", "seattletimes": "Center", 
        "mercurynews": "Left", "washingtontimes": "Right", "miamiherald": "Left",
        "forbes": "Center", "theguardian": "Left",
        "bloomberg": "Left", "bbc": "Center", "buzzfeed": "Left",
        "slate": "Left", "theatlantic": "Left", "wsj": "Center",
        "bostonherald": "Right", "bostonglobe": "Left"
      };

      var lean = sourceDict[source];
	
	var capSource = source.charAt(0).toUpperCase() + source.slice(1)
document.getElementById("source").innerHTML = "News source: " + capSource;
document.getElementById("res").innerHTML = "Political leaning: " + lean;

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
