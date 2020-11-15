import React ,{useState} from 'react'
import styled from "styled-components"
import Input from '../atom/input'

const Div = styled.div`
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:#00000090;
z-index:801;
&>div{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    .popup{
        background:#333D47;
        max-width:450px;
        width:100%;
        padding:50px 30px;
        border-radius:15px;
        h3{
            margin-top:20px
        }
        .submit-btn{
            padding:15px 30px;
            border-radius:8px;
            margin-top:40px;
            background:#404953;
            border:none;
            color:white;
            cursor:pointer;
        }
        .close{
            float:right;
            cursor:pointer;
        }
    }
    
}
`

const Popup = ({id,setPopup}) => {
    const [data,setData] = useState({
        name:"",
        email:"",
        id:id
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
        if(data.name&&data.email){
            setPopup(false)
        }

    }
    return (
        <Div>
            <div className="container">
                <div className="popup">
                    <div className="close" onClick={()=>setPopup(false)}>close</div>
                    <form onSubmit={handleSubmit}>
                        <Input value={data.name} label="Name" name="name" type="text" required handleChange={handleChange}/>
                        <Input value={data.email} label="E-mail" type="email" name="email" required handleChange={handleChange}/>
                        <button type="submit" className="submit-btn">Confirm Registration</button>
                    </form>
                </div>
            </div>
        </Div>
    )
}

export default Popup
