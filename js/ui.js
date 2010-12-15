$(document).ready(function(){
    togleWorking(getCookie("working") == 'true');
    togleLocationInfo(getCookie("show_location_info") != 'false');
})

$(function() {
    $("button").button()
    .click(function(){
        $(this).removeClass('ui-state-focus');
    });
    
    $( "#working" ).button({
        text: false
    })
    .click(function(){
        togleWorking(!settings.working);
    });
    
    $( "#timer" ).progressbar({
		value: 0
	});
    
    $(".checkbox").button();
	var icons = {
		header: "ui-icon-circle-arrow-e",
		headerSelected: "ui-icon-circle-arrow-s"
	};
    
    $(".checkbox#s_showloc").click(function(){
        togleLocationInfo(!(settings.show_location_info))
    })
    
    $("button#chat").click(function(){
        $(".panel").addClass("hidden");
        $("div#p_chat").removeClass("hidden");
    })
    $("button#inventory").click(function(){
        $(".panel").addClass("hidden");
        $("div#p_inventary").removeClass("hidden");
    })
    $("button#settings").click(function(){
        $(".panel").addClass("hidden");
        $("div#p_settings").removeClass("hidden");
    })
});