import React from 'react';
import Title from "./Title";
import { tours } from '../data';
import {tour1, tour2, tour3, tour4} from "../data";

function Tours() {
    return (
    <section className="section" id="tours">
        <Title main_title='feature' sub_title='tours' />
        <div className="section-center featured-center"> 
            {/* <!-- first tour --> */}
            {tours.map((tour) => {
                return(
                <article key={tour.id} className='tour-card'>
                <div className="tour-img-container">
                    <img src={tour.image} alt="" className="tour-img"/>
                    <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                    <h4>{tour.title}</h4>
                    <p>L{tour.info}</p>
                    <div className="tour-footer">
                        <ul className="tour-footer-info">
                            <li><i className="fa-solid fa-map"></i>c{tour.location}</li>
                            <li>{tour.duration}</li>
                            <li>from ${tour.cost}</li>
                        </ul> 
                    </div>
                </div>
            </article>)})}
        </div>
    </section>  
    );}

    export default Tours;