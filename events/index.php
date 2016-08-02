<?php
if(!defined('__PRAGYAN_CMS'))
{
        header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
        echo "<h1>403 Forbidden<h1><h4>You are not authorized to access the page.</h4>";
        echo '<hr/>'.$_SERVER['SERVER_SIGNATURE'];
        exit(1);
}
?>

<html>
    <head>
    <title><?php $cmstitle=$TITLE;echo $cmstitle; ?></title>
      <!--Import Google Icon Font-->
      
      <!--Import materialize.css-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link type="text/css" rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/materialize.min.css"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/style.css"  media="screen,projection"/>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
	
    <body>
    <div class="header">
    	<?php echo $cmstitle; ?>
    </div>
     <nav class="transparent noshadow z-depth-1" style="position:absolute;box-shadow:0 0 0 0;">
	<ul id="slide-out" class="side-nav">
		<li>
			<br>
			<center><img src="images/logo2.png" width="75px" />
			</center>
		</li>
		
		<li><a href="login">Events</a>
		</li>
		<li><a href="register">Highlights</a>
		</li>
		<li><a href="register">Sponsors</a>
		</li>
		<li><a href="register">Games</a>
		</li>
		<li><a href="register">Hospitality</a>
		</li>
		<li><a href="register">Contacts</a>
		</li>
	</ul> <a href="#" data-activates="slide-out" class="button-collapse" style="display:block !important;"><i class="material-icons" style="color:white;opacity:0.7">menu</i></a> </nav>
        
        <main class="home">
      <div id="container">
    <?php echo $MENUBAR; ?>
 

      <div id="farcloud" class="loading2"></div>

<div id="nearcloud" class="loading1"></div>

		<div class="bubblecontainer" id="maincontainer">
		
		</div>
      </div>

     
      </main>
      <div class="fixed-action-btn horizontal click-to-toggle" style="bottom: 45px; right: 24px;">
    <a class="btn-floating btn-large red">
      <i class="material-icons">perm_identity</i>
    </a>
    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>

      <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery.js"></script>
      <script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/materialize.min.js"></script>
      <script type="text/javascript">
      	 $(".button-collapse").sideNav();
      	 	
		var links=[];
		var maindivs=$(".div_topnav>ul>li");
		for(i=0;i<maindivs.length;i++)
		{
			var link=$($(".div_topnav>ul>li").children("a")[i]).attr("href");
			var name=$($($(".div_topnav>ul>li").children("a")[i]).children(".cms-menuitem")[0]).html();
			$("#maincontainer").append("<a href='"+link+"'><div class='bubblebox'><div class='bubble'>"+name+"</div></div></a>");
		}

		
		$(".div_topnav").hide();
		$("#maincontainer").hide();
		$("#maincontainer").fadeIn();
      </script>
    </body>
  </html>
        