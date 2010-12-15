var timer = 0;
var intervaler;
var settings = {}
settings.show_location_info;
settings.working;


function togleWorking(b)
{
    settings.working = b;
    setCookie("working",b);
    if(b)
    {
        intervaler = setInterval(Update, 1000);
         $( "#working" ).button({
                icons: {
                        primary: "ui-icon-pause"
                }
            }) 
    }
    else
    {
        clearInterval(intervaler);
         $( "#working" ).button({
                icons: {
                        primary: "ui-icon-play"
                }
            })
    }
}

function togleLocationInfo(b)
{
    settings.show_location_info = b;
    setCookie("show_location_info", b);
    if(b)
    {
        $("#l_info, #l_image").show();
        $("#action").css("height", "155");
    }
    else
    {
        $("#l_info, #l_image").hide();
        $("#action").css("height", "260");
    }
};

function togleWideDisplay(b)
{
    settings.wide = b;
    if(b)
    {
        //Nothing
    }
    else
    {
        //Nothing
    }
}

function Update()
{    
    timer+=5;
    $( "#timer" ).progressbar( "value" , timer*100/60 );
    if(timer == 60)
    {
        timer = 0;
        window.history.go();
    }
};

