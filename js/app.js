const projects = document.querySelectorAll('.project');

for(let i=0; i<projects.length; i++){
  let button = projects[i].querySelector('button');
  let para = projects[i].querySelector('p');
  
  button.addEventListener('click', function(){
    projects[i].classList.toggle('expanded');
    button.innerHTML = projects[i].classList.contains('expanded') ?
      'Hide Details' : 'Show Details';
 });
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides() 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

 //    var coll = document.getElementsByClassName("collapsible");
	// var i;

	// for (i = 0; i < coll.length; i++) 
	// {
 //  	coll[i].addEventListener("click", function() 
 //  	{
 //    this.classList.toggle("active");
 //    var content = this.nextElementSibling;
 //    if (content.style.display === "block") 
 //    	{
 //      content.style.display = "none";
 //    	} 
	// else 
	// 	{
 //      content.style.display = "block";
 //    	}
 //  	});
	// }
