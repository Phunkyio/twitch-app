var inputStreamer;
var streamerList = [];
var streamerData, streamerStatus;
var duplicateTest;

function addStreamer(inputStreamer) {
  streamerList.push(inputStreamer);
  // TODO: Purge invalid Twitch IDs.
  console.log(inputStreamer);
  console.log("Streamer list updated: ");
  console.log(streamerList);
  $('#inputStreamer').val('');
  $.get("https://wind-bow.glitch.me/twitch-api/streams/" + inputStreamer, function(data, status) {
    if (data.stream != null) {
      displayStreamer(data);
    } else {
      console.log('Error: Streamer not found or is offline.');
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
  var display = "<div class='streamerDisplay'><div class='streamerProfile'><a href=" + data.stream.channel.url + "><img src='" + data.stream.channel.logo + "' /></a><br /><span>" + data.stream.channel.display_name + "(" + data.stream.channel.broadcaster_language + ")</span></div><div class='streamerDescription'><div><img src=" + data.stream.preview.medium + "/></div><div>" + data.stream.channel.status + "</div><div>" + data.stream.game + "</div><div>" + data.stream.viewers + " viewers</div></div></div></div>";

  $(".streamerTable").append(display);
}

function displayStreamerList() {
  for (var c = 0; c < streamerList.length; c++) {
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamerList[c], function(data, status) {
      testData(data, status);
      if (data.stream != null) {
        displayStreamer(data);
      } else {
        console.log('Error: Streamer not found or is offline.');
        // TODO: add display for streamer not found error
        // TODO: find a way to show search results for streamers
      }
    });

  }
}

function streamerDisplayRefresh() {
  $(".streamerTable").empty();
  console.log("Streamer Table emptied.");
  displayStreamerList();
  console.log("Displaying Streamer List:");
  console.log(streamerList);
}

function streamerDuplicateCheck(inputStreamer) {
  console.log("attempting duplicate check for: " + inputStreamer);
  var duplicateTestPass = true;
  if (streamerList.length == 0) {
    return true;
  } else {
    for (var x = 0; x < streamerList.length; x++) {
      console.log("Evaluating " + inputStreamer + " against " + streamerList[x]);
      if (inputStreamer == streamerList[x]) {
        console.log("Duplicate check fail.");
        return false;
      } else {
        console.log("Duplicate check pass.");
      }
    }
    return true;
  }
}

//onload
window.onload = function() {
  //GET  https://wind-bow.glitch.me/twitch-api/streams/burkeblack
  displayStreamerList();
};

//handlers
$('#addStreamer').click(function() {
  inputStreamer = $("#inputStreamer").val();
  duplicateTest = streamerDuplicateCheck(inputStreamer);
  if (duplicateTest) {
    addStreamer(inputStreamer);
  }
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

$('#inputStreamer').keypress(function(e) {
  if (e.keyCode == 13) {
    inputStreamer = $("#inputStreamer").val();
    duplicateTest = streamerDuplicateCheck(inputStreamer);
    if (duplicateTest) {
      addStreamer(inputStreamer);
    }
  }
});

$("#refreshStreamerList").click(function() {
  streamerDisplayRefresh();
})
