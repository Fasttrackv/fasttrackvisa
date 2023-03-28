import React, { Component } from 'react';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';


class Footer extends Component {
  render(props) {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row mb-5 justify-content-between">
              <div className="col-12 col-md-5">

                <figure>
                  <LazyLoadImage src="/img/logo.png" />
                </figure>

                <div className="row mt-4">
                  <div className="col-12 col-sm-6">

                    <h5>UAE Office</h5>
                    <p>ELOB Office No. E2-123F-45
                      Hamriyah Free Zone
                      Sharjah, United Arab Emirates, 52101</p>
                  </div>
                  <div className="col-12 col-sm-6">

                    <h5>US Office</h5>
                    <p>Suite 80
                      55 West 39th Street
                      New York, USA, 10018</p>
                    <a href='mailto:info@fasttrackvisa.com'>info@fasttrackvisa.com</a>
                  </div>

                </div>

                <div className="row mt-4">
                  <div className="col-12 col-sm-6">
                    <ul className="slink_ul">
                      <li className="slink_li"><a className="slink" target="_blank" href="https://www.facebook.com/fasttrckvisa" rel="nofollow"><i className="fa fa-facebook"></i></a></li>
                      <li className="slink_li"><a className="slink" target="_blank" href="https://twitter.com/FastrackVisa" rel="nofollow"><i className="fa fa-twitter"></i></a></li>
                      <li className="slink_li"><a className="slink" target="_blank" href="https://www.linkedin.com/company/fasttrack-visa-com" rel="nofollow"><i className="fa fa-linkedin"></i></a></li>
                      <li className="slink_li"><a className="slink" target="_blank" href="https://www.instagram.com/fast.trackvisa/"><i className="fa fa-instagram"></i></a></li>
                      <li className="slink_li"><a className="slink" target="_blank" href="https://www.youtube.com/channel/UCUYzoyrZZ7MSEYYwu2P6-6g"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <figure>
                      <LazyLoadImage src="/img/card_image.png" width={150} />
                    </figure>
                  </div>
                </div>

              </div>

              <div className="col-12 col-md-7 col-lg-6">

                {this.props.ce_name === '' ?
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h5>Company  </h5>

                      <ul>
                        <li><Link href={'/about-us'}><a>About Us</a></Link></li>
                        <li><Link href={'/contact-us'}><a>Contact Us</a></Link></li>
                        <li><Link href={'/blog'}><a>Blog</a></Link></li>
                        <li><Link href={'/career'}><a>Career</a></Link></li>
                      </ul>
                    </div>


                    <div className="col-12 col-sm-6">
                      <h5>Others Links  </h5>
                      <ul>
                        <li><Link href={'/sitemap'}><a>Sitemap</a></Link></li>
                        <li><Link href={'/track-your-order'}><a>Track Your Order</a></Link></li>

                        <li><Link href={'/terms-and-conditions'}><a>Terms & Conditions</a></Link></li>
                        <li><Link href={'/privacy-policy'}><a>Privacy policy</a></Link></li>
                        <li><Link href={'/refund-and-cancellation'}><a>Refund & cancellation</a></Link></li>

                      </ul>
                    </div>


                  </div>
                  :

                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h5>Company  </h5>

                      <ul>
                        <li><Link href={'/' + this.props.ce_name + '/about-us'}><a>About Us</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/contact-us'}><a>Contact Us</a></Link></li>
                        <li><Link href={'/blog'}><a>Blog</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/career'}><a>Career</a></Link></li>
                      </ul>
                    </div>


                    <div className="col-12 col-sm-6">
                      <h5>Others Links  </h5>
                      <ul>
                        <li><Link href={'/' + this.props.ce_name + '/sitemap'}><a>Sitemap</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/track-your-order'}><a>Track Your Order</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/terms-and-conditions'}><a>Terms & Conditions</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/privacy-policy'}><a>Privacy policy</a></Link></li>
                        <li><Link href={'/' + this.props.ce_name + '/refund-and-cancellation'}><a>Refund & cancellation</a></Link></li>

                      </ul>
                    </div>


                  </div>

                }

              </div>


            </div>

            <p className='text-center'><strong className='text-dark'>© 2023 Fast Track Visa. All rights reserved.</strong></p>



          </div>


        </footer>


        <style jsx global>

          {` footer{padding:70px 0 0px;background:#fff}
  footer h5 {font-weight:bold; color:#000}
  footer ul li a {color:#444; padding:6px 0; display:block; font-weight:600}
  a {color:#444; font-weight:600}
.slink_ul{margin:0;padding:0;}
.slink_li{list-style:none;float:left}
.slink{float:left;padding:0 10px 0 0}
.slink .fa{width:34px;height:34px;border-radius:100%;display:flex;align-items:center;justify-content:center; background:#dee3e6;color:#5a7184}
.slink:hover i.fa-instagram{color:#fff;background:#f09433;background:-moz-linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background:-webkit-linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background:linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433',endColorstr='#bc1888',GradientType=1)}
.slink:hover i.fa-facebook{background:#3c58a1;color:#fff}
.slink:hover i.fa-twitter{background:#2aa9e0;color:#fff}
.slink:hover i.fa-linkedin{background:#0e7bbc;color:#fff}
.slink:hover i.fa-pinterest{background:#c61118;color:#fff}
.slink:hover i.fa-youtube{background:#cd201f;color:#fff}
.footer-bottom{padding:15px 0}
.footer-address img{margin:3px 4px}
.footer-add-area{border-top:1px solid #404040;padding:24px 0;background:#ddd}
.footer-info{text-align:center;font-size:13px;font-weight:400;color:#fff;line-height:18px;margin:0}
    `}</style>

      </>

    );
  }
}

export default Footer;
