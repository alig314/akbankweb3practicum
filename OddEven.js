const n = prompt("Number Input: ");
var sum = 0;
check(n);
function check(n){
	for (var i = 0, len = n.length; i < len; i += 1) 
  {
      sum += Number(n[i]);
  }
  if(sum % 2 == 1) 
    alert("Number is Odd")    
       
  if(sum % 2 == 0) 
     alert("Number is Even")
}
