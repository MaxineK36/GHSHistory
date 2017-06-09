hideCategories();
console.log("10:36 version")

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
	var URL = storageRef.child('images/stars.jpg').getDownloadURL()
	alert(URL)
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
		// body.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sapien vel lorem bibendum, in lobortis augue egestas. Donec et porta erat. Nunc dictum ipsum ut dapibus semper. Proin euismod lacus nec massa blandit vehicula. Duis turpis velit, sodales ut mauris et, sollicitudin rhoncus nisi. Pellentesque sed luctus ante. Mauris ut vehicula nunc, sed lobortis magna. Cras cursus vitae lacus vel interdum. Donec urna quam, scelerisque ac aliquam id, aliquam ut mi. Curabitur lacinia ultrices nunc, eget venenatis nunc rutrum non. Cras facilisis vel quam non pellentesque. In justo elit, tempus tempus sem in, euismod viverra purus. Vestibulum eros neque, cursus eu enim sed, dignissim tempor ipsum. Mauris quis nibh non lacus dapibus euismod. Nunc libero lacus, pellentesque vitae nisl ut, malesuada rhoncus nunc. Phasellus sed turpis cursus, euismod ligula a, elementum neque. Donec vitae magna non risus porta finibus. Phasellus vestibulum vel diam id euismod. Cras non felis et felis viverra venenatis. Phasellus a vulputate neque, eu auctor lorem. Proin non urna vulputate ex condimentum auctor ut non erat. Mauris ornare lectus ut mattis mattis. Nam hendrerit pulvinar ligula in gravida. Donec orci nisi, luctus sit amet felis sagittis, maximus porta magna.Maecenas luctus sagittis orci id vehicula. Praesent nec condimentum mi, vitae consequat ligula. Quisque vehicula elementum massa, ut lobortis ex dignissim in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris id varius ipsum. Proin posuere placerat hendrerit. Sed efficitur dui interdum gravida mattis. Quisque cursus condimentum dapibus. Nullam nec purus eget massa convallis porttitor ut vitae purus. Etiam pulvinar commodo felis, in accumsan quam. Sed massa odio, consectetur nec iaculis vel, elementum sit amet enim. Sed placerat nisi urna, eu faucibus sapien pharetra ut. Duis magna nulla, fringilla venenatis metus at, dignissim volutpat quam. Suspendisse sed sem elementum, dapibus urna quis, cursus ante. Curabitur sapien magna, congue sed convallis nec, elementum eget orci.Fusce dictum nisl eget ex euismod ornare. Fusce eu faucibus lacus, id tempus risus. Sed sed rutrum odio, non iaculis purus. Maecenas at mi tempus, placerat metus eget, tristique nisi. Pellentesque sit amet est viverra, varius justo ac, egestas justo. Quisque sed sodales risus. Pellentesque sit amet dolor iaculis, elementum dolor non, tincidunt dolor. Integer sit amet molestie erat. Aenean mattis, neque at tempus porta, est massa mattis orci, eu congue lacus dolor sed arcu. Cras purus velit, consequat porttitor venenatis non, luctus vel purus. Nunc non ligula eget neque accumsan pulvinar ut id nibh. Nulla ut cursus enim, vel congue nisi. Aliquam congue, nibh nec maximus sagittis, odio tellus fringilla ipsum, eu interdum nunc enim id libero."
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

