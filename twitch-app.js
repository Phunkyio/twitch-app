var streamerList = [];
var streamerData, streamerStatus;
streamerList.push('streamerhouse');
streamerList.push('burkeblack');
streamerList.push('summit1g');

function testData(data, status) {
  console.log("Data:");
  console.log(data);
  console.log(status);
}

function displayStreamer(data) {
  console.log(data.stream.channel.logo);
  var display = "<div class='streamerDisplay'><div class='streamerProfile'><img src='" + data.stream.channel.logo + "' /><br /><span>" + data.stream.channel.display_name + "</span></div><div class='streamerDescription'><span>" + data.stream.channel.status + "</span></div></div></div>";

  $(".streamerTable").append(display);
}

window.onload = function() {
  //GET  https://wind-bow.glitch.me/twitch-api/streams/burkeblack


  for (var c = 0; c < streamerList.length; c++) {
    console.log(streamerList);
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamerList[c], function(data, status) {
      testData(data, status);
      if (data.stream != null) {
        displayStreamer(data);
      } else {}
    });

  }
};
