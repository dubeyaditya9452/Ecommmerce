let homes = document.querySelector('.home');
let card = document.querySelector('.shop');
let blogs = document.querySelector('.blog');
function shop(){
    homes.style.display = "none";
    blogs.style.display = "none";
    card.style.display = "block";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='none';

}

function blog(){
    homes.style.display = "none";
    card.style.display = "none";
    blogs.style.display = "block";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='none';
    

}

function home(){
    homes.style.display = "block";
    card.style.display = "block";
    blogs.style.display = "block";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='none';


}
let aboutus = document.querySelector('.about');
 function About(){
    homes.style.display = "none";
    blogs.style.display = "none";
    card.style.display = "none";
    aboutus.style.display ="block";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='none';


 }
 let contactus = document.querySelector('.contact');
  function Contact(){
    homes.style.display = "none";
    card.style.display = "none";
    blogs.style.display = "none";
    aboutus.style.display ="none";
    contactus.style.display ="block";
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='none';

  }

  function show(img){
    let newImg  = document.getElementById('newImg');
    console.log(img);
    newImg.src= img.src;
    homes.style.display = "none";
    card.style.display = "none";
    blogs.style.display = "none";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="flex";
    Order.style.display ='none';
  }
  function Add(){
    alert("Added To Cart");
    location.reload();
  }
  function  Back(){
    location.reload();
  }
  let Order = document.querySelector('.order');
  function buy(){
    document.querySelector('.crd').style.display ="none";
    Order.style.display ='block';
  }


  const  nav =document.querySelector('nav');
  const navOffset= nav.offsetTop;


    function toggleSticky() {
        if (window.pageYOffset >= navOffset) {
          nav.classList.add('sticky');
        } else {
          nav.classList.remove('sticky');
        }
      }
window.addEventListener('scroll', toggleSticky);

function scrollToTop(){
  window.scrollTo({
   top:0,
   behavior:"smooth"
  });
}

window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("#scroll-to-top-btn");
  if (window.scrollY >= 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}; 