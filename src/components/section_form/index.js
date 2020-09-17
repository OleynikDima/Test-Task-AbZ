import React, { Component } from 'react';


class Form extends Component {

    render(){
        return (
        <section className="section-form">
                <div className="form-text_register">
                   <p className="form-text_register__title">Register to get a work</p>
                   <p className="form-text_register__text">Attention! After successful registration and alert, update the list of users in the block from the top</p>
                </div>
                
                <form className="form-container">
                    <label className="form-container__label">
                        Name
                        <input className="form-container__input"  placeholder="Your name"/>
                    </label>

                    <label className="form-container__label" >
                        Email
                        <input className="form-container__input" typeof="email" placeholder="Your email"/>
                    </label>

                    <label className="form-container__label discrabs">
                        Phone
                        <input className="form-container__input" placeholder="+380 XX XXX XX XX" />
                    </label>

                    <section className="form-position-box">
                        <p className="form-position-box__title"> Select your position 
                        </p>
                        <label> 
                            <input className="form-position-box__input blueCircleCheck" type="radio"/>
                            Frontend developer
                        </label>

                        <label> 
                            <input className="form-position-box__input" type="radio"/>
                            Backend developer
                        </label>
                        <label> 
                            <input className="form-position-box__input" type="radio"/>
                        Designer
                        </label>
                        <label> 
                            <input className="form-position-box__input" type="radio"/>
                            QA
                        </label>
                    </section>

                <label className="form-container__label" >
                    Photo
                    <input className="form-container__input" />
                    {/* <button> Browse</button> */}
                </label>
                 

                 <button className="position-container__button"> Sing up now </button>
                </form>
        </section>

        )
    }
} 

export default Form;