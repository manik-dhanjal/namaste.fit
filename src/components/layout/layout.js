import React from 'react';

import styled from "styled-components"
import {ReactComponent as Logo} from "../../assets/Life Yoga.svg"
const Div = styled.div`
background:#333D47;
min-height:100vh;
.logo{
    width:150px;
  
    svg{
        width:100%;
    }
}
nav.container{
    padding-top:50px;
}
.container{
    width:100%;
    padding:0px 50px;
    max-width:1440px;
    margin:0 auto;
}
@media screen and (max-width:1440px){
    nav.container{
        padding-top:30px;
    }
}
@media screen and (max-width:1024px){
    .container{
        max-width:500px;
        padding:0px 30px;
    }
}

`
const Layout = ({children}) => {

    return (
        <Div>
            <header>
                <nav className="container">
                    <div className="logo">
                        <Logo/>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <footer>

            </footer>
        </Div>
    )
}

export default Layout
