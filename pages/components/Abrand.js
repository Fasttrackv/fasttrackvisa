 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Slider from "react-slick";   
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Abrand extends Component {
    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                } 
                 
            ]
        }

        return (



            <div className="a-brand-sec">
                <Container>
                    <div className="ftv-title">
                   
                        <h2>A brand you can trust</h2>
                        <p>Helping Global Travelers move across borders with Ease </p>
                    </div>
                    <Slider {...settings}>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/abrand-1.png" /></figure>
                           <h4>200,000</h4>
                            
                            <p>eVisas Issued</p>

                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/abrand-2.png" /></figure>
                           <h4>40+</h4>
                            
                            <p> eVisa Countries Covered</p>

                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/abrand-3.png" /></figure>
                           <h4>99%</h4>
                            
                            <p>Visa Success Ratio</p>

                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/abrand-4.png" /></figure>
                           <h4>72</h4>
                            
                            <p>Nationalities Served </p>

                        </div>

                        
                    </Slider>
                </Container>
            </div>



        );
    }
}
export default Abrand;
