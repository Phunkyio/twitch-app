var streamerList = [];
var streamerData, streamerStatus;
streamerList.push('streamerhouse');
streamerList.push('burkeblack');

function testData(data, status){
  console.log("Data:");
  console.log(data);
  console.log(status);
}

function displayStreamer(data){
  var display = '';
}

window.onload = function() {
  //GET  https://wind-bow.glitch.me/twitch-api/streams/burkeblack


  for (var c = 0; c < streamerList.length; c++) {
    console.log(streamerList);
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamerList[c], function(data, status){
      testData(data, status);
    });

  }
};
