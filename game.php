<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
        
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>RPGEngine - Новая жизнь для форумных ролевых игр</title>
		<link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/jquery-ui.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/functions.js"></script>
        <script type="text/javascript" src="js/ui.js"></script>
	</head>
    
	<body>
        <div id="wrapper">
            <div id="header" class="ui-widget-header">
                Наша игра самая классная!! RPGEngine!
            </div>
            <div id="container">
                <div id="menu" class="ui-widget-content">
                    <button class="menubutton">Локация</button>
                    <button id="chat" class="menubutton">Чат</button>
                    <button id="inventory" class="menubutton">Инвентарь</button>
                    <button id="settings" class="menubutton">Инфо</button>
                    <button id="working">Work</button>
                    <div id="timer"></div>
                </div>
                <div id="content" class="ui-widget-content">
                    <div id="location" class="ui-widget-content">
                        <div id="info">
                            <? include("frames/location.php") ?>
                        </div>
                        <div style="clear: right;"></div>
                        <div id="action" class="ui-widget-content">
                            <? include("frames/action.php") ?>
                        </div>
                    </div>
                    <div id="panels" class="ui-widget-content">
                        <div id="p_inventary" class="panel"><? include("frames/inventory.php")?></div>
                        <div id="p_chat" class="panel hidden"><? include("frames/chat.php")?></div>
                        <div id="p_settings" class="panel hidden"><? include("frames/settings.php")?></div>
                    </div>
                </div>
            </div>
            <div id="clear"></div>
            <div id="footer" class="ui-widget-content">
                RPGEngine® - All right reserved.
            </div>
        </div>
        <script type="text/javascript" src="js/game.js"></script>
	</body>
</html>