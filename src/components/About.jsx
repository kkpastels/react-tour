import React from 'react';
import about from "../image/about.jpg";
import Title from "./Title";

function About() {
    return (
    <section className="section" id="about">
        <Title main_title='About' sub_title='Us' />
        <div className="section-center about-center">
            <div className="about-img">
                <img src={about} 
                className="about-photo" 
                alt="awesome landscape"/>
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, magnam enim porro impedit assumenda voluptatum. Unde dolor magni temporibus fuga distinctio labore amet fugiat veritatis.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, magnam enim porro impedit assumenda voluptatum. Unde dolor magni temporibus fuga distinctio labore amet fugiat veritatis.
                </p>
                <a href="#home" className="btn">read more</a>
            </article>
        </div>
    </section>

    );
}
export default About;