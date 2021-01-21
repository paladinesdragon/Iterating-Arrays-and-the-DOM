let talents = ["Strength","Dexterity","Wisdom","Accuracy"];
let checkbox = "<input class='talents' type='checkbox' name='talents' />"
//creates html checkbox for each talent
for (let i=0; i <talents.length; i++) {
  document.getElementById("current").innerHTML += checkbox+talents[i]+"<br>";
}

//using for loop and array.values()
let x = talents.values();
for (let y of x) {
  document.getElementById("current1").textContent += y;
}

//using traditional for loop
for (let i = 0; i < talents.length; i++) {
  document.getElementById("current2").textContent += talents[i];
}

//using array.join()
document.getElementById("current3").textContent = talents.join(", ");

//using only the DOM
document.getElementById("current4").textContent = talents;

//function to add a new talent
function addTalent() {
  let newTalent = document.getElementById("talent").value;
  
  if (talents.includes(newTalent)) {
    alert("Talent already exists!");
  } else if (newTalent === "") {
    alert("Please enter some text!");
  } else {    
    talents.push(newTalent);
    //adds new talent to checkbox version
    document.getElementById("current").innerHTML += checkbox+newTalent+"<br>";
    //adds new talent to array.values version
    document.getElementById("current1").textContent += newTalent;
    //adds new talent to traditional for loop version
    document.getElementById("current2").textContent += newTalent;
    //adds new talent to array.join() version
    document.getElementById("current3").textContent = talents.join(", ");
    //adds new talent to DOM only version
    document.getElementById("current4").textContent = talents;
  }
}





