let output = document.getElementById('input');


function calculate(num,a) {
   if (a == 0 && output.value == 0) {
     return output.value = 0 ;
   }
   
   output.value += num ;
  }
  

function change() {
   output.value = " ";
}

function symbol(s) {
  output.value += s;
  
}

function solve() {
  if (output.value === "") {
    output.value = 0 ;
  }else {
  let result = eval(output.value);
  output.value = result;
  }
}

function deleteLast() {
  output.value = output.value.slice(0, -1);
}