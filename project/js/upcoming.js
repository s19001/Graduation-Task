// var channelId = 'UC2GuoutVyegg6PUK88lLpjw'; // 兄者弟者
var channelId = 'UC_SI1j1d8vJo_rYMV5o_dRg'; // ポケモン
// var eventType = 'live';
var eventType = 'upcoming';

var num = 5;
var listid = 'PLU12uITxBEPGosR7YHt6eSeKUwK8U-CGa';

var apikey = 'AIzaSyCEEJpyhA2XEe8QuyYIV0IWu8RjoHOQ25g';

// 配信予定リストから
var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults='+ num +'&playlistId='+ listid +'&key='+apikey;

// チャンネルIDから
// var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+channelId+'&order=date&eventType='+ eventType +'&type=video&key='+ apikey;

// var maxresults = '1';
// var playlistid = 'PLPrDIg7BwOE5NzyqbetHtFpgjZvnYJiQK';

// part=snippet&maxResults='+maxresults +'
// &playlistId='+playlistid+'
window.addEventListener('load', function() {
  getTrainList();
});

function getTrainList() {
  fetch(url)
  .then(function (data) {
    return data.json(); // 読み込むデータをJSONに設定
  })
  .then(function (json) {
    console.log(json);
    for (var i = 0; i < json.items.length; i++) {
      var videoId = json.items[i].snippet.resourceId.videoId;
      var title = json.items[i].snippet.title;
     

      //表形式で遅延路線を表示する
      var row = document.getElementById('greeting').insertRow();
      // row.insertCell().textContent = i + 1;
      row.insertCell().textContent = title;
      row.insertCell().textContent = "https://www.youtube.com/watch?v=" + videoId;
    }
  });
}
//
//
//
//
/*
let json;    

fetch(url)
  .then(
    function(u) {
      return u.json();
    }
  )
  .then(
    function(e) {
      json = e;
      for (var i = 0; i < json.length; i++) {
        var title = json.items[0].snippet.title;
        var title = json.items[0].snippet.title;
          // var train = json[i].name;
          // var company = json[i].company;
        var row = document.getElementById('greeting').insertRow();
        row.insertCell().textContent = i + 1;
        row.insertCell().textContent = title;
        row.insertCell().textContent = "https://www.youtube.com/watch?v=" + videoId;
      // console.log(videoId);
      // console.log(title);
      // console.log("https://www.youtube.com/watch?v=" + videoId);
      }
      console.log(json);

      // greeting.innerHTML = "<h1>" + title + "</h1>";
      // greeting.innerHTML = "<a>https://www.youtube.com/watch?v=" + videoId + "</a>");
    }
);
*/


// ここから
/*
var xhr = new XMLHttpRequest();

xhr.open('GET', url);
// xhr.responseType = 'json';
xhr.send();                                                                                      
// xhr.onload = function() {
//   const superHeroes = xhr.response;
//   populateHeader(superHeroes);
//   showHeroes(superHeroes);
// }
// 
// function populateHeader(obj) {
//   const myH1 = document.createElement('h1');
//   myH1.textContent = obj['squadName'];
//   header.appendChild(myH1);
// 
//   const myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
//   header.appendChild(myPara);
// }


var videoId = '';

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) { 
    console.log( JSON.parse(xhr.responseText) );
    const data = JSON.parse(xhr.responseText);
    videoId = data.items[0].id.videoId;

    // const myArticle = document.createElement('h1');
    
    // myArticle.innerText = data.items[0].id.videoId;

    // data = JSON.parse(xmlhttp.responseText);
    // var elem = document.getElementById(videoId);
    // elem.innerText = data.items[0].id.videoId;

    // if (xhr.response) {
    //   // jsonをオブジェクトに変更
    //   var jsonObj = JSON.parse(xhr.responseText);
    //   
 
    //   // disp(jsonObj, "txt");
    // }
  }
}
*/
// ここまで

// --------------------------------------------------
/*
// ここから
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '225',
    width: '400',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
*/
// --------------------------------------------------



// ここまで
/*
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
// var videoid = '';
// videoid = xhr[0].id.videoId;
*/
/*
var data = null;
xhr.onload = function(){
  data = JSON.parse(this.responseText);
  console.log(data);
  console.log("XHR送信成功!!");
  showWeather(data);
}

xhr.send(null);

function showWeather(data){
  var vid = data.items.id.videoId;    // 動画ID
}

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '225',
    width: '400',
    videoId: vid,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
*/
