
results=document.getElementById('results');
expression= document.getElementById('expression');
slice= document.getElementById('slice');

function makeExp(value) {
  
   
const maxlength=8;
const currExp=expression.value;
if(currExp.length < maxlength) 
{ 
     expression.value += value; 
     }
else
{
alert('expresion is too long');}

if (
    (currExp.endsWith('+') || currExp.endsWith('-') || currExp.endsWith('*') || currExp.endsWith('/')) &&
    (value === '+' || value === '-' || value === '*' || value === '/')
) {
    expression.value = currExp.slice(0, -1) + value;
}

}


function sqroot() {

    expressions =  expression.value;
    const result = Math.sqrt(expressions);
    results.value = result;

}

function slicenumber() {
     expressions = expression.value;
       expressions = expressions.slice(0,-1);
        expression.value = expressions;
  
}

function calPercentage() {
     expressions = expression.value;
    const result = (eval(expressions) / 100);
    results.value = result;
}

function clearDisplay() {
    expression.value = '';
    results.value = '';
}

function calculate() {
   try{
   
         expressions =  expression.value;
        const result = eval(expressions);
        results.value = result;
    }

        catch (error) {
            results.value = "error";
        
}
}
