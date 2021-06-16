

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "7px 0px 7px 10px";

  } else {
    document.getElementById("nav").style.padding = "17px 0px 17px 10px";

  }
}

function myFunction() {
  location.replace("https://docs.google.com/forms/d/e/1FAIpQLScF8b_Ya49GSUNiaOV0KGrkmsIz66ou0BqWnUSKW7M2gIOm7Q/viewform");
}


document.addEventListener("DOMContentLoaded", function( ) { 
    const sections = 
 [document.querySelector(".homeS"),
  document.querySelector(".aboutS"),
  document.querySelector(".contactS")];


  const navB =
 {homeS : document.querySelector("#aa"),
  aboutS : document.querySelector("#bb"),
  contactS : document.querySelector("#cc")};

const options={
	root: null,
	threshold : 0.6,
};

const observer = new IntersectionObserver(function(entries,observer)
{
 entries.forEach(entry =>{
 			if(entry.isIntersecting)
 			{     const nav = navB[entry.target.id];
                // add 'active' class on the navItem
						nav.classList.add("active");


 	             
 	           	        }


 });


},options);

sections.forEach(section => {
 observer.observe(section);
});




});

const sections = 
 [document.querySelector(".homeS"),
  document.querySelector(".aboutS"),
  document.querySelector(".contactS")];


  const navB =
 {homeS : document.querySelector("#aa"),
  aboutS : document.querySelector("#bb"),
  contactS : document.querySelector("#cc")};

const options={
	root: null,
	threshold : 0.5,
};

const observer = new IntersectionObserver(function(entries,observer)
{
 entries.forEach(entry =>{
 			if(entry.isIntersecting)
 			{     const nav = navB[entry.target.id];
                // add 'active' class on the navItem
						nav.classList.add("active");


		}

      Object.values(navB).forEach((item) => {
        if (item != navB) {
          item.classList.remove('active');
        }
      });

 });


},options);

sections.forEach(section => {
 observer.observe(section);
});

        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })

 