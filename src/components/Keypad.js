import React from "react";

function Keypad (){
function recordChange(){
console.log('Entering password...')
}

    return (
        <div><form  onChange={recordChange} 
        >

             <input  type="password"
             name="password"
             input="password"
             placeholder="Enter Password"/></form>
        </div>
    )
}

export default Keypad;