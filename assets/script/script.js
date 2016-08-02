divArray=new Array();
speedArray=new Array();
var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var run=0;
var heroDiv = document.getElementById("hero-block");
var jump=0;
var dinocounter=1;
var dummyscroll1=0;
var dummyscroll2=0;
var jumpdivs=[];
tcontact=0;
var page1;
var obstaclestartindex=-1;
var obstacleendindex=-1;
var heroforward=0;
var contactHorizontalDistance;
var lengthDiv=document.getElementById("layer-4");
var page2;
var heroRightEdge;
var heroLeftEdge;
var error=0;
var dummyscroll=0;
var fixedposition;
screenspeed=0.6
var touchStartX=0;
var jumpon=0;
var dinoRightEdge;
var selectedObstacle;
var dinoLeftEdge;
var dino=document.getElementById('dino-block');
var dinorun=0;
var herocounter=1;
mgate1=1;
var obstacles=new Array();
var currentobstacles=new Array();
var sandi=0;
mgate2=1;
var h=80;
var heroInterval;
var touchCurrentX = 0;
var slider=0;
var contactDiv=document.getElementById('contact');
var contactGround=document.getElementById('ground11');
var dinoInterval;
var canScrollOrSwipe;
var dinoground1=document.getElementById('ground1');
disableScrollOrSwipe();
 clearInterval(heroInterval);
  clearInterval(dinoInterval);
 var grounddiv = document.getElementById("groundlow");
 var anim=0;
var deltaPageVerticalPosition = 0;
var containerDiv=document.getElementById('container');
	var pageDiv=document.getElementById('page');



if (!window.requestAnimationFrame) {

    window.requestAnimationFrame = (function() {

        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
        window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

                window.setTimeout(callback, 1000 / 60);

        };

    })();

}


function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    var timers= {};

    // When key is pressed and we don't already think it's pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
            checkcounter();
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};



KeyboardController({
	37 : function(){
		RightandLeftedge()
		if(checkobstacle(-1,0)==1)
			{heroback();
			checkfall();
			MoveHeroBack();}
	},
	
	39 : function(){
		RightandLeftedge()
		if(checkobstacle(1,0)==1)
			{herofront();
			checkfall();
			MoveHeroFront();}
	},
	
	32: function(){
		RightandLeftedge()
	herojump();
	
	}},1);



	function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}
function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}

function loadingout()
{

	$("#farcloud").removeClass();
	$("#nearcloud").removeClass();
	$("#flight").removeClass();
	$("#farcloud").addClass("skyfall");
	$("#nearcloud").addClass("skyfall");
	$("#fallline").css({"display":"block"});
	$("#pandafall").css({"display":"block"});
	$("#flight").css({"background-position":"0px -408.56px"});
	//$("#container").show();
	//$("#container").css({"top":"100%"});
	$("#farcloud").appendTo(".sky1");
	$("#nearcloud").appendTo(".sky1");
	$("#sun").appendTo(".sky1");
	$("#flight").stop().animate({top:"-500px"},1500,function(){});
	setTimeout(function(){
		
		
		
			
		$("#farcloud").removeClass();
		$("#nearcloud").removeClass();	
		$("#farcloud").addClass("loading2");
		$("#nearcloud").addClass("loading1");
		$("#pandafall").css({"margin-top":"-70px"});
		$("#fallline").fadeOut();
		//$("#loading").hide();
			$("#pandafall").removeClass();
			$("#pandafall").addClass("fallground");
			$(".layer").addClass("groundup");
			setTimeout(function(){
				$("#hero-block").show();
			},540);
			pageVerticalPosition=0;
previousPageVerticalPosition=0;
	CreateDivs();
	setPageHeight();
	
	dinorun=0;
	run=1;
	//orientContact();
	RightandLeftedge();
	
makePageScrollable();
addObstacles();
selectedObstacle=$(obstacles[0]);
for(i=0;i<obstacles.length;i++)
currentobstacles.push($(obstacles[i]));

		setElementProperties();


	
		
	},2000);
}


