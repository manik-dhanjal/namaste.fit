import React from 'react';
// import 'react-calendar/dist/Calendar.css';
import styled from "styled-components"
import {ReactComponent as Logo} from "../../assets/Life Yoga.svg"
// import {useEventUpdateDay,useEventUpdateMonth,useEvents} from "../context/events.context"
// import Calendar from 'react-calendar';
const Div = styled.div`
.logo{
    width:100px;
    svg{
        width:100%;
    }
}
.container{
    width:100%;
    padding:0px 50px;
    max-width:1440px;
}
@media screen and (max-width:1024px){
    .container{
        padding:0px 30px;
    }
}
`
const Layout = ({children}) => {
    // const NowDate =new Date();
    // const [value, onChange] = useState([new Date(NowDate.setHours(0,0,0,0)), new Date( NowDate.setHours(23,59,50,9999))]);
    // const useEventDay = useEventUpdateDay()
    // const useEventMonth =useEventUpdateMonth()
    // const onMonthChange = ({ activeStartDate, date, view }) =>{
    // return  useEventMonth.reduce((result,event)=>{
    //         var time=new Date(event.timestamp)
    //         if(time.getDate()===date.getDate()&&time.getMonth()===date.getMonth()&&time.getFullYear()===date.getFullYear()) return 'event-present';
    //         return result;
    //     },undefined)
    // }
    // const UpdateList = (values) =>{
    //     useEventDay(values)
      
    // }
    // useEffect(()=>{
    //     UpdateList(value)
       
    // },[value])
    return (
        <Div>
            <header>
                <nav>
                    <div className="logo">
                        <Logo/>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
            {/* <Calendar
                onChange={onChange}
                value={value}
                maxDetail="month"
                showNeighboringMonth = {false}
                tileClassName="color"
                returnValue="range"
                tileContent={(<span className="dot"></span>)}
                minDetail="year"
                tileClassName={onMonthChange}
            /> */}
            </footer>
        </Div>
    )
}

export default Layout
