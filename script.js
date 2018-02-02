/**
 * Created by h205p2 on 5/12/17.
 */

$(document).ready(function(){
    var $submit = $("#myButton");
    var $input = $("#basic");
    var $output = $("#output");
    $submit.click(function(){
        var $btn = $(this).button();

        $output.empty();
        var search=changeSpace($input.val());
        $.ajax({
            url: "https://itunes.apple.com/search?term="+search,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                processFunction(result);
            },
            error: function(){
                alert('Failed!');
            }
        });
        $btn.button();
    });
});

function gameStart(){
    $("#startButton").fadeOut(200);
    $("body").pagecontainer("change", "#page2", {});
}



































/*function processFunction(result) {
    var $output = $("#output");
    //write a for loop that iterates over result.results and output data to the page
    $output.listview({
        splitTheme: "b"
    });
    var $page1 = $("#page1");
    $page1.pagecontainer({
        defaults: true,
        showLoadMsg: true,
        allowSamePageTransition: true
    });

    var splitTheme = $output.listview("option", "splitTheme");
    $output.listview( "option", "splitTheme", "b" );
    for(var i = 0; i < result.results.length; i++) {
        $output.append("<li class='ui-li-has-alt ui-li-has-thumb ui-first-child'><a href='" + result.results[i].previewUrl + "' class='ui-btn'><img src='" + result.results[i].artworkUrl60 + "'><h3>" + result.results[i].trackName + "</h3><p>" + result.results[i].artistName + "</p></a></li>");

    }

    $("body").pagecontainer("change", "#page2", {});

}

function changeSpace(value){
    var returnValue = "";
    for(var i = 0; i < value.length; i++){
        if(value[i]== " "){
            returnValue += "+"
        }
        else{
            returnValue += value[i];
        }
    }
    return returnValue
}*/