'use strict';

document.addEventListener("DOMContentLoaded", init);

                          
function init() {
 // Look up an element in te document hierarchy by ID
    const streetName = prompt("please enter your street name: ");
    const petName = prompt("please enter your pets name: ");
    const colorName = prompt("please enter the best color: Blue, Green, or Red");
    const languageName = prompt("please enter your favorite programming language: ");    
    const h2 = document.getElementById("h2");
    const paragraph = document.getElementById("out");
    const emphasis = document.getElementById("emph");
    //emphasis.append(petName, "", streetName, "!");
    //emphasis.append(petName, "", streetName, "!");
    //emphasis.append(" ",streetName);
    paragraph.append("oh you must be the famous ",languageName," hacker ");
    
// Changing the color
    if(colorName.toLowerCase() === 'blue') {
        emphasis.append(petName, " ", streetName);
        emphasis.style.color="blue";
        
        paragraph.append(emphasis,"!");
        paragraph.innerHTML;
        return paragraph;
        
        };
    
    if(colorName.toLowerCase() === 'red') {
        emphasis.append(petName, " ", streetName);
        emphasis.style.color="red";
        
        paragraph.append(emphasis,"!");
        paragraph.innerHTML;
        return paragraph;
        
        };
    
    if(colorName.toLowerCase() === 'green') {
        emphasis.append(petName, " ", streetName);
        emphasis.style.color="green";
        
        paragraph.append(emphasis,"!");
        paragraph.innerHTML;
        return paragraph; 
        
        };
    
    //Change BG color to red if !== BRG
    
    if(colorName.toLowerCase() != 'blue' &&
       colorName.toLowerCase() != 'red' &&
       colorName.toLowerCase() != 'green') {
        
        h2.append("ACCESS GRANTED!! ");
        emphasis.append(petName, " ", streetName);
        paragraph.append(emphasis,"!");
    
        paragraph.innerHTML;
        document.body.style.backgroundColor="red";
        return paragraph;
        
        };
    //paragraph.append("oh you must bbbbbbbbe the famous ",languageName," hacker ", colorName," ", petName," ",streetName,"!");
    
    }
