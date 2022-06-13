import React from "react";
import Accordion  from "./components/Accordion";
import Search from "./components/Search";

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
            {/* <Accordion items ={items} /> */}
            <Search />
        </div>
    )

}