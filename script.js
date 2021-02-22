let counter = 0; 

function iterate() {
  if (counter <= 99){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
    document.querySelector("h1").innerHTML=`rgb(${red}, ${green}, ${blue})`;
    counter++
    document.querySelector("h2").innerHTML=`Sample ${counter}`
  }

  else {
     document.querySelector("h1").innerHTML="finished";
     
  }
  
}

setInterval(iterate, 200);