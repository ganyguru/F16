/********* Inner Page ***********/
function inner()
{

  var breadcrumbs='';

  var contenttabs= $(".tabContent");
  for(i=0;i<contenttabs.length;i++)
  {
    $($(".tabContent")[i]).html("<div class='title'><p>"+  $("#main").find("h2")[0].innerHTML +" - "+$($(".tabItem")[i]).text()+"</p></div>"+"<div class='description'><p>"+$($(".tabContent")[i]).html()+"</p></div>");
  }
/*
  for(i=0;i<displayjson.length;i++)
  {
    var obj=JSON.parse(displayjson[i])
    breadcrumbs+='<li><a href="'+obj.url+'">'+obj.name+'</a></li>';     
  }
  $(".tabContent").append('<ul class="breadcrumb">'+breadcrumbs+'</ul>');
  $(".tabEnvelope").append('<div class="greycircle smallgrey contentgear" ><div class="bcrown brotate sbgear"></div><div class="crown srotate sgear"></div><div class="orangecircle"><div class="whitecircle"><div class="mainlink"> LECTURES </div></div></div></div>');
*/
  $($(".tabItem")[0]).parent().parent().addClass('clickedtabElement');
  $(".mainlink").text($("#main").find("h2")[0].innerHTML);
  $("#main").find("h2")[0].remove();
  $(".tabContent").hide();
  $(".tabContent")[0].style.display="inline-block";
  $($(".tabItem")[0]).addClass('tabitemactive');
  
  $("#tabList").append('<a href="https://www.pragyan.org/16/home/"><img src="'+templateBrowserPath+'/img/logo.png" alt="" id="innerlogo"></a>');
  $(".tabItem").click(function()
  {
    $('.tabElement').removeClass('clickedtabElement');
    $(".tabElement").removeClass("tabitemactive");
    $(".optiongear").remove();
    $(this).addClass("tabitemactive");
    
    $(this).parent().parent().addClass('clickedtabElement');
  });
  
  
}
