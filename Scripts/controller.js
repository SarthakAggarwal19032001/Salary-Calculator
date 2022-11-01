// Controller Talk to View (Input), Call the Model and Send
// the data of View
// Collect the output from the Model and give it to view.
// Controller talk to the HTML By Using DOM.

//import {salaryOperations} from './model.js';
import salaryOperations from "./model.js";
//load js cdn when whole web page or window is loaded
window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('compute').addEventListener('click', computeAllowances);
//     var basicSalaryValue = window.document.getElementById('basicsalary').value;
// console.log('Basic Salary value is ', basicSalaryValue);
}


function computeAllowances(){
    // Take the Basic Salary Value from the textbox
    var basicSalaryValue = parseInt(document.getElementById('basicsalary').value);
    //console.log('Basic Salary value is ', basicSalaryValue);
    salaryOperations.basicSalary = basicSalaryValue;
    // for in loop (Object Traverse )
    for(let key in salaryOperations){
        if(key === 'basicSalary'){
            continue; // Skip 
        }
        const val = salaryOperations[key](); 
        const pTag = createPTag(key.toUpperCase(), val);
        document.getElementById(key).appendChild(pTag);
    }
    // const pTag = createPTag('HRA ', salaryOperations.hra()); 
    // document.getElementById('output').appendChild(pTag);   
    // const pTag2 = createPTag('DA ', salaryOperations.da()); 
    // document.getElementById('output').appendChild(pTag2); 
}

function createPTag(label, value){
    const pTag = document.createElement('p');
    pTag.innerText = `${label} is ${value}`;
    return pTag;
}
