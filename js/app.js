const intro = document.querySelector(".wrapper");
 var sound = new Audio("music/click.mp3");

 function playSound(){
    sound.play();
 }





window.addEventListener("load",(e)=>{
    setTimeout(()=>{
        intro.classList.add("display-none");
        

    },3000)
})