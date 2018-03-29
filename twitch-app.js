var streamerList = [];
var streamerData, streamerStatus;
streamerList.push('streamerhouse');
streamerList.push('burkeblack');
streamerList.push('summit1g');

function addStreamer(){
  var inputStreamer = $('#inputStreamer').val();
  console.log(inputStreamer);
  $.get("https://wind-bow.glitch.me/twitch-api/streams/" + inputStreamer, function(data,status){
    if (data.stream != null) {
      displayStreamer(data);
    } else {
      console.log("no stream data");
    }
  });
}

function testData(data, status) {
  console.log("Data:");
  console.log(data);
  console.log(status);
}

function displayStreamer(data) {
  var display = "<div class='streamerDisplay'><div class='streamerProfile'><img src='" + data.stream.channel.logo + "' /><br /><span>" + data.stream.channel.display_name + "</span></div><div class='streamerDescription'><span>" + data.stream.channel.status + "</span></div></div></div>";

  $(".streamerTable").append(display);
}

//onload
window.onload = function() {
  //GET  https://wind-bow.glitch.me/twitch-api/streams/burkeblack


  for (var c = 0; c < streamerList.length; c++) {
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamerList[c], function(data, status) {
      testData(data, status);
      if (data.stream != null) {
        displayStreamer(data);
      } else {}
    });

  }
};

//handlers
$('#addStreamer').click(function(){
  addStreamer();
  // var inputStreamer = $('#inputStreamer').val();
  // console.log(inputStreamer);
  // $.get("https://wind-bow.glitch.me/twitch-api/streams/" + inputStreamer, function(data,status){
  //   if (data.stream != null) {
  //     displayStreamer(data);
  //   } else {
  //     console.log("no stream data");
  //   }
  // });
});

$('#inputStreamer').keypress(function(e){
  if(e.keyCode == 13){
    addStreamer();
  }
});
