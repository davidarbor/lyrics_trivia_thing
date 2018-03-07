/**
 * Created by h205p2 on 5/12/17.
 */

$(document).ready(function(){
    var $submit = $("#startButton");
    var $output = $("#lyricsOutput");

    songNum=Math.floor(Math.random()*songsArray.length);
    songNum2=Math.floor(Math.random()*songsArray.length);
    songNum3=Math.floor(Math.random()*songsArray.length);
    songNum4=Math.floor(Math.random()*songsArray.length);

    currentSong=songsArray[songNum];

    button1=document.getElementById("firstOption");
    button2=document.getElementById("secondOption");
    button3=document.getElementById("thirdOption");
    button4=document.getElementById("fourthOption");
    buttonArray=[button1, button2, button3, button4];

    buttonOption=Math.floor(Math.random()*buttonArray.length);

    /*text1=document.getElementById("firstOption").textContent;
    text2=document.getElementById("secondOption").textContent;
    text3=document.getElementById("thirdOption").textContent;
    text4=document.getElementById("fourthOption").textContent;*/

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
    console.log(songNum);
    console.log(songNum2);
    console.log(songNum3);
    console.log(songNum4);
    console.log(buttonOption);
});

function resetData(){
    songNum=Math.floor(Math.random()*songsArray.length);
    songNum2=Math.floor(Math.random()*songsArray.length);
    songNum3=Math.floor(Math.random()*songsArray.length);
    songNum4=Math.floor(Math.random()*songsArray.length);

    currentSong=songsArray[songNum];

    button1=document.getElementById("firstOption");
    button2=document.getElementById("secondOption");
    button3=document.getElementById("thirdOption");
    button4=document.getElementById("fourthOption");
    buttonOption=Math.floor(Math.random()*buttonArray.length);

    text1=document.getElementById("firstOption").textContent;
    text2=document.getElementById("secondOption").textContent;
    text3=document.getElementById("thirdOption").textContent;
    text4=document.getElementById("fourthOption").textContent;
}

songsArray=[song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20];

function gameStart(){
    resetData();
    $("#startButton").fadeOut(200);
    $("body").pagecontainer("change", "#page2", {});
    console.log(button1);
    document.getElementById("lyricsOutput").innerHTML=currentSong.snippet;
    switch(buttonOption){
        case 0:
            document.getElementById("firstOption").textContent=currentSong.songName;
            document.getElementById("secondOption").textContent=songsArray[songNum2].songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum3].songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 1:
            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("secondOption").textContent=currentSong.songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum3].songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 2:
            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("secondOption").textContent=songsArray[songNum3].songName;
            document.getElementById("thirdOption").textContent=currentSong.songName;
            document.getElementById("fourthOption").textContent=songsArray[songNum4].songName;
            break;
        case 3:
            document.getElementById("firstOption").textContent=songsArray[songNum2].songName;
            document.getElementById("secondOption").textContent=songsArray[songNum3].songName;
            document.getElementById("thirdOption").textContent=songsArray[songNum4].songName;
            document.getElementById("fourthOption").textContent=currentSong.songName;
            break;
    }
    text1=document.getElementById("firstOption").textContent;
    text2=document.getElementById("secondOption").textContent;
    text3=document.getElementById("thirdOption").textContent;
    text4=document.getElementById("fourthOption").textContent;
    console.log(text1);
}

function guessFirst(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songArtists1").innerHTML=currentSong.songArtist;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    document.getElementById("songArtists2").innerHTML=currentSong.songArtist;
    if(text1==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function guessSecond(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songArtists1").innerHTML=currentSong.songArtist;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    document.getElementById("songArtists2").innerHTML=currentSong.songArtist;
    if(text2==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }

}

function guessThird(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songArtists1").innerHTML=currentSong.songArtist;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    document.getElementById("songArtists2").innerHTML=currentSong.songArtist;
    if(text3==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function guessFourth(){
    $("#audio1").attr("src",currentSong.songURL);
    $("#audio2").attr("src",currentSong.songURL);
    document.getElementById("songName1").innerHTML=currentSong.songName;
    document.getElementById("songArtists1").innerHTML=currentSong.songArtist;
    document.getElementById("songName2").innerHTML=currentSong.songName;
    document.getElementById("songArtists2").innerHTML=currentSong.songArtist;
    if(text4==currentSong.songName){
        $("body").pagecontainer("change", "#page3", {});
    }
    else{
        $("body").pagecontainer("change", "#page4", {});
    }
}

function backToSecond(){
    $("body").pagecontainer("change", "#page2", {});
    gameStart();
}