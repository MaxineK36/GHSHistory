console.log("10:46 version")


// Create a reference with an initial file path and name
var storage = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI

// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

hideCategories();

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var iconImgHeight //setting up icon image size variable

//getting all the lists of HTML elements in different classes
var categoryTitles = document.getElementsByClassName("categoryTitle")
var iconImages = document.getElementsByClassName("iconImg");
var iconTexts = document.getElementsByClassName("iconText");
var iconImgDivs = document.getElementsByClassName("iconImgDiv");
var categoryTotals = document.getElementsByClassName("categoryTotal")

//when the document is ready, set up sizing, call the assign classes function, and hide everything that needs to be hidden
$(document).ready(function() {
    resizeEverthing();
    assignClasses();
    hideCategories();
    testFunction();
    
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
	var URL = storageRef.child('2017/academics.jpg').getDownloadURL()
	alert(URL)
	document.getElementById("iconImg1").innerHTML = "<img src="+URL+">"
	//assign classes to iconTexts
	for (var i = 0; i < iconTexts.length; i++) {
		$(iconTexts[i]).addClass("w3-display-hover w3-display-middle w3-black")
	}
	//assign classes to image divs
	for (var i = 0; i < iconImgDivs.length; i++) {
		$(iconImgDivs[i]).addClass("w3-display-container")
	}

	//display thing
	for (var i = 0; i < categoryTotals.length; i++) {
		var body = document.createElement('div')
		$(body).addClass("w3-display-container categoryBody")
		var rightArrow = document.createElement("div") 
		var leftArrow = document.createElement("div") 
		rightArrow.innerHTML = "next era &#9658"
		leftArrow.innerHTML = "&#9668 previous era"
		$(rightArrow).addClass("w3-display-right arrow rightArrow w3-hover-text-blue")
		$(leftArrow).addClass("w3-display-left arrow leftArrow w3-hover-text-blue")
		$(rightArrow).click(function() {
		     nextEra();
		})
		$(leftArrow).click(function() {
		     previousEra();
		})
		body.appendChild(rightArrow)
		body.appendChild(leftArrow)
		categoryTotals[i].appendChild(body)		

	}
}

function testFunction(){
	// alert('hi')
}
function nextEra(){
	console.log('next')
}

function previousEra(){
	console.log('previous')
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
	for (var i = 0; i < categoryTotals.length; i++) {
		$(categoryTotals[i]).hide();
	}
	$(".iconImgDiv").show();
}

function hideCategories(){
	var categoryTotals = document.getElementsByClassName("categoryTotal")
	for (var i = 0; i < categoryTotals.length; i++) {
		$(categoryTotals[i]).hide();
	}
}

