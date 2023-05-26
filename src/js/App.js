import React, { useState } from 'react';
import "./style.css"
var speed=0;
var preSpeed=0;

export default function App(){
    const [value, setValue]=useState(null);
  
 
    function increaseSpeed(){

        if(speed<180){
            speed=speed+10;
            setValue(speed);
            addClass();
        }
    }
    function decreaseSpeed(){
        if(speed>0){
            speed=speed-10;
            setValue(speed);
            addClass();
        }
    }
    function addClass(){
        let newClass="speed-"+speed;
        let prevClass="speed-"+preSpeed;
        let el=document.getElementsByClassName("arrow-wrapper")[0];

        if(el.classList.contains(prevClass)){
            el.classList.remove(prevClass);
            el.classList.add(newClass);
        }
        preSpeed=speed;
        }
       
   
    return (
        <>       
            <div class="speedometer-container"> 
            <div class="speedometer-text">
                <div class="static">{value}</div>
                <div class="dynamic">
                    <span class="km">km/sa</span>
                </div>
                </div>             
            <div class="speedeometer-center-hide"></div>
            <div class="center-point"> </div>
            <div class="speedometer-bottom-hide"></div>
            <div class="arrow-container">
                <div class="arrow-wrapper speed-0">
                    <div class="arrow"></div>
                </div>
            </div> 
            <div class='speedometer-scale speedometer-scale-1'></div>
            <div class='speedometer-scale speedometer-scale-2'></div>
            <div class='speedometer-scale speedometer-scale-3'></div>
            <div class='speedometer-scale speedometer-scale-4'></div>
            <div class='speedometer-scale speedometer-scale-5'></div>
            <div class='speedometer-scale speedometer-scale-6'></div>
            <div class='speedometer-scale speedometer-scale-7'></div>
            <div class='speedometer-scale speedometer-scale-8'></div>
            <div class='speedometer-scale speedometer-scale-9'></div>
            <div class='speedometer-scale speedometer-scale-10'></div>
            <div class='speedometer-scale speedometer-scale-11'></div>
            <div class='speedometer-scale speedometer-scale-12'></div>
            <div class='speedometer-scale speedometer-scale-13'></div>
            <div class='speedometer-scale speedometer-scale-14'></div>
            <div class='speedometer-scale speedometer-scale-15'></div>
            <div class='speedometer-scale speedometer-scale-16'></div>
            <div class='speedometer-scale speedometer-scale-17'></div>
            <div class='speedometer-scale speedometer-scale-18'></div>
            <div class='speedometer-scale speedometer-scale-19'></div>     
            
        </div>
        <div class="accelerate-container">
            <button class="increase" onClick={increaseSpeed}>Increase Speed</button>
            <button class="decrease" onClick={decreaseSpeed} > Decrease Speed</button>
        </div>
        </>
     )
}


