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
      var leanDict = {
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
        "bostonherald": "Right", "bostonglobe": "Left", "vox": "Left"
      };

      var reliabilityDict = {
        "cnn": "Fair", "nytimes": "Most", "huffpost": "Somewhat",
        "foxnews": "Somewhat", "usatoday": "Most", "reuters": "Most",
        "politico": "Most", "yahoo": "Most", "npr": "Most",
        "latimes": "Most", "breitbart": "Somewhat", "nypost": "Somewhat",
        "abcnews": "Most", "nbcnews": "Most", "cbsnews": "Most", 
        "newsweek": "Somewhat", "cbslocal": "Most", "chicagotribune": "Most", 
        "nydailynews": "Fair", "seattletimes": "Most", 
        "mercurynews": "Fair", "washingtontimes": "Somewhat", "miamiherald": "Most",
        "forbes": "Fair", "theguardian": "Fair",
        "bloomberg": "Most", "bbc": "Most", "buzzfeed": "Fair",
        "slate": "Somewhat", "theatlantic": "Fair", "wsj": "Most",
        "bostonherald": "Fair", "bostonglobe": "Fair", "vox": "Fair"
      };

      var lean = leanDict[source];
      var reliability = reliabilityDict[source];
	
	var capSource = source.charAt(0).toUpperCase() + source.slice(1)
document.getElementById("source").innerHTML = "News source: " + capSource;
document.getElementById("res").innerHTML = "Political leaning: " + lean;
document.getElementById("reliability").innerHTML = "Reliability: " + reliability;

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
