// import React from 'react';
function Curly(){
    const name = "Tanvi";
// we can also use var or let       
// object
    const userObj = {
        name : "bubu",
        age : 22,
        email : "bubu@gmail.com",

    }
// array
    const userArray = ['fgd',"ghjsdg","gfjhe","trywet"]
// we can also use let or var
    let x=10;
    let y=20
// function without parameters
     function fruit (){
        return"Apple"
     }
// function with parameters
     function sum(a,b){
        return a+b
     }

     function operation (a,b,op){
        if (op == "+"){
            return a+b
        }
        else if (op == ""){
            return (a-b)
        }
        else 
            return(a*b)
     }
     

    return (
        <div>
            <h1>JSX with curly braces</h1>
            <h1>{name}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(10,100)}</h1>
            <h1>{operation(20,30,"+")}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userArray[1]}</h1>
        </div>
    )
}
export default Curly;