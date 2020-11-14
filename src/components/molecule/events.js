import React from 'react'
import styled from "styled-components"
import SingleEvents from "../atom/singleEvent"
import {useEvents} from "../context/events.context" 
const Div = styled.div`
width:50%;
height:70vh;
overflow-Y:auto;
display:flex;
flex-direction:column;
align-items:end;
padding-right:30px;
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
