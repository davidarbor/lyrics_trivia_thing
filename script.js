/**
 * Created by h205p2 on 5/12/17.
 */

$(document).ready(function(){
    var $submit = $("#startButton");
    var $output = $("#lyricsOutput");
    /*$submit.click(function(){
        $output.empty();
        // $.ajax({
        //     url: "http://api.musixmatch.com/ws/1.1/track.get?track_id=15445219&apikey=77c753d1b959d1f133e82303ce171a1d",
        //     type: 'GET',
        //     crossDomain: true,
        //     dataType: 'jsonp',
        //     success: function(result) {
        //         console.log(result);
        //     },
        //     error: function(){
        //         alert('Failed!');
        //     }
        // });
        $.ajax({
            url: 'http://api.musixmatch.com/ws/1.1/track.get?track_id=15445219&apikey=77c753d1b959d1f133e82303ce171a1d',
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET',
            success: function(data){
                console.log(data);
            }
        });

    });*/
});

var songsArray = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20];

var songNum=Math.floor(Math.random()*songsArray.length);
var songNum2=Math.floor(Math.random()*songsArray.length);
var songNum3=Math.floor(Math.random()*songsArray.length);
var songNum4=Math.floor(Math.random()*songsArray.length);

var currentSong=songsArray[songNum];

var button1=document.getElementById("firstOption");
var button2=document.getElementById("secondOption");
var button3=document.getElementById("thirdOption");
var button4=document.getElementById("fourthOption");
var buttonArray=[button1, button2, button3, button4];

var buttonOption=Math.floor(Math.random()*buttonArray.length);

function gameStart(){
    $("#startButton").fadeOut(200);
    $("body").pagecontainer("change", "#page2", {});
    document.getElementById("lyricsOutput").innerHTML=currentSong.snippet;
    switch(buttonOption){
        case 0:
            document.getElementById("firstOption").textContent=currentSong.songName;
            break;
        case 1:
            document.getElementById("secondOption").textContent=currentSong.songName;
            break;
        case 2:
            document.getElementById("thirdOption").textContent=currentSong.songName;
            break;
        case 3:
            document.getElementById("fourthOption").textContent=currentSong.songName;
            break;
    }
}

function guessFirst(){
    $("body").pagecontainer("change", "#page3", {});
}

function guessSecond(){
    $("body").pagecontainer("change", "#page4", {});
}

function guessThird(){
    $("body").pagecontainer("change", "#page4", {});
}

function guessFourth(){
    $("body").pagecontainer("change", "#page4", {});
}

function backToSecond(){
    $("body").pagecontainer("change", "#page2", {});
    gameStart();
}

console.log(songNum);
console.log(songNum2);
console.log(songNum3);
console.log(songNum4);
console.log(buttonOption);