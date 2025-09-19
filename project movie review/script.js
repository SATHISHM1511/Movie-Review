// sidemenu bar//

const menuIcon = document.getElementById("menu").addEventListener("click",function(){
    const sideMenu =document.querySelector(".menubar-side");
    if(sideMenu.style.marginTop==='-1300px'){
        sideMenu.style.margin="0px";
        sideMenu.style.opacity="1";
        sideMenu.style.display="block"
        
    }
    else{
        sideMenu.style.marginTop="-1300px"
        
    }
    
  
    
});

const movieCard =document.querySelector(".moviecard");

    movieCard.addEventListener("click",function(){

         location.href="C:/Users/ELCOT/Desktop/project movie review/movierevie.html"
    },false)