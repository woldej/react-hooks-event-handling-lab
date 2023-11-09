// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
    function theFocus(){
        console.log('Good!')
    }
    function theBlur(){
        console.log('Hey! Eyes on me!')
    }
return(<>

    <button onFocus={ theFocus} onBlur={theBlur}>Eyes on me</button>
    </>)
}

export default EyesOnMe;
