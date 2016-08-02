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

<div class="container">
<div id="farcloud" class="loading2"></div>
<div id="nearcloud" class="loading1"></div>

</div>
<script type="text/javascript" src="<?php echo $TEMPLATEBROWSERPATH; ?>/assets/script/script.js"></script>

</body>
</html>
