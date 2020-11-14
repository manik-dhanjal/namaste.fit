import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import 'react-calendar/dist/Calendar.css';
import {useEventUpdateDay,useEventUpdateMonth} from "../context/events.context"
import Calendar from 'react-calendar';
const Div = styled.div`
.event-present{
    .custom-date{
        background:#82FF0059;      
    }
}
.calendar{
   background: transparent;
   border:none;

   .dot{
       background:#99E14E;
       padding:5px;
       border-radius:50%;
       position:absolute;
       bottom:-5px;
       left:calc(50% - 5px)
   }
   .custom-tile{
       position:relative;
       overflow:visible!important;
       color:white;
       border-radius:50%;
       abbr{
           display:none;
       }
     
   }
}
`
const CalendarMolecule = () => {
        const NowDate =new Date();
        const [value, onChange] = useState([new Date(NowDate.setHours(0,0,0,0)), new Date( NowDate.setHours(23,59,50,9999))]);
        const useEventDay = useEventUpdateDay()
        const useEventMonth =useEventUpdateMonth()
        const onMonthChange = ({ date }) =>{
             const temp = useEventMonth.reduce((result,event)=>{
                            var time=new Date(event.timestamp)
                            console.log(result)
                            if(time.getDate()===date.getDate()&&time.getMonth()===date.getMonth()&&time.getFullYear()===date.getFullYear()) return'event-present';
                            return result;
                        },undefined)
            return `${temp?temp:null} custom-tile`
        }
        const UpdateList = (values) =>{
            useEventDay(values)
        }
        useEffect(()=>{
            UpdateList(value)
        
        },[value])
    return (
        <Div>
             <Calendar
                onChange={onChange}
                value={value}
                maxDetail="month"
                showNeighboringMonth = {false}
                returnValue = "range"
                tileContent = { ({ activeStartDate, date, view }) =>{
                    var todayDate= new Date()
                    return <> {((todayDate.getMonth() === date.getMonth() && todayDate.getDate() === date.getDate() && todayDate.getFullYear() === date.getFullYear()) ?<span className="dot"></span> : null)} <span className="custom-date">{date.getDate()}</span> </>
                } }
                minDetail="year"
                tileClassName={onMonthChange}
                className="calendar"
            />
        </Div>
    )
}

export default CalendarMolecule
