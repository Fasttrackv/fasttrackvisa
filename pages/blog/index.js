
import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


import Widget_v from '../components/Widget_v';
class Blog_page extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    // static async getInitialProps(context) {

    //     return {

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
                            <h1>Blog</h1>

                        </Container>
                    </div>

                    <div className='blog-sec'>
                        <Container>
                            <Row >

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog1.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog2.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog3.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>


                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog1.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog2.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog3.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>
                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog1.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog2.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/blog/blog-detail'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog3.png" className='w-100' /></figure>
                                                <h4> Future of Work</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/blog/blog-detail'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                            <span>24 Nov 2022</span></p>

                                    </div>


                                </Col>

                            </Row>

                        </Container>

                        <Widget_v></Widget_v>



                    </div>



                    <LazyLoad offset={100}>
                        <Footer ce_name=''></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Blog_page;