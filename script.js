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

}

function blog(){
    homes.style.display = "none";
    card.style.display = "none";
    blogs.style.display = "block";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";
    

}

function home(){
    homes.style.display = "block";
    card.style.display = "block";
    blogs.style.display = "block";
    aboutus.style.display ="none";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";


}
let aboutus = document.querySelector('.about');
 function About(){
    homes.style.display = "none";
    blogs.style.display = "none";
    card.style.display = "none";
    aboutus.style.display ="block";
    contactus.style.display ="none";
    document.querySelector('.crd').style.display ="none";

 }
 let contactus = document.querySelector('.contact');
  function Contact(){
    homes.style.display = "none";
    card.style.display = "none";
    blogs.style.display = "none";
    aboutus.style.display ="none";
    contactus.style.display ="block";
    document.querySelector('.crd').style.display ="none";
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
  }
  function Add(){
    alert("Added To Cart");
    location.reload();
  }
  function  Back(){
    location.reload();
  }