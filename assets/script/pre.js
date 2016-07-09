function hereDoc(f) {
    	  return f.toString().
    	      replace(/^[^\/]+\/\*!?/, '').
    	      replace(/\*\/[^\/]+$/, '');
    	}
		var afterClockHTML = hereDoc(function(){/*!
		*/
    	});
		var tennysonquote = afterClockHTML;
		function preloadAll(){
		    var preload = new createjs.LoadQueue(true);
		    preload.on("complete", handleComplete, this);
		    var loadarray=["boardevents.png","booth.png","ceiling.png","cem1.png","cloud2.png","cloud.png","CONTACTS.png","dinosaur.png","dinosprite.png","fountain1.png","fountain2.png","fountain3.png","fountain.png","GAMES.png","gate1.png","gate2.png","grass1.png","ground1.png","ground2.png","ground.png","HIGHLIGHTS.png","LIGHT.png","loading.png","logo.png","man.png","map.png","mountain1.png","mountain2.png","mus1.png","mus2.png","paintings2.png","paintings3.png","paintings.png","PROSHOWS.png","reception.png","red1.png","room11.png","scroll.png","sky1.png","sky2.png","slab.png","SPONSORS.png","sprite1.png","statue1.png","statue2.png","statue3.png","tree.png","wall1.png","wall2.png","wallbrown.png","wallgrey.png","wheel.png"];

		    for(i=0;i<loadarray.length;i++)
		    		preload.loadFile("image/"+loadarray[i]);
		   
		}
		function handleComplete(){
		
		setTimeout(
		function (){

		   
		 $('.preload').fadeOut(500);
		    	$('body').css('overflow','auto');
		   


		},1000);
}
