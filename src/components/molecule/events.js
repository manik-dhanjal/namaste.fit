import React from 'react'
import styled from "styled-components"
import SingleEvents from "../atom/singleEvent"
import {useEvents} from "../context/events.context" 
const Div = styled.div`
width: 60%;
height:70vh;
overflow-Y:auto;
padding-right:30px;
@media screen and (max-width:1280px){
    width: 50%;
}
@media screen and (max-width: 1024px){
width: 100%;
padding:0px;
overflow-Y:none;
height:100%;
}
-ms-overflow-style: none;  
scrollbar-width: none;
&::-webkit-scrollbar {
    display: none;
  }

`
const Events = () => {
    const events = useEvents()
    return (
        <Div>
             {events.map((data)=><SingleEvents data={data}/> )}
        </Div>
    )
}

export default Events
