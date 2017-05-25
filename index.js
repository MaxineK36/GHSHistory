var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var iconImgHeight //setting up icon image size variable

//getting all the lists of HTML elements in different classes
var categoryTitles = document.getElementsByClassName("categoryTitle")
var iconImages = document.getElementsByClassName("iconImg");
var iconTexts = document.getElementsByClassName("iconText");
var iconImgDivs = document.getElementsByClassName("iconImgDiv");

//when the document is ready, set up sizing, call the assign classes function, and hide everything that needs to be hidden
$(document).ready(function() {
    resizeEverthing();
    assignClasses();
    for (var i = 0; i < categoryTitles.length; i++) {
		$(categoryTitles[i]).hide();
	}
});

//when the window size changes, adjust accordingly
$(window).resize(function(){
	resizeEverthing()
})

//when you hover over any part of the icon image div, make the image partially transparent (but not the whole div)
$(".iconImgDiv").hover(function(){
    $(this).find("img").css("opacity", "0.35");
    }, 
    function(){
    $(this).find("img").css("opacity", "1");
});

function assignClasses(){
	//assign classes to iconTexts
	for (var i = 0; i < iconTexts.length; i++) {
		$(iconTexts[i]).addClass("w3-display-hover w3-display-middle w3-black")
	}
	//assign classes to image divs
	for (var i = 0; i < iconImgDivs.length; i++) {
		$(iconImgDivs[i]).addClass("w3-display-container")
	}
}

function resizeEverthing(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;	

	var introHeight = parseFloat($("#intro").height())
	var topHeight = 95 + 40
	var iconImgHeight =  Math.round((windowHeight-introHeight-topHeight)*0.5)

	$("#sidebar").css("height", (2*iconImgHeight+introHeight));

	if (windowWidth>600){
		for (var i = 0; i < iconImages.length; i++) {
			
			console.log("i "+(iconImgHeight-tempIconImageHeight))
			iconImages[i].style.overflow = "hidden"
			iconImgDivs[i].style.height = iconImgHeight + "px"
			//if, when a=x, b>y, use width
			
			//set a=x, and adjust b accordingly
			iconImages[i].style.width = "100%"
			iconImages[i].style.height = "auto"

			//make the height variable into a number
			var tempIconImageHeight = parseFloat(iconImages[i].height)
			console.log("temp "+tempIconImageHeight)

			if (tempIconImageHeight>iconImgHeight){
				iconImages[i].style.width = "100%" 
		    	iconImages[i].style.height = "auto" 
		    	console.log(i)
			}

			else{
				iconImages[i].style.height = "100%"
				iconImages[i].style.width = "auto" 
			}
			// console.log("inner "+iconImages[i].height)
		}
	}
	else{
		for (var i = 0; i < iconImages.length; i++) {
			iconImgDivs[i].style.height = "auto"
		    iconImages[i].style.width = "100%"
		    iconImages[i].style.height = "auto"
		  }
	}
}

function openThing(category){
	$("#"+category).show();
	$(".iconImgDiv").hide();
}

function closeThing(){
	for (var i = 0; i < categoryTitles.length; i++) {
		$(categoryTitles[i]).hide();
	}
	$(".iconImgDiv").show();
}