var scrollkeys = {33: 1,34: 1,35: 1,36: 1,38: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (scrollkeys[e.keyCode]) {
    	detectPageVerticalPosition();
    	if(deltaPageVerticalPosition>0)
	{
		if(checkobstacle(speedArray[6]*deltaPageVerticalPosition,0)==0)
			
		   preventDefault(e);
        //alert('hi');
        return false;
	}
	else
	{
		if(checkobstacle(speedArray[6]*deltaPageVerticalPosition,0)==0)
			
		   preventDefault(e);
        //alert('hi');
        return false;
	}
        console.log("alli");
        return true;
    }
    else
    {
    	enableScroll();
    	KeyboardController({
	37 : function(){
		RightandLeftedge()
		if(checkobstacle(-1,0)==1)
			{heroback();
			checkfall();
			MoveHeroBack();}
	},
	
	39 : function(){
		RightandLeftedge()
		if(checkobstacle(1,0)==1)
			{herofront();
			checkfall();
			}
			MoveHeroFront();
	},
	
	32: function(){
		RightandLeftedge()
	herojump();
	
	}},1);

    	return true;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


window.onload = function()
{
	$(".layer").css({"top":"100%"});
	setTimeout(function(){
		loadingout();
		
	},500);
	if (deviceName != "computer")
	{
		initTouchEvents();
	}

pageVerticalPosition=0;
previousPageVerticalPosition=0;
	CreateDivs();
	setPageHeight();
	
	dinorun=0;
	run=1;
	//orientContact();
	RightandLeftedge();
	
makePageScrollable();
addObstacles();
selectedObstacle=$(obstacles[0]);
for(i=0;i<obstacles.length;i++)
currentobstacles.push($(obstacles[i]));
window.scrollTo(0, 0);
setElementProperties();




}
function checkcounter()
{
	if(heroforward==0)
	{
		if(herocounter>1)
		{
			$("#hero").removeClass();
			$("#hero").addClass("fhero1");
			herocounter=1;
			dummyscroll1=0;
		}
	}
	else
	{
		if(herocounter>1)
		{
			$("#hero").removeClass();
			$("#hero").addClass("bhero1");
			herocounter=1;
			dummyscroll2=0;
		}
	}

}

function setElementProperties()
{
	$(".castle").css({"width":0.485*$(document).width()+"px","left":0.5*$(document).width()+"px"});
	$(".chinawall").css({"width":1.971*$(".chinawall").height()+"px","left":0.1*$(document).width()+"px"});
	$(".abovegrass").css({"width":2.731*$(".chinawall").height()+"px","left":0*$(document).width()+"px"});
	$(".towergrass").css({"width":2.045*$(".towergrass").height()+"px","left":($(document).width()-0.8*2.045*$(".towergrass").height())+"px"});
	$(".rivergrass").css({"width":7.18*$(".towergrass").height()+"px","left":0+"px"});
	$(".river1").css({"width":12.03*$(".river1").height()+"px","left":($(document).width()-12.03*$(".river1").height())+"px"});
	$(".river2").css({"width":24.5*$(".river2").height()+"px","left":($(document).width()-24.5*$(".river2").height())+"px"});
	$(".store").css({"width":1.704*$(".store").height()+"px","left":($(document).width()*0.4-1.704*$(".store").height())+"px"});
	$(".tower").css({"width":0.926*$(".tower").height()+"px","left":($(document).width()-0.8*0.926*$(".tower").height())+"px"});
}

function RightandLeftedge()
{
	var x = $(".hero-block").offset().left+1+100/2;
	var y=$(".hero-block").offset().left+1+100/2
	heroLeftEdge = Math.floor($(".hero-block").offset().left+1+100/2);
	heroRightEdge = Math.ceil($(".hero-block").offset().left+100/2+100);
}
window.onscroll = function (e)
{
	
	var temp=1;

	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		if(dummyscroll==0)
		detectPageVerticalPosition();
		
		if(deltaPageVerticalPosition>0)
	{
		if(checkobstacle(speedArray[6]*deltaPageVerticalPosition,0)==0)
		{
			window.scrollTo(0, pageYOffset-speedArray[6]*deltaPageVerticalPosition);
			temp=0;
			//disableScroll();
		
		}
		else
			dummyscroll=0;
		console.log("temp:"+temp);
		if(temp==1 && dummyscroll==0)
		{
		AllFunctions();
		}
		if(temp==0)
		{
			if(fixedposition==-1)
				fixedposition=previousPageVerticalPosition;
			pageVerticalPosition=fixedposition;
			previousPageVerticalPosition=fixedposition - deltaPageVerticalPosition;

		}
	}
	else if(deltaPageVerticalPosition<0)
	{
		if(checkobstacle(speedArray[6]*deltaPageVerticalPosition,0)==0)
			{window.scrollTo(0, pageYOffset-speedArray[6]*deltaPageVerticalPosition);
				temp=0;
		}
		else
			dummyscroll=0;
		console.log("temp:"+temp);
		if(temp==1)
		AllFunctions();
	if(temp==0)
	{
			if(fixedposition==-1)
				fixedposition=previousPageVerticalPosition;
			pageVerticalPosition=fixedposition;
			previousPageVerticalPosition=fixedposition - deltaPageVerticalPosition;
	}
	}
	
	
		
	
		
	}
	
	
	
	//console.log(error);
}
function AllFunctions()
{
	
	
	//console.log(error);
	if(anim==0 && error==0)
	{

	moveLayers();
	checkfall();
	//animateHero();
	//selectObstacles();

}
	//transitions();
	
}
function animateHero()
{
	if(run==1 && jump==0)
	{
		
	 
	heroInterval=setInterval(function(){MoveHero()},200);
	run=0;
	 
}
}
function MoveHeroBack()
{

	heroforward=0;
	var pos=0;
	
		if(herocounter<12)
		{
			dummyscroll1++;
			if(dummyscroll1%13==0)
		{
			herocounter++;
			dummyscroll1=0;
		}

		}
		else
			{
				herocounter=1;
				
			}
			/*if(herocounter==1 || herocounter==2)
				page1=pageVerticalPosition;
			if(herocounter==4 || herocounter==3)
				page2=pageVerticalPosition;*/
	//console.log(herocounter);
	
	$("#hero").removeClass();

	$("#hero").addClass("fhero"+herocounter);
	

}
function MoveHeroFront()
{

		heroforward=1;
		var pos=0;
	
		if(herocounter<12)
		{
			dummyscroll2++;
			if(dummyscroll2%13==0)
		{
			herocounter++;
			dummyscroll2=0;
		}

		}
		else
			{
				herocounter=1;
				
			}
			/*if(herocounter==1 || herocounter==2)
				page1=pageVerticalPosition;
			if(herocounter==4 || herocounter==3)
				page2=pageVerticalPosition;*/
	//console.log(herocounter);
	
	$("#hero").removeClass();

	$("#hero").addClass("bhero"+herocounter);
}
function addObstacles()
{
	var len = $(".obstacles").length;
	for(i=0;i<len;i++)
		obstacles.push($(".obstacles")[i]);

}
function selectObstacles()
{
	var endobstacle;
	var startobstacle;
	if(obstacleendindex<0 && obstaclestartindex<0)
	{
		currentobstacles.push($(obstacles[0]));
		obstaclestartindex=0;
		obstacleendindex=0;
	}
	
	if(deltaPageVerticalPosition>0)
	{
		endobstacle=$(obstacles[obstacleendindex+1]);
		startobstacle=$(obstacles[obstaclestartindex]);

		if(obstacleendindex<obstacles.length-1)
		if((endobstacle.offset().left+endobstacle.width())>0 && endobstacle.offset().left<$("#container").width())
		{
			currentobstacles.push(endobstacle);
			obstacleendindex++;
			if(obstaclestartindex<0)
				obstaclestartindex=0;
		}
		
		if(obstaclestartindex>=0)
		if(startobstacle.offset().left+startobstacle.width()<0)
		{
			currentobstacles.shift();
			obstaclestartindex++;
		}
		console.log(currentobstacles);
	}
	else if(deltaPageVerticalPosition<0)
	{
		endobstacle=$(obstacles[obstacleendindex+1]);
		startobstacle=$(obstacles[obstaclestartindex-1]);
		if(obstaclestartindex>0)
		if((startobstacle.offset().left+startobstacle.width())>0 && startobstacle.offset().left<$("#container").width())
		{
			currentobstacles.unshift(startobstacle);
			obstaclestartindex--;
		}


		if(obstacleendindex<obstacles.length-1 && obstacleendindex>0)
		if(endobstacle.offset().left+endobstacle.width()>$("#container").width())
		{
			currentobstacles.pop();
			obstacleendindex--;
		}
	}
}
function transitions()
{
	if ( (pageVerticalPosition+10 > 1600))
	$("body").stop().animate({backgroundColor: ["#ff0000", 'easeInCubic']}, 90, function() {});
}
function makePageScrollable()
{
	
	enableScrollOrSwipe();
}

function CreateDivs()
{
	var divs=document.getElementsByClassName('layer');
	for(i=0;i<divs.length;i++)
	{
		divArray.push(divs[i]);
	}
	while (speedArray.length > 0)
	{
    	speedArray.pop();
  	}
	
	
	//fill array
	for (var i=0; i<divArray.length; i++)
	{
		var layerHorizontalSpeed= (divArray[i].offsetWidth - containerDiv.offsetWidth) / (divArray[divArray.length - 1].offsetWidth - containerDiv.offsetWidth);
		speedArray.push(layerHorizontalSpeed);
	}
}

function setPageHeight()
{
	
	pageDiv.style.height = (1+screenspeed)*(divArray[divArray.length - 1].offsetWidth - containerDiv.offsetWidth) +"px";
}
function moveLayers()
{
	for (var i=0; i<divArray.length; i++)
		{
			divArray[i].style.left = (-1 * speedArray[i] * pageVerticalPosition) + "px";
		}
}
function handleStart(e)
{
	//disable preventDefault() on touchstart so url will still be clickable
	//e.preventDefault();
	
	touchStartX = e.targetTouches[0].pageX;
	pageVerticalPositionOnTouch = pageVerticalPosition;
}

function handleMove(e)
{
	e.preventDefault();
	touchCurrentX = e.targetTouches[0].pageX;
	
	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		AllFunctions();
	}
}

