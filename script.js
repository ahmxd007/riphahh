var menu = document.querySelector(".ri-menu-line")
var close = document.querySelector(".ri-close-line")
var sumbitbtn = document.querySelector(".sumbit-btn")
var nameInput = document.querySelector("#user_name")
var emailInput = document.querySelector("#user_email")
var messageInput = document.querySelector("#Message")


const publicKey = "_VBmZlzHU59GA5Owk";
const serviceId = "sss";
const templateId = "sss";





var tl = gsap.timeline()


var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop:Infinity,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop:Infinity,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


tl.to("#animation",{
  right:"0%",
})

tl.pause()

menu.addEventListener("click", ()=>{
  tl.play()
})

close.addEventListener("click",()=>{
  tl.reverse()
})



function courseAnimation(){
  gsap.from(".page2 .line1 .block1",{
    x:-400,
    opacity:0,
    scrollTrigger:{
      triiger:".page2",
      scroller:"body",
      start:"3%",
      end:"0%",
      scrub:2
    }
  })
  
  gsap.from(".page2 .line1 .block2",{
    x:400,
    opacity:0,
    scrollTrigger:{
      triiger:".page2",
      scroller:"body",
      start:"3%",
      end:"0%",
      scrub:3
    }
  })
  
  gsap.from(".page2 .line2 .block1",{
    x:-400,
    opacity:0,
    scrollTrigger:{
      triiger:".page2",
      scroller:"body",
      start:"top -10%",
      end:"top -100%",
      scrub:2
    }
  })
  
  gsap.from(".page2 .line2 .block2",{
    x:400,
    opacity:0,
    scrollTrigger:{
      triiger:".page2",
      scroller:"body",
      start:"top -10%",
      end:"top -100%",
      scrub:2
    }
  })
}

function emailSending(){
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sumbitbtn.innerText = "Just a Moment"
    emailjs.init({
      publicKey: '_VBmZlzHU59GA5Owk',
    });
    emailjs.sendForm('service_y2wganr', 'template_gmvve85', this)
    .then(()=>{
      sumbitbtn.innerText = "Message Sent"
      messageInput.value = "";
      nameInput.value = "";
      emailInput.value = "";
    })
});
}


courseAnimation();
emailSending();
