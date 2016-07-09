<?php
if(!defined('__PRAGYAN_CMS'))
{
        header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
        echo "<h1>403 Forbidden<h1><h4>You are not authorized to access the page.</h4>";
        echo '<hr/>'.$_SERVER['SERVER_SIGNATURE'];
        exit(1);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Festember 2016</title>
	<link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/style.css">
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/detect-browser-device.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery-ui.min.js"></script>
</head>
<body>
<script type="text/javascript">
	

	

</script>
<!--- Invisible page with height equivalent to width for scrolling -->

<div id="page"></div>

<!--- Fixed Container to have all the elements-->
<div class="hero-block  down" id="hero-block">
			<div class="hero fhero1" id="hero">
			</div>
</div>
<div id="container" onkeypress="alert('hi');" >

<div class="sky1"></div>
<div class="sky2"></div>
		<div id="layer-1" class="layer">
		<div id="cloud-1" class="cloud"></div>
		
	</div>
	<div id="layer-2" class="layer">
		
		<div id="cloud-2" class="cloud"></div>
	
	</div>
	<div id="layer-3" class="layer">
		
		<div id="cloud-3" class="cloud"></div>
	
	</div>
	<div id="layer-5" class="layer">
		<div id="mountain-1"></div>
		
	</div>
	<div id="layer-7" class="layer">
		<div id="tree"></div>
		
	</div>
	<div id="layer-6" class="layer">
		<div id="mountain-2"></div>
		
	</div>
	
	<div id="layer-4" class="layer">

		


	</div>

</div>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/script.js"></script>

</body>
</html>