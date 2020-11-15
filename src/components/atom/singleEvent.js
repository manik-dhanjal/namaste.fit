import React from 'react'
import styled from "styled-components"
import {ReactComponent as Boy} from "../../assets/boy.svg"

const Div = styled.div`
display:flex;
max-width:700px;
background:#404953;
border-radius:10px;
margin:20px 0px;
width:100%;
transition:1s ease;
.content{
    border-left:2px solid #333D47;
    padding:15px 20px;
}
.head{
    padding:15px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:right;
    min-width:25%;
    .time{
        font-size:1.3em;
    }
    .time-left{
        margin-top:5px;
        font-size:0.9em;
    }
}
.content{
    display:flex;
    flex-grow:2;
    justify-content:space-between;
    max-width:75%;
    .info{
        max-width:calc(100% - 70px);
    }
    .heading{
        float: left;
        font-size:1.15em;
        font-weight:600;
        margin-bottom:4px;
        white-space: nowrap; 
        max-width: 100%;
        flex-grow:1;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
    .author,.location,.attends{
        font-size:0.9em;
        margin-top:2px;
        font-weight:300;
    }
    
    .attends{
        display:flex;
        align-items:center;
        margin-top:3px;
        svg{
            margin-right:5px;
            width:1.2em;

        }
    }
    .color{
        color:#99E14E;
    }
}
.price{
    display:flex;
    justify-content:end;
    align-items:center;
    font-size:1.8em;
    margin-top: -0.3em;
    color:#99E14E;
}
.popup{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
`
const SingleEvent = ({data}) => {
    const timeConverter = (stamp) => {
        var time = new Date(stamp).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
        return time;
      }
    return (
        <Div >
            <div className="head"> 
                <div className="time">{ timeConverter(data.timestamp) }</div>
                <div className="time-left">30 mins left</div> 
            </div>
            <div className="content">
                <div className="info">
                    <div className="heading">{data.name}</div>
                    <div className="author">With <span className="color">{data.mentor}</span></div>
                    <div className="location">{data.classOn}</div>
                    <div className="attends"> {data.attended?(<><Boy/> {data.attended} attended</>):null}</div>
                </div>
                <div className="price">
                   {data.price?`$${data.price}`:"Free"}
                </div>
            </div>
        </Div>
    )
}

export default SingleEvent
