// JavaScript File
/*global $*/

$(document).ready(function() {
    //API only works when you have CORS Changer extension enabled in your browser.
    $.getJSON( "https://ajar-target.gomix.me/status" , function (response) {
        console.log(response);
        $("#trainData1").append(response[0].status);
        $("#trainData2").append(response[1].status);
        $("#trainData3").append(response[2].status);
        $("#trainData4").append(response[3].status);
        $("#trainData5").append(response[4].status);
        $("#trainData6").append(response[5].status);
        $("#trainData7").append(response[6].status);
        $("#trainData8").append(response[7].status);
        $("#trainData9").append(response[8].status);
        $("#trainData10").append(response[9].status);
        $("#trainData11").append(response[10].status);
    });
});

  