

function passByValue(){
    
let temp,a,b;
a=Number(document.getElementById("num1").value);
b=Number(document.getElementById("num2").value);
temp = a;
a = b;
b = temp;

document.getElementById("num1").value= a;
document.getElementById("num2").value= b;

}



function passByReference() {
    let obj = {
        a:Number(document.getElementById("rnum1").value),
        b:Number(document.getElementById("rnum2").value)
      
    }
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
    document.getElementById("rnum1").value=`${obj.a}` ;
    document.getElementById("rnum2").value= `${obj.b}`;
    
}
  
