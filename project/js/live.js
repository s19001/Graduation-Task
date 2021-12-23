var num = 5;
var listid = 'PLU12uITxBEPH-v3cHoNvURjai8QqZqcxh';

var apikey = '';

var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults='+ num +'&playlistId='+ listid +'&key='+apikey;

window.addEventListener('load', function() {
  getYoutubeList();
});

function getList() {
  fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (json) {
    console.log(json);
    for (var i = 0; i < json.items.length; i++) {
      var videoId = json.items[i].snippet.resourceId.videoId;
      var title = json.items[i].snippet.title;
     

      var row = document.getElementById('greeting').insertRow();
      // row.insertCell().textContent = i + 1;
      row.insertCell().textContent = title;
      // title.link("https://www.youtube.com/watch?v=" + videoId);
      row.insertCell().textContent = "https://www.youtube.com/watch?v=" + videoId;
    }
  });
}
