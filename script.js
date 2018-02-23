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

function gameStart(){
    $("#startButton").fadeOut(200);
    $("body").pagecontainer("change", "#page2", {});
    var songsArray=[song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20];
    console.log(song1.snippet);
    var songNum=Math.floor(Math.random()*songsArray.length);
    /*var songNum2=Math.floor(Math.random()*songsArray.length);
    var songNum3=Math.floor(Math.random()*songsArray.length);
    var songNum4=Math.floor(Math.random()*songsArray.length);
    var songNum5=Math.floor(Math.random()*songsArray.length);*/
    document.getElementById("lyricsOutput").innerHTML=songsArray[songNum].snippet;
    /*document.getElementById("firstOption").textContent=songsArray[songNum2].songArtist;
    document.getElementById("secondOption").textContent=songsArray[songNum3].songArtist;
    document.getElementById("thirdOption").textContent=songsArray[songNum4].songArtist;
    document.getElementById("fourthOption").textContent=songsArray[songNum5].songArtist;*/
}

function guessFirst(){
    $("body").pagecontainer("change", "#page3", {});
}

function guessSecond(){
    $("body").pagecontainer("change", "#page4", {});
}

function guessThird(){

}

function guessFourth(){

}

function backToSecond(){
    $("body").pagecontainer("change", "#page2", {});
}