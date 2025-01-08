


function arithmetik_Operation(valu){
const operation  = valu;
    switch(operation){
        case "+":
            let sum = parseInt(first)  + parseInt(second)
            console.log(sum)
            reset();
             document.getElementById("out").textContent = sum;
             break;
            
        case "-":
            let sub = parseInt(first)  -  parseInt(second)
            console.log(sub)
            reset();
             document.getElementById("out").textContent = sub;
             break;
        case "*":
            let mult = parseInt(first)  *  parseInt(second)
            console.log(mult)
            reset();
             document.getElementById("out").textContent = mult;
             break
    }
   
  }

  let first = 0;
  let second = 0;

  function takeValue(val){
    if(first === 0  ){
        first = val;
    }else{
        second = val;
    }
  }
  function reset(){
    first = 0;
    second = 0;
  }