function handleEnd(e)
{
	e.preventDefault();
	touchEndX = e.changedTouches[0].pageX;
}

function detectPageVerticalPosition()
{
	previousPageVerticalPosition = pageVerticalPosition;
	
	if (deviceName == "computer")
	{	
		if (browserName == "internet explorer")
		{
			pageVerticalPosition = document.documentElement.scrollTop;
		}
		else
		{
			pageVerticalPosition = screenspeed*pageYOffset;
		}
	}
	else //mobile
	{
		pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX);
	
		if (pageVerticalPosition < 0)
		{
			pageVerticalPosition = 0;
		}
		if (pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight)
		{
			pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight;
		}
	}
	
	deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
	
}
function heroback()
{
	if($(heroDiv).offset().left>-46)
	$(heroDiv).css({'left':(heroDiv.offsetLeft+100-1)});
}
function herofront()
{
	if($(heroDiv).offset().left+$(heroDiv).width()+50<$("#container").width())
	$(heroDiv).css({'left':(heroDiv.offsetLeft+100+1)});
}
function herojump()
{
	

	if(anim==0)
	{
		
		
	jumpup();
}
         
}
function jumpup()
{
	jumpon=1;
	var x,up;	
	anim1=requestAnimationFrame(jumpup);
	if(anim==0)
		sandi=parseInt($(".hero-block").css('bottom'),10);
	anim++;
	//console.log(anim);
	if(deltaPageVerticalPosition>0)
		x=1;
	else
		x=-1;
	var height=$(".hero-block").height();
	var herotop=$("#container").height()-parseInt($(".hero-block").css('bottom'),10)-height;
	if(anim<42)
		up=1;
	else
		up=0;
	if(anim<=h)
	{
		console.log(parseInt($(".hero-block").css('bottom'),10));
		RightandLeftedge();

		if(checkobstacle(x,Number(sandi) + (-0.1 * anim * (anim - h)) -parseInt($(".hero-block").css('bottom'),10)+2 )==0)
		{
			if(up==0 && (herotop+height)>(selectedObstacle.offset().top-pageYOffset) && heroRightEdge+1 > selectedObstacle.offset().left )
			{

				console.log((herotop+height)+","+(selectedObstacle.offset().top-pageYOffset));
				$(heroDiv).css({'bottom': $("#container").height()-selectedObstacle.offset().top+pageYOffset+1 + 'px'});		
				cancelAnimationFrame(anim1);
				sandi=parseInt($(".hero-block").css('bottom'),10);
				anim=0;
			}
			else if(up==1 && (herotop)>(selectedObstacle.offset().top-pageYOffset+selectedObstacle.height()))
			{
				console.log($(".hero-block").css('bottom')+" , "+($("#container").height()-selectedObstacle.offset().top+pageYOffset));
				anim=h-anim;
				$(heroDiv).css({'bottom': Number(sandi) + (-0.1 * anim * (anim - h)) + 'px'});
			}
			else
			{
				$(heroDiv).css({'bottom': Number(sandi) + (-0.1 * anim * (anim - h)) + 'px'});
			}
			jumpon=0;
		
		}
		else
    	$(heroDiv).css({'bottom': Number(sandi) + (-0.1 * anim * (anim - h)) + 'px'});

	}
      else
    {
    	jumpon=0;
    	cancelAnimationFrame(anim1);
    	sandi=parseInt($(".hero-block").css('bottom'),10);
    	anim=0;
    	checkfall();
    }   
             	
}
function checkobstacle(x,y)
{
	var pests=[];
 		pests.push($(".obstacles"));
 	var error=1;
 		//pests.push($(".cod"));
 		var height=$(".hero-block").height();
 	var width=$(".hero-block").width();
 	var hero=$(".hero-block").offset();
 	console.log();
 	var herotop=$("#container").height()-parseInt($(".hero-block").css('bottom'),10)-height;
 	for(i=0;i<currentobstacles.length;i++)
	if (!((heroLeftEdge+x > $(currentobstacles[i]).offset().left + $(currentobstacles[i]).width()) || (heroRightEdge+x < $(currentobstacles[i]).offset().left) || herotop-y > $(currentobstacles[i]).offset().top + $(currentobstacles[i]).height()-pageYOffset || herotop + height-y < $(currentobstacles[i]).offset().top-pageYOffset ))
 		{
 			error=0;
 			selectedObstacle=currentobstacles[i];
 			break;
 		}
 		return error;

}
function topobstaclecheck()
{
	var height=$(".hero-block").height();
	var herotop=$("#container").height()-parseInt($(".hero-block").css('bottom'),10)-height;
	if((herotop+height)<(selectedObstacle.offset().top-pageYOffset)  &&   ((heroLeftEdge > selectedObstacle.offset().left + selectedObstacle.width()) || (heroRightEdge < selectedObstacle.offset().left)) && jumpon==0)
		return 1;
	else
		return 0;

}

function checkfall()
{
	var x;
	var top=topobstaclecheck();
	var height=$(".hero-block").height();
	var herotop=$("#container").height()-parseInt($(".hero-block").css('bottom'),10)-height;
	if(deltaPageVerticalPosition>0)
		x=1;
	else
		x=-1;
	
	if(top==1 && sandi!=33)
	{
		
		anim=66;
		sandi=33;
		jumpup();
	}
}