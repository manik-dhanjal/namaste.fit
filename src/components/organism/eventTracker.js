import React from 'react'
import styled from "styled-components"
import Events from "../molecule/events"
import CalendarMolecule from '../molecule/calendar'

const Section = styled.section`
h2{
    color:#99E14E;
}
.main{
    display:flex;
}
@media screen and (max-width:1024px){
    .main{
        flex-direction:column;
    }
    h2{
        text-align:center;
    }
}

`
const EventTracker = () => {
    return (
        <Section className="container">
            <h2>Yoga Live Sessions</h2>
            <div className="main">
                <Events/>
                <CalendarMolecule/>
            </div>
        </Section>
    )
}

export default EventTracker
