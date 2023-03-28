
import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import Widget_v from '../../components/Widget_v';
class Blog_detail extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    // static async getInitialProps(context) {
    //     const country_ext = context.query.c_id
    //     var country_list = ['en-in']
    //     const country_elist = country_list.findIndex(o => o === country_ext)
    //     //console.log(country_list.findIndex(o => o === country_ext))
    //     return {
    //         country_ext, country_elist
    //     }

    // }


    componentDidMount() {

        window.addEventListener('scroll', () => {
            let activeClass = 'hsticky';
            if (window.scrollY === 0) {
                activeClass = 'top';
            }
            this.setState({ activeClass });
        });

    }



    render() {


        return (
            <>
                <div className="Home-page">
                    <header className={'App-header' + ` ${this.state.activeClass}`}>
                        <Nav ce_name='' lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
                    </header>
                    <div className="checkout_banner">
                        <Container>
                            <h1>Cheap Airline Tickets Great Ways To Save</h1>

                        </Container>
                    </div>

                    <Container className='mt-5'>
                        <Row >
                            <Col sm={12} md={1} lg={1}>
                                <p className='text-center'>Share</p>
                                <p className='text-center'><a href='#'><i className='fa fa-facebook'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-twitter'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-linkedin'></i></a></p>
                                <p className='text-center'><a href='#'><i className='fa fa-instagram'></i></a></p>
                            </Col>

                            <Col sm={12} md={9} lg={9}>
                                <p>Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands. </p>

                                <h3>Microsoft Patch Management For Home Users</h3>
                                <p>Last month, my wife, Anne Doe, took me to Las Vegas because she had to go for a business convention. Needless to say, she writes for an guide to casinos and I hate gambling. But then, she likes it and this supports us too, so I went along without any hassle. At first I was depressed, but then as I asked around and looked around, I ended up having more fun in Las Vegas than I would have thought. And no. I did not enter a single casino while I was there.</p>

                                <h3>Entertainment</h3>
                                <p>One of the greatest things about Las Vegas, Reno and Atlantic City (but especially Las Vegas) is the number of shows that are available. You can get to watch top class comedians like Jay Leno, Jerry Seinfeld, Ray Romano, Tim Allen and even the likes of Bill Cosby and Chris Rock. If you are into music you can watch female singers like Celine Dion, Mariah Carey, Britney Spears, Christina Aguilera and Beyonc?, male performers like Phil Collins, Eric Clapton, Snoopy Dog and bands like Oasis and Bon Jovi. I could go on and on but the list is endless. If you are into magic you can watch magicians like David Copperfield do their thing meters from you. Whatever you like, you can find it here from Western music to oldies to Jazz, Rock, Heavy Mettle to Trance. All you have to do is look at the itenary offered during your visit.</p>

                                <Widget_v></Widget_v>


                                <h3 className='mt-4'>Food</h3>

                                <p>Chinese to Japanese to Korean to Jewish and even Vegetarian and proper meat eating establishments await your every delight in Vegas. Do not opt for the cheap and oily fried dishes served for free while you play. Stop a while and take in the delightful scenery and smells of East Asian or European dishes. What is wondrous is that you get to see man’s ability to mix. A real melting pot if I may say so myself.</p>
                                <p>But is that all what casino cities like Las Vegas are about? Do you have to remain in the city to really and truly enjoy your stay? No.</p>

                                <h3>Bonnie Springs</h3>
                                <p>Who can not resist going to one of the old towns like those in the Western gun slinging movies? Your destination needs to be Old Nevada. There you can delight in an old western town right in the middle of Red Rock Canyon. They host western shootouts too so come prepared, partner! I could go on and on about other attractions like the theme park in Circus Circus, the Gilcrease Nature Sanctuary, the Henderson Bird Viewing Preserve and Mt. Charleston but I think you get the picture. In Las Vegas and hate gambling? Do not despair. Just go out and have some clean un-gambling fun.</p>

                                <Widget_v></Widget_v>


                                <div className="blog-box mt-4">


                                    <p className='d-flex mb-0'> <Link href={'/blog-detail'}>
                                        <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                    </Link>
                                        <span className='text-right'>PUBLISHED ON MAY, 2 2019</span></p>

                                </div>



                                <h4 className='mt-5'>Comments</h4>
                            </Col>

                            <Col sm={12} md={2} lg={2}>
                                <Link href={'/blog-detail'}>
                                    <a>
                                        <img src='/img/14-04.jpg' />
                                    </a>

                                </Link>
                            </Col>

                        </Row>

                    </Container>





<hr />
                    <LazyLoad offset={100}>
                        <Footer ce_name={this.props.country_ext}></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Blog_detail;