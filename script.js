


function arithmetik_Operation(valu) {
  let operation = valu;
  switch (operation) {
    case "+":
      if(first === 0){
        alert("First chose a number")
        break;
      }
      myArray[1] = "+"
      document.getElementById("inhalt").textContent = first  + operation ;
      break;
    case "-":
      myArray[1] = "-"
      document.getElementById("inhalt").textContent = first  + operation ;
      break;
    case "*":
      myArray[1] = "*"
      document.getElementById("inhalt").textContent = first  + operation ;
      break;

  
  }
}
   
let myArray = [];

let first = " ";
let second = " ";
let default1 = " ";

function takeValue(val) {
  if(first === default1){
    myArray[0] = val;
    first = val;
    document.getElementById("inhalt").textContent = val;
    document.getElementById("out").textContent = " ";
  }
  else{  
    second = val;
    myArray[2] = second
    document.getElementById("inhalt").textContent = first  + myArray[1] + second ;
    executeOperation()
  }

    
  
}

function executeOperation(){
  switch (myArray[1]) {
    case "+":
      let sum = parseInt(myArray[0]) + parseInt(myArray[2])
      document.getElementById("out").textContent = sum;
      reset();
      break;

    case "-":
      let sub = parseInt(first) - parseInt(second)
      reset();
      document.getElementById("out").textContent = sub;
      break;
    case "*":
      let mult = parseInt(first) * parseInt(second)
      reset();
      document.getElementById("out").textContent = mult;
      break;
  }



}

function reset() {

  first = " ";
  second = " ";
}
function restart(){
  document.getElementById("out").textContent = " ";

  document.getElementById("inhalt").textContent = " ";


}


