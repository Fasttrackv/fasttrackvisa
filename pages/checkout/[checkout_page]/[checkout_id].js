
// import Link from 'next/link'
import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload';
import Nav from '../../../pages/components/Nav';
import Footer from '../../../pages/components/Footer';
// import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import Webcam from "react-webcam";
import ReactHtmlParser from 'react-html-parser';


class Checkoutpage extends Component {

  listOfUsersDetails = [];
  videoConstraints = {
    facingMode: "user",
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      apistatus: '',
      traveler_info: [],
      options: [],
      showAlert: false,
      travellerCount: 1,
      spinner: false,
      uploadedPassportData: [],
      showModal: false,
      captureImageSrc: '',
      showWebCamModal: false,
      isContinueToPayment: false,
      currentActiveWebCamName: '',
      currentActiveWebCamIndex: null
    };

  }

  static async getInitialProps(context) {
    const page_url = context.query.checkout_page;
    const page_url2 = context.query.checkout_id;

    const res = await fetch(`https://cms.fasttrackvisa.com/api/checkout/${page_url2}`)
    // const res = await fetch(`https://cms.fasttrackvisa.com/api/checkout/5`)
    const checkoutpage = await res.json();
    console.log(checkoutpage[0])
    if (res.status === 200) {
      const apistatus = res.status;
      return {
        checkoutpage, page_url, page_url2

      }
    }
    else {
      return {
        checkoutpage, page_url, page_url2
      }
    }
  }

  componentDidMount() {
    // if (this.props.country_elist === -1) {
    //   Router.push('/en-in');
    // }

    this.setState({
      p_origin: localStorage.getItem('origin')
    });

   
    this.setState({
      checkoutpage: this.props.checkoutpage[0]
    });
    var AirportofArrival = [];

    //console.log(this.props.checkoutpage[0]);
    //console.log(documentType); //":["Passport","Photo"]
    for (let i = 0; this.props.checkoutpage[0].arival_airport.length > i; i++) {
      AirportofArrival.push({ value: this.props.checkoutpage[0].arival_airport[i].city, label: this.props.checkoutpage[0].arival_airport[i].airport });

      if (this.props.checkoutpage[0].arival_airport.length === AirportofArrival.length) {
        this.setState({ options: AirportofArrival });
        this.addFormFields();
      }
    }

    window.addEventListener('scroll', () => {
      let activeClass = 'hsticky';
      if (window.scrollY === 0) {
        activeClass = 'top';
      }
      this.setState({ activeClass });
    });


  }

  openLoginModal = (e) => {
    this.setState({ showModal: true });

  };


  setRrrivalOption = (option, count, name) => {
    let traveler_info = this.state.traveler_info;
    traveler_info[count][name] = option.label;
    this.setState({ traveler_info });
  }


  setTravellerDate = (i, e, name) => {
    console.log(i, e);
    let traveler_info = this.state.traveler_info;
    traveler_info[i][name] = e;
    this.setState({ traveler_info });
  }


  addFormFields = () => {
    var isAddData = false;
    if (this.state.traveler_info.length > 0) {
      for (let i = 0; this.state.traveler_info.length > i; i++) {
        if (this.isEmpty(this.state.traveler_info[i].First_Name) && this.isEmpty(this.state.traveler_info[i].Last_Name) && this.isEmpty(this.state.traveler_info[i].Arrival) && this.isEmpty(this.state.traveler_info[i].Departure) && this.isEmpty(this.state.traveler_info[i].AirportOf_Arrival) && this.isEmpty(this.state.traveler_info[i].Phone_Number) && this.isEmpty(this.state.traveler_info[i].Email) && this.isEmpty(this.state.traveler_info[i].City) && this.isEmpty(this.state.traveler_info[i].Address) && this.isEmpty(this.state.traveler_info[i].Passport)) {
          if (this.state.traveler_info.length - 1 === i) {
            isAddData = true;
          }
        }
      }
    }
    else {
      this.setState(({
        traveler_info: [...this.state.traveler_info, { First_Name: '', Last_Name: '', Arrival: '', Departure: '', AirportOf_Arrival: '', Phone_Number: '', Email: '', City: '', Address: '', passport_number: '', sex: '', date_of_birth: '', date_of_expiry: '', file_url: '' }]
      }))
    }
    if (isAddData) {
      this.setState(({
        traveler_info: [...this.state.traveler_info, { First_Name: '', Last_Name: '', Arrival: '', Departure: '', AirportOf_Arrival: '', Phone_Number: '', Email: '', City: '', Address: '', passport_number: '', sex: '', date_of_birth: '', date_of_expiry: '', file_url: '' }]
      }))
      this.state.travellerCount++;
    }
    setTimeout(() => {
      console.log(this.state.traveler_info);
      this.setState({ showAlert: false })
    }, 1500);
  }

  handleChange(i, e) {
    let traveler_info = this.state.traveler_info;
    traveler_info[i][e.target.name] = e.target.value;
    this.setState({ traveler_info });
  }

  handleInputFileChange(index, event, name) {
    console.log(index, event, name);
    let traveler_info = this.state.traveler_info;
    traveler_info[index][name] = event.target.files[0];
    this.setState({ traveler_info });
    console.log(this.state.traveler_info);
    if (name === 'Passport') {
      this.setState({ spinner: true });
      const data = new FormData()
      data.append('document_name', event.target.files[0])
      console.warn(event.target.files[0]);
      let url = "https://cms.fasttrackvisa.com/api/passport-extract";

      axios.post(url, data)
        .then(res => { // then print response status
          this.setState({ spinner: false });
          // console.warn(res);
          var traveler_info = this.state.traveler_info;
          traveler_info[index].passport_number = res.data.fields.passport_number;
          traveler_info[index].sex = res.data.fields.sex;
          traveler_info[index].date_of_birth = res.data.fields.date_of_birth;
          traveler_info[index].date_of_expiry = res.data.fields.date_of_expiry;
          traveler_info[index].file_url = res.data.fields.file_url;
          this.setState({ traveler_info });
          //  console.log(this.state.uploadedPassportData);
          sessionStorage.setItem('passport', res.data.fields);
        })

      setTimeout(() => {
        this.setState({ spinner: false });
        //  console.log(this.state.traveler_info);
      }, 15000)
    }
  }

  handleCaptureImageChange(index, event, name) {
    // console.log(index, event, name);
    let traveler_info = this.state.traveler_info;
    traveler_info[index][name] = event;
    this.setState({ traveler_info });
    // console.log(this.state.traveler_info);
    if (name === 'Passport') {
      this.setState({ spinner: true });
      const data = new FormData()
      data.append('document_name', event)
      console.warn(event);
      let url = "https://cms.fasttrackvisa.com/api/passport-extract";

      axios.post(url, data)
        .then(res => { // then print response status
          this.setState({ spinner: false });
          console.warn(res);
          var traveler_info = this.state.traveler_info;
          traveler_info[index].passport_number = res.data.fields.passport_number;
          traveler_info[index].sex = res.data.fields.sex;
          traveler_info[index].date_of_birth = res.data.fields.date_of_birth;
          traveler_info[index].date_of_expiry = res.data.fields.date_of_expiry;
          traveler_info[index].file_url = res.data.fields.file_url;
          this.setState({ traveler_info });
          //  console.log(this.state.uploadedPassportData);
          sessionStorage.setItem('passport', res.data.fields);
        })

      setTimeout(() => {
        this.setState({ spinner: false });
        // console.log(this.state.traveler_info);
      }, 15000)
    }
    this.setState({ showWebCamModal: false, currentActiveWebCamName: '', currentActiveWebCamIndex: null, captureImageSrc: '' });
  }


  removeTravellar = () => {
    //  console.log("remove")
    if (this.state.traveler_info.length > 1) {
      this.state.traveler_info.splice(this.state.traveler_info.length - 1, 1);
      //   console.log(this.state.traveler_info.length);
      this.state.travellerCount--;
      let travellerCount = this.state.travellerCount
      let traveler_info = this.state.traveler_info;
      this.setState({ traveler_info, travellerCount });
    }
  }


  isEmpty = (string) => {
    if (string !== null && string !== undefined && string !== '') {
      return true;
    } else {
      this.setState({ showAlert: true })
      return false;
    }
  }

  showPopop = () => {
    this.setState({ showModal: true });
  }

  showWebCamPopop = () => {
    this.setState({ showWebCamModal: false });
  }


  submitTravellerInfo = () => {
    sessionStorage.setItem('visaPrice', this.props.checkoutpage[0].price);
    sessionStorage.setItem('finalAmount', (this.props.checkoutpage[0].price * 100) * 1);
    sessionStorage.setItem('currency', this.props.checkoutpage[0].currency_code);
    sessionStorage.setItem('ProductId', this.props.page_url2);

    for (let c = 0; this.state.traveler_info.length > c; c++) {
      if (this.isEmpty(this.state.traveler_info[0].First_Name) && this.isEmpty(this.state.traveler_info[c].Last_Name) && this.isEmpty(this.state.traveler_info[c].Arrival) && this.isEmpty(this.state.traveler_info[c].Departure) && this.isEmpty(this.state.traveler_info[c].AirportOf_Arrival) && this.isEmpty(this.state.traveler_info[c].Phone_Number) && this.isEmpty(this.state.traveler_info[c].Email) && this.isEmpty(this.state.traveler_info[c].City) && this.isEmpty(this.state.traveler_info[c].Address) && this.isEmpty(this.state.traveler_info[c].Passport)) {
        if (this.state.traveler_info.length - 1 === c) {
          var user_id = JSON.parse(localStorage.getItem('loginDetails')).id;

          if (localStorage.getItem('origin') === null) {
            var origin = this.props.checkoutpage[0].country_site;
            var citizen_of = this.props.checkoutpage[0].country_site;
          }
          else {
            var citizen_of = (localStorage.getItem('origin') !== null ? localStorage.getItem('origin') : null);
            var origin = [(localStorage.getItem('origin') !== null ? localStorage.getItem('origin') : null)];
          }

          if (localStorage.getItem('destination') === null) {
            var destination = this.props.checkoutpage[0].country;
          }
          else {
            var destination = (localStorage.getItem('destination') !== null ? localStorage.getItem('destination') : null);
          }

          var coupon_code = '';
          var discount_price = '40';
          var total_amount = this.props.checkoutpage[0].price * 100;
          var no_of_pax = this.state.traveler_info.length;
          const data = new FormData();
          data.append('id', this.props.page_url2);
          data.append('no_of_pax', this.state.traveler_info.length);
          data.append('total_amount', total_amount * no_of_pax);
          data.append('coupon_code', coupon_code);
          data.append('discount_price', discount_price);
          data.append('destination', destination);
          data.append('user_id', user_id);
          sessionStorage.setItem('visaPrice', this.props.checkoutpage[0].price);
          sessionStorage.setItem('finalAmount', total_amount * no_of_pax);
          sessionStorage.setItem('currency', this.props.checkoutpage[0].currency_code);
          sessionStorage.setItem('ProductId', this.props.page_url2);
          for (let i = 0; this.state.traveler_info.length > i; i++) {
            data.append('fname[]', this.state.traveler_info[i].First_Name)
            data.append('lname[]', this.state.traveler_info[i].Last_Name)
            data.append('origin[]', origin)
            data.append('citizen_of', citizen_of)
            data.append('email_id[]', this.state.traveler_info[i].Email)
            data.append('gender[]', this.state.traveler_info[i].sex)
            data.append('dob[]', this.state.traveler_info[i].date_of_birth)
            data.append('passport_number[]', this.state.traveler_info[i].passport_number)
            data.append('d_o_ex[]', this.state.traveler_info[i].date_of_expiry)
            data.append('phone[]', this.state.traveler_info[i].Phone_Number)
            data.append('d_o_a[]', moment(this.state.traveler_info[i].Arrival).format("DD/MM/yyyy"))
            data.append('d_o_t[]', moment(this.state.traveler_info[i].Departure).format("DD/MM/yyyy"))
            data.append('city[]', this.state.traveler_info[i].City)
            data.append('address[]', this.state.traveler_info[i].Address)
            for (let d = 0; this.props.checkoutpage[0].document.length > d; d++) {
              if (this.props.checkoutpage[0].document[d] === 'Passport') {
                data.append('document_name[]', this.state.traveler_info[i].Passport)
              }
              if (this.props.checkoutpage[0].document[d] === 'Photo') {
                data.append('document_name[]', this.state.traveler_info[i].Photo)
              }
              if (this.props.checkoutpage[0].document[d] === 'Air Ticket') {
                data.append('document_name[]', this.state.traveler_info[i].Air_Ticket)
              }
              if (this.props.checkoutpage[0].document[d] === 'Hotel Voucher') {
                data.append('document_name[]', this.state.traveler_info[i].Hotel_Voucher)
              }
              if (this.props.checkoutpage[0].document[d] === 'Invitation Letter') {
                data.append('document_name[]', this.state.traveler_info[i].Invitation_Letter)
              }
              if (this.props.checkoutpage[0].document[d] === 'Income Tax Return') {
                data.append('document_name[]', this.state.traveler_info[i].Income_Tax_Return)
              }
              if (this.props.checkoutpage[0].document[d] === 'Bank Statement') {
                data.append('document_name[]', this.state.traveler_info[i].Bank_Statement)
              }

              data.append('document_type[]', this.props.checkoutpage[0].document[d])
            }
          }




          console.log(data);
          let url = "https://cms.fasttrackvisa.com/api/success";
          axios.post(url, data, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }, {}).then(res => {

            Router.push(`/payment`);
            // console.log(res.order_id);
            // console.log(res.quantity);
          })
            .catch(error => {
              console.log('error');
              // your error handling goes here}

            });
        }
      }
    }
  }

  render() {
    var settings = {
      dots: true,
      nav: false,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
    }

    return (
      <>

        <header className={'App-header' + ` ${this.state.activeClass}`}>
          <Nav ce_name='' meta_title={this.props.checkoutpage[0].title} meta_desc={this.props.checkoutpage[0].title} meta_keyword="" meta_img="/img/logo.png" meta_url={'/checkout' + this.props.page_url + '/' + this.props.page_url2}> </Nav>
        </header>

        <div className="checkout_banner">
          <Container>
            <h1> {this.props.checkoutpage[0].title}  </h1>


            {/* <p>Get a complimentary eSIM Card worth $ 9<sup>99</sup> with each [countryname] eVisa</p> */}
          </Container>
        </div>

        <Container>


          <div className="desi-work-container">
            <Row className=''>

              <Col className='TravelerOneInformations' sm={12} md={8} lg={8}>
                <form>
                  <div>
                    {this.state.traveler_info.map((element, index) => (
                      <div key={index}>
                        <h3 className='mb-0 mt-4' >Traveler Informations
                          {this.state.travellerCount > 1 && index > 0 ? <button type='button' className='btn btn-sm btn-danger' onClick={this.removeTravellar}>Remove</button> : ''}
                        </h3>
                        <Row className='gutters5'>

                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input1a">First Name</label>
                              <input type="text" className="form-control" name='First_Name' placeholder="Here" value={element.First_Name || ""} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input2a">Last Name</label>
                              <input type="text" className="form-control" name='Last_Name' placeholder="Here" value={element.Last_Name} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input1a">Arrival Date</label>

                              <DatePicker
                                selected={element.Arrival}
                                onChange={(date) => this.setTravellerDate(index, date, 'Arrival')}
                                minDate={new Date()}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Arrival"
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input2a">Departure Date</label>

                              <DatePicker
                                selected={element.Departure}
                                onChange={(date) => this.setTravellerDate(index, date, 'Departure')}
                                minDate={element.Arrival}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Departure"
                              />
                            </div>
                          </Col>
                          <Col sm={12}>
                            <div className="ftv-field">
                              <label htmlFor="input3">Airport of Arrival</label>
                              <Select
                                id={index}
                                className="basic-single"
                                classNamePrefix="select"
                                onChange={(option) => { this.setRrrivalOption(option, index, 'AirportOf_Arrival') }}
                                isClearable={true}
                                isSearchable={true}
                                name="color"
                                options={this.state.options}
                              />
                            </div>
                          </Col>

                        </Row>
                        <h3 className='mt-5 mb-0'>Contact informations</h3>
                        <Row className='gutters5'>

                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input1a">Phone Number</label>
                              <span className='phoneflag'><b className="gss_img flag-us"></b></span>
                              <input id="input1a" type="number" maxLength="10" className="form-control phoneinput" name='Phone_Number' placeholder="Here" value={element.Phone_Number} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input2a">E-mail</label>
                              <input id="input2a" type="email" className="form-control" name='Email' placeholder="Here" value={element.Email} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input3">City</label>
                              <input id="input3" type="text" className="form-control" name='City' placeholder="Here" value={element.City} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col><Col sm={6}>
                            <div className="ftv-field">
                              <label htmlFor="input3">Address</label>
                              <input id="input3" type="text" className="form-control" name='Address' placeholder="Here" value={element.Address} onChange={e => this.handleChange(index, e)} />
                            </div>
                          </Col>

                        </Row>
                        <h3 className='mt-5 mb-0'>Documents</h3>

                        <div className='AttachDocuments'>

                          <Row className='gutters5'>
                            {this.props.checkoutpage[0].document.map((element, subindex) => (
                              <Col sm={6}>
                                <div className="ftv-field file_upload">
                                  <label htmlFor="file1">{this.props.checkoutpage[0].document[subindex]} </label>
                                  <input id={this.props.checkoutpage[0].document[subindex]} name={this.props.checkoutpage[0].document[subindex]} type="file" className="form-control file" placeholder="Upload File Here" onChange={e => this.handleInputFileChange(index, e, this.props.checkoutpage[0].document_fields[subindex])} />
                                  <small>Upload File Here</small>
                                  <span className='browse' title='Browse'><i className='fa fa-upload'></i></span>
                                  <b>or</b>
                                  <span onClick={() => this.setState({ showWebCamModal: true, currentActiveWebCamName: this.props.checkoutpage[0].document_fields[subindex], currentActiveWebCamIndex: index })} className='browse2' title='Take Photo'><i className='fa fa-camera'></i></span>
                                </div>
                                {/* <span>{element.Passport}</span> */}
                                {/* {this.state.spinner ?
                                  <Button variant="primary" disabled> 
                                    <Spinner
                                      as="span"
                                      animation="grow"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />
                                    Loading...
                                  </Button> : ''} */}
                              </Col>
                            ))}
                            {/* <Col sm={6}>
                              <div className="ftv-field file_upload">
                                <label htmlFor="file2">Invitation Letter</label>
                                <input id="file2" type="file" className="form-control file" name='Invitation_Letter' placeholder="Upload File Here" onChange={e => this.handleInputFileChange(index, e, 'Invitation_Letter')} />
                                <small>Upload File Here</small>
                                <span className='browse' title='Browse'><i className='fa fa-upload'></i></span>
                                <b>or</b>
                                <span className='browse2' title='Take Photo'><i className='fa fa-camera'></i></span>
                              </div>
                            </Col>


                            <Col sm={6}>
                              <div className="ftv-field file_upload">
                                <label htmlFor="file3">Documents 3</label>
                                <input id="file3" type="file" className="form-control file" name='Documents_3' placeholder="Upload File Here" onChange={e => this.handleInputFileChange(index, e, 'Documents_3')} />
                                <small>Upload File Here</small>
                                <span className='browse' title='Browse'><i className='fa fa-upload'></i></span>
                                <b>or</b>
                                <span className='browse2' title='Take Photo'><i className='fa fa-camera'></i></span>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="ftv-field file_upload">
                                <label htmlFor="file4">Documents 4</label>
                                <input id="file4" type="file" className="form-control file" name='Documents_4' placeholder="Upload File Here" onChange={e => this.handleInputFileChange(index, e, 'Documents_4')} />
                                <small>Upload File Here</small>
                                <span className='browse' title='Browse'><i className='fa fa-upload'></i></span>
                                <b>or</b>
                                <span className='browse2' title='Take Photo'><i className='fa fa-camera'></i></span>
                              </div>
                            </Col> */}

                          </Row>
                        </div>

                      </div>))}

                    <Modal
                      show={this.state.showModal}
                      onHide={() => this.setState({ showModal: false })}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          Review Application
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                          ipsam atque a dolores quisquam quisquam adipisci possimus
                          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                          deleniti rem!
                        </p>

                        <Accordion>
                          {this.state.traveler_info.map((element, index) => (
                            <Card key={index}>
                              <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                  Traveller Information
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  <Container fluid>
                                    <Row className='gutters5'>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input1a">First Name</label>
                                          <span htmlFor="input1a">{element.First_Name}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">Last Name</label>
                                          <span htmlFor="input1a">{element.Last_Name}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">Gender</label>
                                          <span htmlFor="input1a">{element.gender}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">DOB</label>
                                          <span htmlFor="input1a">{element.date_of_birth}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">passport number</label>
                                          <span htmlFor="input1a">{element.passport_number}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">date of expiry</label>
                                          <span htmlFor="input1a">{element.date_of_expiry}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input1a">Arrival Date</label>
                                          <span htmlFor="input1a">{moment(element.Arrival).format("DD/MM/yyyy")}</span>

                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">Departure Date</label>
                                          <span htmlFor="input1a">{moment(element.Departure).format("DD/MM/yyyy")}</span>

                                        </div>
                                      </Col>
                                      <Col sm={12}>
                                        <div className="ftv-field">
                                          <label htmlFor="input3">Airport of Arrival</label>
                                          <span htmlFor="input1a">{element.AirportOf_Arrival}</span>

                                        </div>
                                      </Col>

                                    </Row>

                                    <Row className='gutters5'>

                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input1a">Phone Number</label>
                                          <span htmlFor="input1a">{element.Phone_Number}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input2a">E-mail</label>
                                          <span htmlFor="input1a">{element.Email}</span>
                                        </div>
                                      </Col>
                                      <Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input3">City</label>
                                          <span htmlFor="input1a">{element.City}</span>
                                        </div>
                                      </Col><Col sm={4}>
                                        <div className="ftv-field">
                                          <label htmlFor="input3">Address</label>
                                          <span htmlFor="input1a">{element.Address}</span>
                                        </div>
                                      </Col>

                                    </Row>
                                  </Container>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          ))}
                        </Accordion>

                      </Modal.Body>
                    </Modal>
                    <Modal
                      show={this.state.showWebCamModal}
                      onHide={() => this.setState({ showWebCamModal: false })}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          {this.state.currentActiveWebCamName}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div style={{ alignItems: 'center' }}>
                          {this.state.captureImageSrc === '' ?
                            <Webcam
                              //fullscreen={true}
                              audio={true}
                              height={400}
                              screenshotFormat="image/jpeg"
                              width={500}
                              videoConstraints={this.videoConstraints}
                            >
                              {({ getScreenshot }) => (
                                <div className='text-center'><button className='btn btn-secondary'
                                  onClick={() => {
                                    const imageSrc = getScreenshot();
                                    this.setState({ captureImageSrc: imageSrc });
                                  }}
                                >
                                  Capture photo
                                </button></div>
                              )}
                            </Webcam>
                            : <> <img src={this.state.captureImageSrc}
                            /> <div className='text-center'><button className='btn btn-secondary'
                              onClick={() => {
                                console.log(this.state.currentActiveWebCamIndex, this.state.captureImageSrc, this.state.currentActiveWebCamName)
                                this.handleCaptureImageChange(this.state.currentActiveWebCamIndex, this.state.captureImageSrc, this.state.currentActiveWebCamName);
                              }}
                            >
                              Upload photo
                            </button></div> </>
                          }
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>



                  {this.state.showAlert ? <> <br />  <Alert key='warning' variant='warning'> Some field is empty/null.
                  </Alert> </> : ''}

                  {this.state.travellerCount <= 5 ? <button className='btn3 d-block w-100 mt-4' type='button' onClick={this.addFormFields}>+ Add Traveller</button> : <button className='btn3 d-block w-100 mt-4' type='button' >+ You can Add Max 5 Traveller</button>}

                  <button className='btn3 d-block w-100 mt-4' type='button' onClick={this.submitTravellerInfo}>Continue to Payment</button>
                  {/* {JSON.parse(localStorage.getItem('loginDetails')).email == '' ? <button className='btn3 d-block w-100 mt-4' type='button' onClick={this.handleShow}>Continue to Payment1</button> : <button className='btn3 d-block w-100 mt-4' type='button' onClick={this.submitTravellerInfo}>Continue to Payment2</button>} */}




                </form>

              </Col>
              <Col sm={12} md={4} lg={4}>

                <div className='card'>
                  <div className='card-header bg-white'>
                    <h3>Order Summary <span>{this.state.travellerCount >= 1 ? '' + this.state.travellerCount : ' '}</span></h3>
                  </div>
                  <figure> <LazyLoadImage src={'https://cms.fasttrackvisa.com/' + this.props.checkoutpage[0].imageurl} className="img-fluid" /></figure>
                  <ul className="plan-Summary">
                    <li className='planname'>{this.props.checkoutpage[0].title}</li>
                    <li>
                      <div className='card card-body p-2 mb-2'>{this.props.checkoutpage[0].duration} Single Entry Visa</div>
                    </li>
                    <li className='d-flex'><span>Embassy Fees</span> <span className='font-weight-bold'> {this.props.checkoutpage[0].currency_icon} {this.props.checkoutpage[0].embassey_fee} </span></li>
                    {/* <li className='d-flex'><span>Processing Fees</span> <span className='font-weight-bold'> {this.props.checkoutpage[0].currency_icon} {this.props.checkoutpage[0].duration} </span></li> */}
                    <li className='d-flex'><span>Total Fees</span> <strong>{this.props.checkoutpage[0].currency_icon} {this.props.checkoutpage[0].price}</strong></li>




                    <li className='pd'>Processing details</li>
                    <li className='d-flex'><span>Citizenship</span> <span>
                      {this.state.p_origin === null ? this.props.checkoutpage[0].country_site : this.state.p_origin
                      }
                    </span></li>

                    <li className='d-flex'><span>Residency</span> <span> {this.state.p_origin
                      === null ? this.props.checkoutpage[0].country_site : this.state.p_origin
                    }</span></li>
                    <li className='d-flex'><span>Destination</span> <span>
                      {this.props.checkoutpage[0].country}
                    </span></li>
                    <li className='d-flex'><span>Visat Type</span> <span>{this.props.checkoutpage[0].type}</span></li>
                    <li className='d-flex'><span>As fast as</span> <span>{this.props.checkoutpage[0].tat}</span></li>
                    <li className='d-flex'><span>Duration of stay</span> <span>up to {this.props.checkoutpage[0].duration}</span></li>


                    <li className='faq-page'>
                      <Accordion defaultActiveKey="0">

                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="0">
                          Specific Rule
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                          <div className='pt-1 pb-2'>
                            {
                              this.props.checkoutpage[0].specificrule === null ? '' : ReactHtmlParser(this.props.checkoutpage[0].specificrule)
                            }
                          </div>
                        </Accordion.Collapse>


                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="1">
                          General Information
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <div className='pt-1 pb-2'>
                            {
                              this.props.checkoutpage[0].grule === null ? '' : ReactHtmlParser(this.props.checkoutpage[0].grule)
                            }

                          </div>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} className="pl-0 font-weight-bold" eventKey="2">
                          Required documents
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                          <div className='pt-1 pb-2'>
                            <Row className=''>
                              <Col sm={12} md={6} lg={6}>


                                <p><img src="/img/Passport.png" width={25} title="Passport" /> Passport</p>
                                <p><img src="/img/Photograph.png" width={30} /> Photo</p>
                              </Col>

                            </Row>
                          </div>
                        </Accordion.Collapse>


                      </Accordion>

                    </li>

                  </ul>
                </div>


              </Col>

            </Row>
          </div>

        </Container>
        <LazyLoad offset={100}>
          <Footer ce_name=""></Footer>
        </LazyLoad>
      </>

    );
  }
}
export default Checkoutpage;