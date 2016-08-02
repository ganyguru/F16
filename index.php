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
	<title>Festember 2015</title>
	<link rel="stylesheet" type="text/css" href="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/css/style.css">
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/detect-browser-device.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery.js"></script>
	<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/jquery-ui.min.js"></script>
</head>
<body>
<script type="text/javascript">
	

	

</script>
<!--- Invisible page with height equivalent to width for scrolling -->

<div id="page" ></div>

<!--- Fixed Container to have all the elements-->
<div class="hero-block  down" id="hero-block" style="display:none">
			<div class="hero fhero1" id="hero">
			</div>
</div>
<div id="container" >
<div id="loading" >
<div id="sun"></div>
<div id="farcloud" class="loading2"></div>
<div id="pandafall" class="pandafall" style="display:none"></div>
<div id="flight" class="flightmove"></div>
<div id="nearcloud" class="loading1"></div>
<div id="fallline" class="skyfall2" style="display:none"></div>

</div>
<div class="sky1"></div>
<div class="sky2"></div>
		<div id="layer-1" class="layer">
		
		<div class="castle"></div>
	</div>
	<div id="layer-2" class="layer">
		
		
	
	</div>
	<div id="layer-3" class="layer">		
	
	<div class="chinawall"></div>
	
	</div>
	<div id="layer-5" class="layer">
		<div id="mountain-1"></div>
		
	</div>
	<div id="layer-7" class="layer">
	<div class="tower"></div>
	<div class="river1 river1move">
			
		</div>
		<div class="river2 river2move">
			
		</div>
	<div class="abovegrass"></div>
	<div class="store"></div>
	<div class="towergrass"></div>
	<div class="rivergrass"></div>
	<div class="black"></div>
		
	
		<div id="ground">
			<div class="ground1"></div>
		</div>
		
	</div>
	<div id="layer-6" class="layer">
		<div id="mountain-2"></div>
		
	</div>
	
	<div id="layer-4" class="layer">

<div class="obstacles obs1"></div>
<div class="obstacles obs2"></div>
<div class="obstacles obs3"></div>
<div class="obstacles obs4"></div>

<div class="obstacles obs5"></div>
<div class="obstacles obs6"></div>
<div class="obstacles obs7"></div>
		


	</div>

</div>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/script.js"></script>

</body>
</html>
