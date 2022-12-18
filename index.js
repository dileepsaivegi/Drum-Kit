
for(i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick()
{
  var buttonInner=this.innerHTML;

  makeSound(buttonInner);
  activeAnimation(buttonInner);
}

  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    activeAnimation(event.key);
  });
  function makeSound(key){

    // var keyPressed=this.event;
    switch (key) {
      case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "j":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "k":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "l":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        exit();
        break;
      }
}


function activeAnimation(currentKey){
  var actButton=document.querySelector("."+currentKey);
  actButton.classList.add("pressed");

setTimeout(function(){
  actButton.classList.remove("pressed");
  },100)
}
