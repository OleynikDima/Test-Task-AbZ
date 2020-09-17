import React from 'react';
import peacture from '../../images/Layer_10.png';

const About = () => {
    return (
        <section className="section-about">
            <p className="section-about__title"> Let's get acquainted </p>
            <div className="about-container">
                <img className="about-container_image" src={peacture}/>
                <div className="about-container-wrapper">
                    <p className="about-container-wrapper__title-about">I am cool frontend developer</p>
                    <p className="about-container-wrapper__text">We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
                    <p className ="about-container-wrapper__text"> If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. </p>
                    <button className ="about-container-wrapper__button"> Sing up now </button>
                </div>
            </div>
        </section>
    )
}


export default About;