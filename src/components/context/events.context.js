import React ,{useState,useContext} from 'react'

const EventContextDay = React.createContext()
const EventUpdateDay = React.createContext()
const EventUpdateMonth = React.createContext()


export function useEvents() { return useContext(EventContextDay) }
export function useEventUpdateDay() { return useContext(EventUpdateDay) }
export function useEventUpdateMonth() { return  useContext(EventUpdateMonth) }

export const   EventProvider = ({children}) => {

    const [dayEvents,setDayEvents] = useState(events);

    // API to fetch events according to months
    // const FetchEventAPI = (dateLimits) =>{
    // return events.filter( a => (new Date(a.timestamp) > dateLimits[0] && new Date(a.timestamp) < dateLimits[1]) ).sort((a,b)=> new Date(b.timestamp) - new Date(a.timestamp) );
    // }

    // function to filter and reOrder events according to desired day
    const FilterEvents = (dateLimits,event) =>{

        return event.filter( a =>{ 
            return (new Date(a.timestamp) > dateLimits[0] && new Date(a.timestamp) < dateLimits[1] )
        });
    }


    // const updateMonth = (dateLimit) =>{
    //     const temp = FetchEventAPI(dateLimit)
    //     setFetchedEvents(temp)
    // }
    const updateDay = (dateLimit) =>{
           setDayEvents( FilterEvents(dateLimit,events)  )
    }
    return (
        <EventContextDay.Provider value = {dayEvents}>
                <EventUpdateDay.Provider value = {updateDay}>
                    <EventUpdateMonth.Provider value = {events}>
                        {children}
                    </EventUpdateMonth.Provider>
                </EventUpdateDay.Provider>
        </EventContextDay.Provider>
    )
}


const events=[
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy",
        id:"s1",
        price:0,
        attended:5,
        classOn:"Instagram Live sasc",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy dsv",
        id:"r1",
        price:12,
        attended:3,
        classOn:"Instagram Live asc",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy ds",
        id:"s2",
        price:0,
        attended:7,
        classOn:"Instagram Live asc",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 11 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy dsv s",
        id:"r2",
        price:12,
        attended:2,
        classOn:"Instagram Live",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy 3",
        id:"s3",
        price:66,
        attended:4,
        classOn:"Instagram Live",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 13 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy 4",
        id:"r3",
        price:0,
        attended:9,
        classOn:"Instagram Live",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 13 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy 4",
        id:"r4",
        price:55,
        attended:1,
        classOn:"Instagram Live",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy 5",
        id:"r5",
        price:0,
        attended:0,
        classOn:"Instagram Live",
        mentor:"jessi laverl"
    },
    {
        timestamp:"Thu Nov 14 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"this is dummy 6",
        id:"r6",
        price:0,
        attended:3,
        mentor:"jessi laverl"
    },
]