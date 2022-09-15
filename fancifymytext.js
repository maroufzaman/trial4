var cont = document.getElementById("text");



document.getElementById("button1").addEventListener("click", function() {
    alert("Hello World!");
    cont.style.fontSize = 24;
  });

  document.getElementById("button2").addEventListener("click", function() {
    alert("Hello World!");
    cont.toUppperCase();
    var parts = cont.split(" ");
    cont = parts.join("_MOO"); 


  });




  
document.getElementById("FancyShmancy").addEventListener("click", function() {
    alert("Hello World!");
    cont.style.fontWeight = "bold";
    cont.style.color = "blue"; 
    cont.style.textDecoration = "underline";
  });

  
  document.getElementById("BoringBetty").addEventListener("click", function() {
    alert("Hello World!");
    cont.style.fontWeight = "normal";
    cont.style.color = "black"; 
    cont.style.textDecoration = "none";

    
  });