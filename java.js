const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);





function remove_button() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = "none";
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  }
}

function showContent() {
  const overlay = document.querySelector(".overlay");
  const content = document.querySelector(".content");
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    content.classList.add("show");
  }, 900); // Match this time with the overlay's opacity transition duration
}
window.addEventListener("click", () => {
  showContent();
});
setTimeout(() => {
  showContent(); // Call showContent function to transition to main content
}, 3000);
setTimeout(() => {
  document.getElementById("preLoader").style.opacity = "0";
  document.getElementById("preLoader").style.height = "0px";
  document.getElementById("preLoader").style.transition =
    "opacity 0.5s ease-out";
  document.getElementById("mainContent").style.display = "block";
}, 2000);


// Define the animations to run on page load





// Initial check

document.addEventListener('DOMContentLoaded', () => {
  // Add scroll animation
  const elements = document.querySelectorAll('.ani_moveUpF__ysTRJ');
  const scrollHandler = () => {
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              el.classList.add('visible');
          }
      });
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Initial check

  // Button animations
  const buttons = document.querySelectorAll('.button_wrap__9UfgY');
  buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', () => {
          button.style.transform = 'scale(1)';
      });
  });

  // Video interaction
  const video = document.querySelector('.courseHero_video__VJMW5 video');
  video.addEventListener('mouseenter', () => {
      video.play();
  });
  video.addEventListener('mouseleave', () => {
      video.pause();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const marqueeItems = document.querySelectorAll('.marquee-item');

  marqueeItems.forEach(item => {
    const video = item.querySelector('.marquee-video');
    let hoverTimeout;

    item.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        video.play(); // Play video after 2 seconds
      }, 500); // 2-second delay
    });

    item.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout); // Clear timeout if user leaves early
      video.pause(); // Pause video on mouse leave
      video.currentTime = 0; // Reset to the start
    });
  });
});



  




