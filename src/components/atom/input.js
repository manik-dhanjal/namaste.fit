import React from 'react'
import styled from "styled-components"
const Div = styled.div`

    margin-top: 40px;
    position: relative;

    label{
        position: absolute;
        left: 10px;
        top:10px;
        transition: 0.4s ease;
    }
  
    input{
        border:none;
        padding:10px;
        border-bottom: 0.5px solid white;
        width: 100% ;
        background:transparent;
        color:white;
    }
    span{
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom:1.5px solid #AFFF5C;
        width: 0px;
        transition:0.4s ease width;
        z-index: 2;
    }
    input:invalid {
        box-shadow:none;
      }
label.active{
    top:-15px;
    color:#AFFF5C;
    font-size: 13px;
}
input:focus{
    &+label{
        top:-20px;
        color:#AFFF5C;
        font-size: 13px;
    }
    &+label+span{
        width: 100%;
    }
}

`
const Input = ({label,value,handleChange,...otherProps}) => {
            return(
                <Div className="form-group">    
                    <input {...otherProps} value={value} onChange={handleChange}/>
                    <label className={value?"active":null}>{label}</label>
                    <span></span>
                </Div>
            )
}

export default Input
