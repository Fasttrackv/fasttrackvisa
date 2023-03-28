import Link from 'next/link'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Blog_sec extends Component {
    render(props) {

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
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



            <div className="blog-sec">
                <Container>
                    <div className="ftv-title">
                        <h2>Check out our Blog for Inspiring Travel Stories & Ideas</h2>
                        <p>Stay up-to-date on Global Travel Requirements</p>

                    </div>
                    <Slider {...settings}>

                        <div className="blog-box">
                            <Link href={'/'}>
                                <a>
                                    <figure><LazyLoadImage src="/img/blog1.webp" /></figure>
                                    <h4>5 best boutique hotels in Kenya</h4>
                                </a>
                            </Link>
                            <p>Who can resist the passion of discovering the endless Safari and rich biodiversity of Kenya? Probably, everyone who is interested in nature has a desire to travel to Kenya. That is why millions of people travel here per year. Of course, Kenya offers many other features to tourists, such as rich history, culture, and cuisine...

                            </p>
                            <p> <Link href={'/'}>
                                <a>Kanan Isazade</a>
                            </Link>
                                <span>24 Nov 2022</span></p>

                        </div>


                        <div className="blog-box">
                            <Link href={'/'}>
                                <a>
                                    <figure><LazyLoadImage src="/img/blog2.webp" /></figure>
                                    <h4>5 best boutique hotels in Kenya</h4>
                                </a>
                            </Link>
                            <p>Who can resist the passion of discovering the endless Safari and rich biodiversity of Kenya? Probably, everyone who is interested in nature has a desire to travel to Kenya. That is why millions of people travel here per year. Of course, Kenya offers many other features to tourists, such as rich history, culture, and cuisine...

                            </p>
                            <p> <Link href={'/'}>
                                <a>Kanan Isazade</a>
                            </Link>
                                <span>24 Nov 2022</span></p>

                        </div>

                        <div className="blog-box">
                            <Link href={'/'}>
                                <a>
                                    <figure><LazyLoadImage src="/img/blog3.webp" /></figure>
                                    <h4>5 best boutique hotels in Kenya</h4>
                                </a>
                            </Link>
                            <p>Who can resist the passion of discovering the endless Safari and rich biodiversity of Kenya? Probably, everyone who is interested in nature has a desire to travel to Kenya. That is why millions of people travel here per year. Of course, Kenya offers many other features to tourists, such as rich history, culture, and cuisine...

                            </p>
                            <p> <Link href={'/'}>
                                <a>Kanan Isazade</a>
                            </Link>
                                <span>24 Nov 2022</span></p>

                        </div>

                        <div className="blog-box">
                            <Link href={'/'}>
                                <a>
                                    <figure><LazyLoadImage src="/img/blog4.webp" /></figure>
                                    <h4>5 best boutique hotels in Kenya</h4>
                                </a>
                            </Link>
                            <p>Who can resist the passion of discovering the endless Safari and rich biodiversity of Kenya? Probably, everyone who is interested in nature has a desire to travel to Kenya. That is why millions of people travel here per year. Of course, Kenya offers many other features to tourists, such as rich history, culture, and cuisine...

                            </p>
                            <p> <Link href={'/'}>
                                <a>Kanan Isazade</a>
                            </Link>
                                <span>24 Nov 2022</span></p>

                        </div>



                    </Slider>
                </Container>
            </div>



        );
    }
}
export default Blog_sec;