document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.content-container', {
    scrollTrigger: {
      trigger: '.content-container',
      start: 'top 30%', 
      toggleActions: 'play none none reverse'
    },
  color:"white",
  backgroundColor:"black",
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power1.out'
  });



  gsap.from('.title', {
    scrollTrigger: {
      trigger: '.title',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
  color:"white",
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power1.out'
  });


  gsap.from('.intro-title', {
    scrollTrigger: {
      trigger: '.intro-section',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power1.out'
  });
  gsap.from('.intro-text p', {
    scrollTrigger: {
      trigger: '.intro-section',
      start: 'top 80%', 
      toggleActions: 'play none none reverse'
    },
    color:"white",
    duration: 6,
    y: 600,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.marquee-item', {
    scrollTrigger: {
      trigger: '.marquee-section',
      start: 'top 40%', 
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
  });
  gsap.to('.main-image', {
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 80%', 
      toggleActions: 'play none none reverse'
    },
    duration: 1.5,


    scale: 1,
  
 
  
    opacity: 1,
    ease: 'power2.out'
  });
  gsap.from('.label', {
    scrollTrigger: {
      trigger: '.stat',
      start: 'top 50%', 
      toggleActions: 'play none none reverse'
    },
    color:"white",
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  gsap.from('.value', {
    scrollTrigger: {
      trigger: '.stat',
      start: 'top 50%', 
      toggleActions: 'play none none reverse'
    },
    color:"white",
    duration: 1,
    x: 1000,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  gsap.from('.label2', {
    scrollTrigger: {
      trigger: '.stat2',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    color:"white",
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.from('.value2', {
    scrollTrigger: {
      trigger: '.stat2',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    color:"white",
    duration: 2,
    x: -100,
    opacity: 0,
    stagger: 0.4,
    ease: 'power3.out'
  });

  gsap.to('.stat-value1', {
    scrollTrigger: {
      trigger: '.stat2',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    duration:2,
 textContent:12445,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.to('.stat-value2', {
    scrollTrigger: {
      trigger: '.stat2',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    delay:6,
    duration:3,
 textContent:300,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.to('.stat-value3', {
    scrollTrigger: {
      trigger: '.stat2',
      start: 'top 60%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    delay:7,
    duration:3,
 textContent:60,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.to('.stat-value4', {
    scrollTrigger: {
      trigger: '.stat',
      start: 'top 40%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    duration:3,
 textContent:1244,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.to('.stat-value5', {
    scrollTrigger: {
      trigger: '.stat',
      start: 'top 40%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    delay:6,
    duration:3,
 textContent:175,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
  gsap.to('.stat-value6', {
    scrollTrigger: {
      trigger: '.stat',
      start: 'top 40%', 
      toggleActions: 'play none none reverse'
    },
    color:"black",
    delay:7,
    duration:3,
 textContent:100,
    opacity: 1,
    stagger: 0.4,
    ease: 'power3.out'
  });
// Master Timeline with ScrollTrigger
const masterTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-container2",
    start: "top 20%",
    end: "bottom 10%",
    scrub: 1.5,
    pin: true,
    anticipatePin: 1,
  }
});

// Sequential Image Reveal Animation
const imageRevealDelay = 0.9; // Delay between each image reveal

masterTimeline.to(
  ".content-container2",
  
  {
backgroundColor: "transparent",
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: "power3.out",
  }
)
  .fromTo(
    ".image1 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    }
  )
  .fromTo(
    ".image2 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    `+=${imageRevealDelay}` // Sequential delay for the next image
  )
  .fromTo(
    ".image3 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    `+=${imageRevealDelay}`
  )
  .fromTo(
    ".image4 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    `+=${imageRevealDelay}`
  )
  .fromTo(
    ".image5 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    `+=${imageRevealDelay}`
  )
  .fromTo(
    ".image6 img",
    { y: "100%", opacity: 0, scale: 0.8 },
    {
      y: "0%",
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    `+=${imageRevealDelay}`
  );

// Dynamic Text Animation with Advanced Effects
gsap.fromTo(
  ".center-text h1",
  {
    y: -300,
    scale: 0.7,
    opacity: 0,
    rotationX: -60,
    skewY: -15,
    color: "#ffffff",
  },
  {
    scrollTrigger: {
      trigger: ".center-text",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
    y: 0,
    scale: 1,
    opacity: 1,
    rotationX: 0,
    skewY: 0,
    color: "#000000",
    duration: 4,
    ease: "expo.out",
  }
);

// Smooth Scroll Down Text Animation
gsap.from(".scroll-down", {
  scrollTrigger: {
    trigger: ".center-text",
    start: "center bottom",
    end: "bottom top",
    scrub: true,
    toggleActions: "restart none none none",
  },
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "bounce.out",
  stagger: 0.2,
  scale: 1.1,
});

// Parallax Effect with Multi-Directional Movement
gsap.to(".image-container2 img", {
  scrollTrigger: {
    trigger: ".content-container2",
    start: "top 20%",
    end: "bottom 50%",
    scrub: true,
  },
  scale: 1.1,
  y: "10%",
  x: "5%",
  ease: "none",
});

// Enhanced Perspective and 3D Layering
gsap.fromTo(
  ".image-container2 img",
  { transformPerspective: 1200, rotationY: 0 },
  {
    scrollTrigger: {
      trigger: ".content-container2",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    rotationY: 15,
    scale: 1.1,
    ease: "none",
  }
);


const thre4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#services-section",
    start: "top 0%",
    end: "bottom 0%",
    scrub: 1.5,
    pin: true,
    anticipatePin: 5,
  }
});

  thre4.to(".amg1", {
    y:"-100%", // Move the image up into the container
    opacity: 1, // Fade in the image
    duration: 1, // Duration of the animation
    ease: "power3.out", 
  });
  thre4.to(".amg2", {
    y:"-100%", // Move the image up into the container
    opacity: 1, // Fade in the image
    duration: 1, // Duration of the animation
    ease: "power3.out", 
  });
  thre4.to(".amg3", {
    y:"-100%", // Move the image up into the container
    opacity: 1, // Fade in the image
    duration: 1, // Duration of the animation
    ease: "power3.out", 
  });
  thre4.to(".amg4", {
    y:"-100%", // Move the image up into the container
    opacity: 1, // Fade in the image
    duration: 1, // Duration of the animation
    ease: "power3.out", 
  });
const threeD = gsap.timeline({
  scrollTrigger: {
    trigger: "#services-section",
    start: "top 20%",
    end: "bottom 0%",
    scrub: 1.5,
    pin: true,
    anticipatePin: 1,
  }
});

threeD.to(".heading", {
  duration: 1.5,

width:"302px",
  
  opacity:1
})
const thre3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#services-section",
    start: "top 30%",
    end: "bottom 0%",
    scrub: 2,
    pin: true,
    anticipatePin: 2,
  }
});
thre3.to(".subheading", {
  width:"315px",
opacity:1,
  top:"305px"

})

thre3.to(".container_100",{
  delay:1,
 top:"0rem",

  opacity:1,
  ease: "power3.out",
})


const amgslide= gsap.timeline({
  scrollTrigger: {
    trigger: ".i01f_grid",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 2,
pin: true,
    anticipatePin: 1,
  

  }
});
amgslide.to(".b8i6g_icon",{
  delay:4,
  top:"0px",
  duration:2,
  ease: "power3.out",
  transformOrigin:"center",
  opacity:1,
})
amgslide.to(".b8i6g_text",{
opacity:1,


ease:"power3.out",
duration:1,
})



})

// script.js




var mncicle = document.querySelectorAll(".mncircle");

function garyout(){
  gsap.to(mncicle,{
    opacity:.1,
    })
}



mncicle.forEach(function(cle,pn){

cle.addEventListener("click", function(){

  gsap.to("#circle-oi", {
    rotate: (3-(pn+1))*20,
   
    
  })
  gsap.to("#imgee", {
opacity:1,
  })
 
  garyout();
  gsap.to(this,{
    opacity:.7,
  })
})

})



// let re = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#Main-te",
//     start: "-50% 0%",
//     end: "100% 100%",
//     markers: true,
//     scrub: 2,
//   },
// });

// re.to("#circle-oi", {



//  rotate:-100,
    
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const modalClose = document.querySelector('.modal-close');
  const galleryIcons = document.querySelectorAll('.gallery-icon');
  const modalContents = document.querySelectorAll('.modal-content');
  const video = document.querySelector('.modal-video video');
  const videoSources = {
    'modal-content-1': 'https://theartofdocumentary.com/aod-home-hero-full-1080p.mp4',
    'modal-content-2': 'https://theartofdocumentary.com/aod-foundations-hero-1080p.mp4',
    'modal-content-3': 'https://theartofdocumentary.com/aod-create-and-earn-hero-1080p.mp4'
  };


  // Function to open the modal with animation and update video source
  const openModal = (contentId) => {
    modal.classList.remove('hide-modal');
    modal.style.display = 'block';
    modalWrapper.classList.remove('hide-modal');
    modalContents.forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'flex';

    // Change the video source
    const newSource = videoSources[contentId];
    video.querySelector('source').setAttribute('src', newSource);
    video.load();
video.muted =false;
     // Reload video with the new source

    modalWrapper.style.animation = 'slideDown 0.9s ease forwards, bounceIn 0.1s ease-out';
  };

  const stopVideo = () => {
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => video.pause());
  };

  // Function to close the modal with animation
  const closeModal = () => {
    stopVideo();

    modalWrapper.classList.add('hide-modal');
    modal.classList.add('hide-modal');
    setTimeout(() => {
      modal.style.display = 'none';
      modalWrapper.style.animation = '';
    }, 500);
  };

  // Event listener for each gallery icon
  galleryIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const targetContentId = icon.getAttribute('data-target');
      openModal(targetContentId);
    });
  });

  // Event listener for the close button
  modalClose.addEventListener('click', closeModal);

  // Event listener to close the modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
function hov() {
  // Define hover image sources for each image group
  const hoverSrcs = {
    '.itm1': "https://ichef.bbci.co.uk/news/976/cpsprodpb/62F2/production/_88803352_131014807486753326_bangladesh_mohammad_ponir_hossain_bangladesh_2nd-place_natioal-award_2016-sony-world-photography-awards.jpg",
    '.itm2': "https://a.scpr.org/i/a4c3dc38bac046417b847ed91bb0fd99/69698-full.jpg",
    '.itm3': "https://www.canadavisa.com/images/tv-and-film-canadavisa.jpg",
    '.itm5': "https://civeo.com/wp-content/uploads/2021/11/FilmIndustry2_4X3-1200x900.jpg"
  };

  // Select the div elements
  const divs = {
    '.itm1': document.querySelector(".itm1"),
    '.itm2': document.querySelector(".itm2"),
    '.itm3': document.querySelector(".itm3"),
    '.itm5': document.querySelector(".itm5")
  };

  Object.keys(divs).forEach(selector => {
    const div = divs[selector];
    const images = document.querySelectorAll(`${selector} img`);
    const originalSrcs = Array.from(images).map(img => img.src);
    const hoverSrc = hoverSrcs[selector];
    
    // Add event listener for mouseover to change images
    div.addEventListener("mouseover", () => {
      images.forEach(img => img.src = hoverSrc);
    });

    // Add event listener for mouseleave to revert images
    div.addEventListener("mouseleave", () => {
      images.forEach((img, index) => img.src = originalSrcs[index]);
    });
  });
}

// Call the function to activate the hover effect
hov();

let cursor = document.querySelector(".crusor09");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    scrollTrigger: {
      trigger: "#cardContainer",
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    textContent:"SCROLL",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    width: "60px",
    height: "60px",

})
gsap.to(cursor, {
  scrollTrigger: {
    trigger: "#cardContainer",
  end:"bottom 50%",
    toggleActions: 'play none none reverse'
  },
  textContent:"",
  color: "white",
  display: "",
  backgroundColor: "white",
  justifyContent: "",
  alignItems: "",
  fontSize: "0px",
width:"20px",
height:"20px",
})
  gsap.to(cursor, {
    left: e.pageX + "px",
    top: e.pageY + "px",
  });
});


let line = document.getElementsByClassName("line")

function linr(){
  gsap.to(line,{
    width: "100%",
    ease: "easeInOut",
    duration: 17,

  })
}
linr()

let imgee = document.querySelectorAll('#imgee img');


imgee.forEach(function (element ) { 
  
  element.addEventListener("mouseover", () => {

      
  gsap.to(cursor, {
    
    color:"white",
 backgroundColor:"black",
    scale: 4,
    width:"17px",
    height:"17px",
    borderRadius:"50%",
    whiteSpace: "nowrap",
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    fontSize:"16px",
    ease: "easeInOut",
    fontWeight:"100",
    duration:0.2,
    opacity: 1,
  })


})

element.addEventListener("mouseout", () => {

      
  gsap.to(cursor, {
    
    backgroundColor: " white",
    height: "20px",
    width: "20px",
 textContent: "scroll",
    scale: 1, 
    opacity: 1,
    ease: "easeInOut",
    duration:0.3,
     
  });
})

})


let text = document.querySelector(".text-default");
text.addEventListener("mousemove", () => {
  gsap.to(cursor, {
 
    scale: 6,
    backgroundColor: "#970000",
 
    opacity: 1,
  });
  gsap.to(text, {
    textContent: "Qaulity build the project @2024 ",
    color: "#070611",
    border: "none",
 
  });

  // Animate the text color and font size with GSAP
});

text.addEventListener("mouseout", () => {
  // Animate the cursor back to original state with GSAP
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: " rgb(221, 59, 0)",
 
    opacity: 1,
  });

  // Animate the text back to original color and size with GSAP
  gsap.to(text, {
    ease:"easeInOut",
    duration:2,
    paddinRight:12,
    textContent: "New Launch Outlet @ 2025",
    color: "white",
    border: " 1px solid gray",
  });
});
document.querySelector(".card").addEventListener("mousemove", () => {
    gsap.to(cursor, {
  textContent: "VIEW",
  scale: 5,
  backgroundColor: "#970000",
  borderColor: "none",
  opacity: 1,
    });
  });

Shery.imageEffect(".imag", {
  style: 5,
});
