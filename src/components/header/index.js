import React, { Component } from 'react';
import logo from '../../images/2-layers.png'

class Header extends Component {

    // state ={
    //     isShowBtnBar
    // }

    render(){    
        return (
            <header className="header">
                <nav className="header_nav">
                    <ul className="header_list">
                        <li className="header_list__item">
                            <a className="header_list__link_logo" href="#"> 
                                <img alt="logo" src={logo}/> </a>
                        </li>
                        <li className="header_list__item">
                            <p className="header_list__base_text"> TESTTASK </p>
                        </li>
                    </ul>
                     <button  className="header_button_sandwich" type="button"></button>
            
                </nav>
            </header>

        )
    }
}


export default Header;