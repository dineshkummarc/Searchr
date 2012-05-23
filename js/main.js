$(document).ready(function(){
    /**
     * Todo: 1. to handle the case when the key word is empty.
     */
    function updateLink() {
        $("#google").attr("href", "http://www.google.com/search?q=" + encodeURI($("#word").val()) + "+filetype%3A" + encodeURI($("#types").data("filetype")));
    }	
    
    $("#types a").click( function () {            
        $("#types a").each(
            function(){
                $(this).css({ "background-color":"",  "padding" : "", "color":"#6599CB", fontWeight:"normal"});
            }
        );
        $(this).css({ "background-color":"#6599CB", "padding" : "5px", "color":"white", fontWeight:"bolder"});
        
        $("#types").data("filetype", $(this).attr("value"));					
        updateLink();      
        $("#word").focus();
        return false;
    });          

    /* setup colorbox plugin */
    $.fn.colorbox.settings.transition = "fade";
    $.fn.colorbox.settings.bgOpacity = "0.8";
    $.fn.colorbox.settings.contentCurrent = "({current}/{total})";
    $("#google").colorbox({contentWidth:"800px", contentHeight:"500px", contentIframe:true});
    /* footer link display */
    $("#thanks > a").colorbox({contentWidth:"800px", contentHeight:"500px", contentIframe:true});
    $("#copyright > a").colorbox({contentWidth:"800px", contentHeight:"500px", contentIframe:true});
    
    $("#types a").each(
        function(){                 
            $(this).css({ "background":"transparent url('icons/" + $(this).attr("value") + ".gif') no-repeat 4px center", "height": "100%"});
            //$(this).prepend("<img src='icons/" + $(this).attr("value") + ".png' />");
            $(this).simpletip({ showEffect: 'slide', hideEffect: 'slide', position: 'top', offset: [0,-10],content: $(this).attr("title")});
        }
    );
    /* initialize the data "filetype" */
    $("#types a:first").click();

    /* update the link when "#word" changes */
    $("#word").keydown(function(e){
        updateLink();
    }).keyup(function(e){
        /* submit search with "enter" key */
        if(e.keyCode == '13') {
            $("#google").click();
        }
    });
    
    /* handle footer links display */
    $("#footLinks a").toggle(function(){
        $("#footLinks a").each(function(){
            $("#" + $(this).attr("title")).hide('fast');
        });

        $("#" + $(this).attr("title")).slideDown('slow');
        return false;
    },  function(){
        $("#" + $(this).attr("title")).slideUp('slow');
        return false;
    }
    );
});