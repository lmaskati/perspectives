document.addEventListener('DOMContentLoaded', function() {
  
    chrome.tabs.getSelected(null, function(tab) {
      d = document;


	//left custom search engine
	var left = "b2429b4ec66f52cb6";
	//right custom search engine
	var right = "b2429b4ec66f52cb6";
	//center custome search engine 
	var center = "b2429b4ec66f52cb6";
      
      //extracting url - seems to be correct
      var url = tab.url;
	// extract title
	var title = tab.title; 
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
      var lean = leanDict[source];
//      var reliability = reliabilityDict[source];
	
	var capSource = source.charAt(0).toUpperCase() + source.slice(1)
document.getElementById("source").innerHTML = "News source: " + capSource;
document.getElementById("res").innerHTML = "Political leaning: " + lean;

var key = "AIzaSyBbvk21k9hF6HNwIONXX-zwVw4-xNafNJE";
var centralQuery = "https://www.googleapis.com/customsearch/v1?q=" + title + "&key=" + key + "&tbm=nws&cx=" + center;
var leftQuery = "https://www.googleapis.com/customsearch/v1?q=" + title + "&key=" + key + "&tbm=nws&cx=" + left;
var rightQuery = "https://www.googleapis.com/customsearch/v1?q=" + title + "&key=" + key + "&tbm=nws&cx=" + right;


fetch(leftQuery)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);

	// if center or right...do smth 
	document.getElementById("img1").style.backgroundImage = "url(" + data.items[0].pagemap.cse_image[0].src + ")";
	document.getElementById("head1").innerHTML = data.items[0].title;

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

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
