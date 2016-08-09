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
		<script language="javascript" type="text/javascript">
		//defined here for use in javascript
		var templateBrowserPath = "<?php echo $TEMPLATEBROWSERPATH ?>";
		var urlRequestRoot = "<?php echo $urlRequestRoot; ?>";

		
		</script>
		<title>
			<?php $cmstitle=$TITLE;echo $cmstitle; ?>
		</title>
		<meta name="description" content="<?php echo $SITEDESCRIPTION ?>" />
		<meta name="keywords" content="<?php echo $SITEKEYWORDS.', '.$PAGEKEYWORDS ?>" /> 
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php global $urlRequestRoot;	global $PAGELASTUPDATED;
		if($PAGELASTUPDATED!="")
			echo '<meta http-equiv="Last-Update" content="'.substr($PAGELASTUPDATED,0,10).'" />'."\n";
		?>
		<?php echo $BREADCRUMB; ?>
		<?php echo $DEBUGINFO; ?>
		<?php echo $JCONTENT; ?>
		<link rel="index" href="./" title="Home" />


		<link rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/style.css">
		<link rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/mdl/material.css">
		<link rel="stylesheet" href="<?php echo $TEMPLATEBROWSERPATH; ?>/css/font-awesome.min.css">
		<script src="<?php echo $TEMPLATEBROWSERPATH; ?>/css/mdl/material.min.js"></script>
		<script src="<?php echo $TEMPLATEBROWSERPATH; ?>/script/jquery-1.10.2.min.js"></script>
<script src="<?php echo $TEMPLATEBROWSERPATH; ?>/script/script.js"></script>
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-19500581-1', 'auto');
			ga('send', 'pageview');
		</script>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> 
		<style type="text/css">
		
		</style>
	</head>
	<body>
		<div class="overlay ease">


		</div>
		<div class="holder ease">
			<div class='actions'>
				<?php echo $ACTIONBARMODULE; ?>
				<?php echo $ACTIONBARPAGE; ?>	
				
			</div>
		</div>


		<div class="wrapper mdl-layout mdl-js-layout">
			<!-- <header class="mdl-layout__header mdl-layout__headertransparent">-->
			<!--<div class="mdl-layout__header-row"> -->
			<!-- Title 
			     <span class="mdl-layout-title">Home</span>-->
			<!-- Add spacer, to align navigation to the right -->
			<!--<div class="mdl-layout-spacer"></div>-->
			<!-- Navigation 
			     <nav class="mdl-navigation">
			     <a class="mdl-navigation__link" href="">Link</a>
			     <a class="mdl-navigation__link" href="">Link</a>
			     <a class="mdl-navigation__link" href="">Link</a>
			     <a class="mdl-navigation__link" href="">Link</a>
			     </nav>
			   -->
			<!--</div>-->
			<!--</header>-->
			
			<div class="mdl-layout__drawer" style="font-family: Cabin;">
				<span class="mdl-layout-title" style="font-family: Cabin;"><a href="https://www.pragyan.org/16/home/"><img src="<?php echo $TEMPLATEBROWSERPATH; ?>/img/logo.png" alt="" id="sidelogo"></a></span>
				<nav class="mdl-navigation">
			
					<!-- <a class="mdl-navigation__link" href=""></a> -->
				</nav>
			</div>
			<main class="x-overflow mdl-layout__content" id="main">

				
				<?php echo $CONTENT;?>
				
			


				</div>
				
			</main>
		</div>
		<script type="text/javascript">
		inner();
		</script>
	</body>
</html>
