divArray=new Array();
speedArray=new Array();
var pageVerticalPosition = 0;
var pageVerticalPositionOnTouch = 0;
var previousPageVerticalPosition = 0;
var run=0;
var heroDiv = document.getElementById("hero-block");
var jump=0;
var dinocounter=1;
var jumpdivs=[];
tcontact=0;
var page1;
var contactHorizontalDistance;
var lengthDiv=document.getElementById("layer-4");
var page2;
var heroRightEdge;
var heroLeftEdge;
screenspeed=0.6
var touchStartX=0;
var dinoRightEdge;
var dinoLeftEdge;
var dino=document.getElementById('dino-block');
var dinorun=0;
var herocounter=1;
mgate1=1;
var sandi=0;
mgate2=1;
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
			heroback();
	},
	
	39 : function(){
		herofront();
	},
	
	32: function(){
	herojump();
	
	}},25);



	function disableScrollOrSwipe()
{
	canScrollOrSwipe = false;
}
function enableScrollOrSwipe()
{
	canScrollOrSwipe = true;
}


window.onload = function()
{

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
window.scrollTo(0, 0);

}
function RightandLeftedge()
{
	var x = 40
	var y=50
	heroRightEdge = 0.5 * (containerDiv.offsetWidth + heroDiv.offsetWidth) -x;
	heroLeftEdge = 0.5 * (containerDiv.offsetWidth - heroDiv.offsetWidth) + y;
}
window.onscroll = function (e)
{

	if (canScrollOrSwipe == true) //to avoid user swipe when window is still resizing after screen orientation changed on table
	{
		detectPageVerticalPosition();
		AllFunctions();
		
	}
	
	
	
}
function AllFunctions()
{
	
	moveLayers();
	
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
	if($(heroDiv).offset().left>-61)
	$(heroDiv).css({'left':(heroDiv.offsetLeft+125-4)});
}
function herofront()
{
	$(heroDiv).css({'left':(heroDiv.offsetLeft+125+4)});
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
	
	anim1=requestAnimationFrame(jumpup);
	if(anim==0)
		sandi=parseInt($(".hero-block").css('bottom'),10);
	anim++;
	console.log(sandi);
	if(anim<=100)
    $(heroDiv).css({'bottom': Number(sandi) + (-0.08 * anim * (anim - 100)) + 'px'});
      else
    {
    	cancelAnimationFrame(anim1);
    	sandi=parseInt($(".hero-block").css('bottom'),10);
    anim=0;
    }   
             	
}
function jumpdown()
{

}