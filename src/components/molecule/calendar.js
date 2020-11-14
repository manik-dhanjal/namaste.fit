import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import 'react-calendar/dist/Calendar.css';
import {useEventUpdateDay,useEventUpdateMonth} from "../context/events.context"
import Calendar from 'react-calendar';

const Div = styled.div`
flex-grow: 1;
display: flex;
justify-content: end;
.event-present{
    .custom-date{
        color:#99E14E!important;    
    }
}
.calendar{
    max-width: 500px;
    width:100%;
   background: transparent;
   border:none;
   .react-calendar__tile--active,.react-calendar__tile--now{
       background:transparent!important;
   }

    .react-calendar__tile:hover{
       background:transparent;
       .custom-date{
        background:#99E14E20;
       }
   }
   
   .dot{
       background:#99E14E;
       padding:5px;
       border-radius:50%;
       position:absolute;
       bottom:5px;
       left:calc(50% - 5px)
   }
   .custom-tile{
       position:relative;
       overflow:visible!important;
       color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-top:0px;
       abbr{
           display:none;
       }
       .custom-date{
           transition:0.1s ease ;
            width: 45px;
            height: 45px;
            padding: 15px;
            display: inline-block;
            border-radius:50%;
            min-width:45px;
       } 
     
   }
   .react-calendar__tile:enabled:focus{
    background:transparent;
}
   .react-calendar__tile--active{
    .custom-date{
        background:#99E14E20;
      }
   }
   .react-calendar__month-view__weekdays__weekday{
       abbr{
            text-decoration:none;
            font-weight:400;
            color:#99E14E;
       }
     
   }
   .react-calendar__navigation{
       .react-calendar__navigation__arrow {
           font-size:1.3em;
           transition:0.2s ease;
           &:hover{
              color:#99E14E;
           }
       }
       button{
           color:white;
           font-size:1.15em;
           &:hover,&:enabled:focus,&[disabled]{
               background:transparent;
           }
       }
   }
}
@media screen and (max-width:1280px){
.calendar{
    max-width:450px;
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
                minDetail="month"
                tileClassName={onMonthChange}
                className="calendar"
            />
        </Div>
    )
}

export default CalendarMolecule
