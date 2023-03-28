
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Simple_step extends Component {
    render(props) {

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
            <div className="simple-step">
                <Container>
                    <div className="ftv-title">
                        <p>We Take Care Of Your Online Visa Application</p>
                        <h2>Apply Visa Online In 4 Simple Steps</h2>
                    </div>
                    <Slider {...settings}>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/step-1.png" /></figure>
                            <h4>Log In & Apply</h4>
                            <p>Fill in the Online Application Form with basic details</p>

                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/step-2.png" /></figure>
                            <h4>Upload Documents & Pay Online</h4>
                            <p>Our Visa Expert will validate your application</p>
                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/step-3.png" /></figure>
                            <h4>Visa Processing</h4>
                            <p>We will process your eVisa with the {this.props.scountryname} embassy</p>
                        </div>
                        <div className="st-box">
                            <figure><LazyLoadImage src="/img/step-4.png" /></figure>
                            <h4>Visa by E-Mail</h4>
                            <p>Get your eVisa & eSIM delivered to you via e-mail</p>
                        </div>
                    </Slider>
                </Container>
            </div>

 
        );
    }
}
export default Simple_step;
