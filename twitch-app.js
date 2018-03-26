window.onload = function() {
    //GET  https://wind-bow.glitch.me/twitch-api/streams/burkeblack
    $.get("https://wind-bow.glitch.me/twitch-api/streams/streamerhouse", function(data, status) {
        //alert("Data: " + data + "\nStatus: " + status);
        console.log("Data: "); console.log(data);
        console.log("Status:" + status);
      });
    };
