
import Link from 'next/link'
import Router from 'next/router'

import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Searchband from '../../components/search_band';
import Simple_step from '../../components/Simple_step';
import Abrand from '../../components/Abrand';
import Ready_get from '../../components/Ready_get';
import Fbottom from '../../components/Fbottom';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";

import Modal from 'react-bootstrap/Modal';
class Visa_indetail extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      apistatus: '',
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.close2 = this.close2.bind(this);


  }
  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
    this.setState({ showimagesTextModal: false });
  }
  close2() {
    this.setState({ showErrorModal: false });
    this.setState({ showSuccessModal: false });
  }


  static async getInitialProps(context) {
    console.log(context.query.listing_page)
    const page_url = context.query.listing_page
    const country_ext = context.query.c_id;
    var country_list = ['en-in',]
    const country_elist = country_list.findIndex(o => o !== country_ext)
    const res1 = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/international-visa/${page_url}`)
    if (res1.status === 200) {
      const visalisting = await res1.json()
      const apistatus = res1.status;
      return {
        country_ext, visalisting, country_elist, apistatus, page_url

      }
    }
    else {
      return {
        country_ext, country_elist, page_url
      }
    }



  }

  componentDidMount() {
    // if (this.props.country_elist === -1) {
    //   Router.push('/en-in');
    // }
    this.setState({
      visalisting: this.props.visalisting
    });
    window.addEventListener('scroll', () => {
      let activeClass = 'hsticky';
      let activeClass2 = 'fsticky';
      if (window.scrollY === 0) {
        activeClass = '';
      }
      if (window.scrollY <= 850) {
        activeClass2 = '';
      }
      this.setState({ activeClass, activeClass2 });
    });

  }



  render() {
    var Testimonials_sl = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      responsive: [

        {
          breakpoint: 1024,
          Testimonials_sl: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          Testimonials_sl: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]
    }

    return (
      <>

        <header className={'App-header' + ` ${this.state.activeClass}`}>
          <Nav ce_name={this.props.country_ext} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'/'}> </Nav>
        </header>

        <div className="banner-area banner-inner">
          <div id="bloader">
            <LazyLoadImage className="img-fluid" alt="loader" src="/img/loader.gif" width="200" height="112" />
          </div>

          <div className="video_banner_sec video_banner_sec2">
            {this.props.visalisting.allproduct.length != 0 ?
              <>
                {this.props.visalisting.allproduct.map((allproduct, m) =>
                  <>
                    {m === 0 ?
                      <iframe className="bannervideo" src={`https://player.vimeo.com/video/${allproduct.youtube_share_link}?h=6e8e42556b&amp;autoplay=1&loop=1&autopause=0&muted=1`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                      :
                      ''
                    }

                  </>

                )}

              </>
              :
              <iframe className="bannervideo" src="https://player.vimeo.com/video/777995194?h=6e8e42556b&amp;autoplay=1&loop=1&autopause=0&muted=1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            }

          </div>

          {/* <div className="banner_text formloader" id="banner_text">



            <a href="#plans" className="plan_btn"><h2>Get an eSIM Card worth $ 9<sup>99</sup> free with your [countryname] eVisa</h2>
              <p>Enjoy free Whatsapp & Incoming Calls</p>
              <span className="btn1">Explore <i className="fa fa-caret-down ml-1"></i></span>
            </a>
          </div> */}

          {/* <ol className='breadcrumb breadcrumb2'><li>Home</li><li>Home</li></ol> */}


          <h1 className='pagevtitle'>{this.props.page_url.replace(/-/g, ' ')}</h1>
        </div>


        {this.props.visalisting.allproduct.map((allproduct, n) =>
          <>
            {n === 0 ?
              <div className={'ffbootom' + ` ${this.state.activeClass2}`}>


                <Fbottom countryname={allproduct.country}></Fbottom>
              </div>
              :
              ''
            }

          </>

        )}





        <Container>


          <div className="desi-work-container" id="visalist">
            <Row className="justify-content-center">


              {this.props.visalisting.allproduct.map((allproduct, z) =>
                <Col sm={6} md={6} lg={4} key={z}>

                  <div className="plan_box mb-2">
                    <figure>
                      <div className="flags"> <LazyLoadImage width="70" src="/img/EU-flag.png" /> </div>

                      <LazyLoadImage alt={allproduct.title} src={'https://cms.fasttrackvisa.com/' + allproduct.imageurl} className="img-fluid" /></figure>

                    <ul className="product-plan">
                      <li className='planname'>{allproduct.title}   <b className={'gss_img flag-' + allproduct.country_code}></b>
                      </li>
                      <li>
                        <select className='mb-2 form-control'><option> {allproduct.duration} {allproduct.category} </option> </select>
                      </li>
                      <li className='d-flex mb-3'>
                        <span><strong>{allproduct.currency_icon} {allproduct.price}</strong> <br /> Total Fee</span>
                        <span className='pt-2 d-block'>*Includes Processing fee</span>
                      </li>

                      <li className='d-flex'><span><i className='fa fa-hourglass-start'></i> Processing Time</span> <span>{allproduct.tat}</span></li>
                      <li className='d-flex'><span><i className='fa fa-clock-o'></i> Duration of stay </span> <span>up to {allproduct.duration}</span></li>
                      <li className='d-flex'><span><i className='fa fa-picture-o'></i> Documents needed </span> <span>
                      {allproduct.document.map((document, j) =>

<img className='ml-2' src={'/img/' + document.doc_name + '.png'} width={25} title={document.doc_name} alt={document.doc_name} key={j} />

)}
                      </span></li>

                      <li> 

                      </li>
                      <li><Link href={'/' + this.props.country_ext + '/checkout/' + allproduct.urllink + '/' + allproduct.id}>
                        <a className="buy_btn">
                          Apply for {allproduct.title}
                        </a>
                      </Link></li>
                    </ul>

                  </div>






                </Col>

              )}

            </Row>
          </div>

        </Container>



        <div className='bg-light pt-5 pb-5'>

          <Container>

            <div className="ftv-title">

              <h2>Frequently Asked Questions </h2>

            </div>


            <Row>
              {this.props.visalisting.faq_arr.map((faq_arr, f) =>


                <Col sm={6} md={6} lg={4} key={f}>
                  <h5 className='font-weight-normal'>{faq_arr.question}
                  </h5>
                  <p>
                    {faq_arr.answ}
                  </p>
                </Col>

              )}


            </Row>

            <p className='text-center mt-4 font-weight-bold'>Have More Questions?  Please <Link href={'/contact-us'}>
              <a>Contact Us</a>
            </Link> </p>
          </Container>
        </div>

        {this.props.visalisting.allproduct.map((allproduct, j) =>
										<>
											{j === 0 ?

												<LazyLoad offset={100}>
													<Simple_step scountryname={allproduct.country}></Simple_step>
												</LazyLoad>
												:
												''
											}

										</>

									)}

        <LazyLoad offset={100}>
          <div className="testimonials-sec">
            <Container>
              <div className="ftv-title">
                <p><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  Trusted by 50,000+ travelers. </p>
                <h2>What People Say About Us </h2>

              </div>
              <Slider {...Testimonials_sl}>

                {this.props.visalisting.testimonial.map((testimonial, i) =>
                  <div className="testi-box" key={i}>
                    <div className="testi-desc">

                      <p> {testimonial.description}</p>
                    </div>
                    <div className="testi-info">
                      <LazyLoadImage alt={testimonial.title} width={70} height={70} src={'https://cms.fasttrackvisa.com/' + testimonial.image} />
                      <div>
                        <h4>{testimonial.title}</h4>
                        <p>{testimonial.imageurl} </p>
                      </div>
                    </div>

                  </div>

                )}



              </Slider>
            </Container>
          </div>

        </LazyLoad>
        <LazyLoad offset={100}>
          <Abrand></Abrand>
        </LazyLoad>

        <Container className='mb-5'>
          <div className="ftv-title">
            <h2>Visa For Nearby Countries</h2>

          </div>
          <Slider {...Testimonials_sl}>
            {this.props.visalisting.resarray_near.map((resarray_near, a) =>
              <div className="pro-div" key={a}>
                <Link href={'/' + this.props.country_ext + '/' + resarray_near.urllink}>
                  <a>
                    <figure className="visa-img"><LazyLoadImage
                      src={'https://cms.fasttrackvisa.com/' + resarray_near.imageurl} />

                    </figure>
                    <div className="pro-details">
                      <h5 className="pro-title">{resarray_near.title}</h5>
                      <p className="skill"><i className="fa fa-clock-o"></i> {resarray_near.duration}  Validity </p>
                      <p className="skill"><i className="fa fa-usd"></i> Starting as low as {resarray_near.currency_icon} {resarray_near.price} per Visa </p>
                    </div>
                  </a>
                </Link>
              </div>
            )}

          </Slider>


        </Container>


        <LazyLoad offset={100}>
          <Ready_get></Ready_get>
        </LazyLoad>

        <hr />


        <LazyLoad offset={100}>
          <Footer ce_name={this.props.country_ext}></Footer>

        </LazyLoad>


      </>

    );
  }
}
export default Visa_indetail;