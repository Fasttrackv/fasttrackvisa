
import Link from 'next/link';
import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Open_new from '../components/Open_new';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
class Partnership extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    static async getInitialProps(context) {
        const country_ext = context.query.c_id
        var country_list = ['en-in']
        const country_elist = country_list.findIndex(o => o === country_ext)
        //console.log(country_list.findIndex(o => o === country_ext))
        return {
            country_ext, country_elist
        }

    }


    componentDidMount() {
        // if (this.props.country_elist === -1) {
        //     Router.push('/en-in');
        // }
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
                        <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
                    </header>

                    <div className="checkout_banner">
                        <Container>
                            <h1>Trip Planning, Booking <br />
                                and Check-in</h1>

                            <p className='text-white'>
                                Create meaningful and personalized value at every stage of the customer lifecycle and help restore travel confidence.
                            </p>

                            <p>
                                <a href='#' className='btn btn-ftv'>Get a personalized demo</a>
                            </p>
                        </Container>
                    </div>


                    <Container>


                        <div className="desi-work-container">
                            <Row className='align-items-center mb-4'>

                                <Col sm={6}>
                                    <h3>Trip Planning</h3>
                                    <p>Help customers search for US domestic and international destinations open for travel by levels of restrictions—from no restrictions to COVID-19 testing and quarantine measures to restricted borders.
                                    </p>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>
                                    </div>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />


                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>

                                    </div>
                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Earn commission on eVisas and eTAs by allowing customers to secure visitor visas before booking a trip.</p>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <img src='/img/lifestyle.png' className='w-100' />
                                </Col>

                            </Row>

                            <Row className='align-items-center mb-4'>
                                <Col sm={6}>
                                    <img src='/img/lifestyle.png' className='w-100' />
                                </Col>

                                <Col sm={6}>
                                    <h3>Trip Planning</h3>
                                    <p>Help customers search for US domestic and international destinations open for travel by levels of restrictions—from no restrictions to COVID-19 testing and quarantine measures to restricted borders.
                                    </p>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>
                                    </div>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />


                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>

                                    </div>
                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Earn commission on eVisas and eTAs by allowing customers to secure visitor visas before booking a trip.</p>
                                    </div>
                                </Col>

                            </Row>
                            <Row className='align-items-center mb-4'>

                                <Col sm={6}>
                                    <h3>Trip Planning</h3>
                                    <p>Help customers search for US domestic and international destinations open for travel by levels of restrictions—from no restrictions to COVID-19 testing and quarantine measures to restricted borders.
                                    </p>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>
                                    </div>

                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />


                                        <p>Enable filtering capabilities for eligible flights to any destination based on nationality and travel restrictions.</p>

                                    </div>
                                    <div className='d-flex align-items-start'>
                                        <img src='/img/check.png' className='mr-3' />

                                        <p>Earn commission on eVisas and eTAs by allowing customers to secure visitor visas before booking a trip.</p>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <img src='/img/lifestyle.png' className='w-100' />
                                </Col>

                            </Row>


                        </div>



                    </Container>
                    <LazyLoad offset={100}>
                        <Open_new></Open_new>
                    </LazyLoad>

                    <div className='yellow_sec'>
                        <Container>

                            <h5>We've had excellent feedback from our travellers as we're able to provide a single touchpoint for all visa requirements across all destinations, and use sherpa° as a trusted partner to facilitate visa purchases. Sherpa° has given our customers peace of mind, addressing anxiety often associated with travel, further reduced inbound calls to our support staff, and prevented customer service issues on the ground.
                            </h5>
                            <p>Craig Nagy, G Adventures, Technology Director, Customer Systems</p>

                            <p><img src='/img/yellow-img.png' /></p>
                        </Container>
                    </div>

                    <Container className='mt-5 mb-5'>
                        <Row className='align-items-center mb-4'>

                            <Col sm={6}>

                                <div className="ftv-title text-left">

                                    <h2>Frequently Asked Questions </h2>

                                </div>
                                <div className='card mb-5 card-header bg-white'>


                                    <div className="faq-page">
                                        <Accordion defaultActiveKey="0">
                                            <li>
                                                <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold no-bdr" eventKey="0">
                                                    What is an eVisa?
                                                </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="0">
                                                    <div className='pt-1 pb-2'>
                                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                                                    </div>
                                                </Accordion.Collapse>
                                            </li>
                                            <li>
                                                <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="1">
                                                    What countries are covered?
                                                </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="1">
                                                    <div className='pt-1 pb-2'>
                                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                                                    </div>
                                                </Accordion.Collapse>
                                            </li>
                                            <li>
                                                <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="2">
                                                    How does your commercial model work?
                                                </Accordion.Toggle>

                                                <Accordion.Collapse eventKey="2">
                                                    <div className='pt-1 pb-2'>
                                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the
                                                    </div>
                                                </Accordion.Collapse>
                                            </li>

                                        </Accordion>

                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <img src='/img/faq.png' className='w-100' />
                            </Col>

                        </Row>
                    </Container>



                    <div className='blue_sec'>
                        <Container>

                        <div className="ftv-title">
<span className='btn-green'>Our solutions</span>
<h2 className='mt-3'>You choose how to work with us. </h2>
<p>Get up and running quickly with embeddable widgets, our intuitive API, or white-label WebApp.</p>

</div>

                            <Row>


                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog1.png" className='w-100' /></figure>
                                                <h4> #1</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                           </p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog2.png" className='w-100' /></figure>
                                                <h4> #2</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                           </p>

                                    </div>


                                </Col>

                                <Col sm={12} md={4} lg={4}>
                                    <div className="blog-box">
                                        <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a>
                                                <figure><LazyLoadImage src="/img/blog3.png" className='w-100' /></figure>
                                                <h4> #3</h4>
                                            </a>
                                        </Link>
                                        <p>Majority of peole will work in jobs that don’t exist today....

                                        </p>
                                        <p> <Link href={'/' + this.props.country_ext + '/#'}>
                                            <a><img src='/img/testi1.png' width={30} height={30} />  Kanan Isazade</a>
                                        </Link>
                                           </p>

                                    </div>


                                </Col>


                            </Row>

                        </Container>
                    </div>




                    <LazyLoad offset={100}>
                        <Footer ce_name={this.props.country_ext}></Footer>

                    </LazyLoad>

                </div>


            </>

        );
    }
}
export default Partnership;