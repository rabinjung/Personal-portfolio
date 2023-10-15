
  var typed = new Typed(".input",{
    strings: ['Mechanical Engineer',"Web Developer","Tech Enthusiast"],
    typeSpeed: 70,
    backSpeed:50,
    loop: true
  });
  
  let menuLi=document.querySelectorAll("header ul li a");
  let section = document.querySelectorAll("section")

  function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY+97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scroll",activeMenu);

  const header = document.querySelector("header");
  window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY>50)
  });

  //menu bar///
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  menuIcon.onclick =()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("menu-bar");
  }
 
  /*scroll up*/

  let calcScrollvalue =()=>{
    menuIcon.classList.remove("bx-x");
  navlist.classList.remove("menu-bar");  
    let scrollProgress = document.getElementById("progress");
    let progressvalue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    
    let calcHeight =
     document.documentElement.scrollHeight-document.documentElement.clientHeight;
     
    let scrollvalue = Math.round((pos*100)/ calcHeight);
    
    
    if(pos > 100){
      scrollProgress.style.display= "grid";
    }
    else{
      scrollProgress.style.display="none";
    }
    
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop =0;
    }); 
  };

  window.onscroll=calcScrollvalue;
  window.onload=calcScrollvalue;
  