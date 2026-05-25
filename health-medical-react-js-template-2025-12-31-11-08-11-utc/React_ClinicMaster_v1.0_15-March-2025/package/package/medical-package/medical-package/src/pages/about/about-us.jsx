import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import { Dropdown } from "react-bootstrap";
import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import WorldClass from "../../component/worldclass";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Lightgallerydata from "../../component/lightgallerydata";
import Whychoose from "../../component/whychoose";
import MeetDr from "../../component/meetdr";
import Empoly from "../../component/empoly";
import RealPatient from "../../component/realpatient";
import Schedule from "../../component/schedule";
import Clientswiper1 from "../../component/clientswiper1";
import Connect from "../../component/connect";
import Inspirational from "../../component/inspirational";
import emailjs from '@emailjs/browser'; 

function AboutUs() {
    const [selectCat, setSelectCat] = useState("Angioplasty");
    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_61hny88', 'template_vvlidif', form.current, {publicKey: 'aYOgb_ORYkjD-hXhl',})
        .then((result) => {
            console.log('SUCCESS!', result.text);
        },(error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="About Us" bnrimage={IMAGES.bnr1} />
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                <Lightgallerydata />
                <Inspirational />
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <MeetDr />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 m-b30 row align-items-end">
                            <div className="col-sm-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">We Employ only <br /> Specialists </h2>
                            </div>
                            <div className="col-sm-5 text-sm-end d-sm-block d-none wow fadeInUp" data-wow-delay="0.4s"
                                data-wow-duration="0.8s">
                                <Link to="/team" className="btn btn-icon btn-primary btn-shadow"> View All
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                        <Empoly />
                    </div>
                </section>
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <RealPatient />
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <div className="col-xl-5 m-b30" data-bottom-top="transform: translateY(50px)" data-top-bottom="transform: translateY(-50px)">
                                <div className="form-wrapper style-1">
                                    <div className="form-body bg-primary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg2png})` }}>
                                        <div className="title-head">
                                            <h2 className="form-title m-b0">Make An <span>Appointment</span> <br /> Apply For Treatments</h2>
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} className="dzForm" method="POST">
                                            <input type="hidden" className="form-control" name="dzToDo" value="Appointment" />
                                            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                                            <div className="dzFormMsg"></div>
                                            <div className="row">
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" />
                                                        <label htmlFor="inputYourName">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" />
                                                        <label htmlFor="inputYourEmail">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" />
                                                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <Dropdown className="form-control bs-select">
                                                            <Dropdown.Toggle as="div" >
                                                                {selectCat}
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item onClick={() => setSelectCat("Angioplasty")}>Angioplasty</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSelectCat("Cardiology")}>Cardiology</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSelectCat("Dental")}>Dental</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSelectCat("Eye Care")}>Eye Care</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 m-b30">
                                                    <div className="form-floating floating-underline input-light">
                                                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows="6" placeholder="Select Service"></textarea>
                                                        <label htmlFor="inputMessage">Message</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                        Appointment <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Schedule />
                <Clientswiper1 />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default AboutUs;