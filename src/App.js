import React from "react";
import Accordion  from "./components/Accordion";

const items = [
    {
        title : 'what is React ?',
        content : 'React is a front end javascript framework'
    },
    {
        title : 'why use React ?',
        content : 'React is good'
    },
    {
        title : 'who are you  ?',
        content : 'i am no one'
    }

]


export default () =>{
    return (
        <div>
            <Accordion items ={items} />
        </div>
    )

}