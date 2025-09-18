import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./practice_1.jsx";
import Curly from "./curly.jsx";
import Hook from "./hook.jsx";
import Counter from "./counter.jsx";
import Toggle from "./toggle.jsx";
import User from "./user.jsx";
import Input from "./input.jsx";
import Form from "./controlledForm.jsx";  
import Checkbox from "./chechBox.jsx";
import Radiobutton from "./radioButton.jsx";
import Array from "./array.jsx";
import Useeffect from "./useefect.jsx";
import Counte from "./handleProps.jsx";
import UseRef from "./useref.jsx";
import Uncontroled from "./uncontroleed.jsx";
import Parents from "./parentfunction.jsx";
import Greeting from "./ads_task_1.jsx";
import Details from "./ads_task_2_get_data.jsx";
import GetUserCardData from "./ads_task_2_get_data.jsx";
import GreetingCard from "./ads_task_2_greeting_card.jsx";


// import React from "react";

// import Fruit from './Fruit';     // ✅ Add this if you have Fruit.js
// import Colours from './Colours'; 

function App() {
  return (
    // <div>
      // <h1> First component </h1>
      // <Fruit></Fruit>
      // <Colours/>
      // <Todo></Todo>
      // <Curly></Curly>
      // <Hook></Hook>
      // <Counter></Counter>
      // <Toggle></Toggle>
      // <User name="Tanvi"></User>
      // <User name="Sam"></User>
      // <Input></Input>
      // <Form></Form>
      // <Checkbox></Checkbox>
      // <Radiobutton></Radiobutton> */}
      // {/* <Array></Array> */}
      // {/* <Useeffect></Useeffect> */}
      // {/* <Counte></Counte> */}
      // {/* <UseRef></UseRef> */}
      // {/* <Uncontroled></Uncontroled> */}
      // {/* <Parents ></Parents> */}
      // {/* <Greeting></Greeting> */}
      // {/* <Details></Details>  */}
      // {/* <GetUserCardData></GetUserCardData> */}
    // {/* </div> */}
    <Router>
      <Routes>
        <Route path="/" element={<GetUserCardData />} />
        <Route path="/greeting" element={<GreetingCard />} />
      </Routes>
    </Router>
  );
}

// make another component in same file. we can also make it in another file.

// function  Fruit(){
//   return (
//     <h1> Apple</h1>
//   )
// }

// function Colours (){
//   return (
//     <h1>Red</h1>
//   )
//}


export default App;