import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ScrollTopButton from "../../component/scrolltotop";
import WorldClass from "../../component/worldclass";
import Counter from "../../component/counter";
import ServiceBox from "../../component/servicebox";
import Whychoose from "../../component/whychoose";
import Empoly from "../../component/empoly";
import RealPatient from "../../component/realpatient";
import Howitwork from "../../component/howitwork";
import MeetDr from "../../component/meetdr";
import Frequently from "../../component/frequently";
import Award from "../../component/awards";
import StayInformed from "../../component/stayinformed";
import MapWraper from "../../component/mapwraper";
import AppointmentData from "../../component/appointment";
import Chart from 'react-apexcharts';

function Index() {
    const options = {
        series: [82],
        chart: {
            type: 'radialBar',
            offsetY: -15,
            height: '240px',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    size: '80%',
                },
                track: {
                    background: "var(--bs-primary-bg-subtle)",
                    strokeWidth: '80%',
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 15,
                        fontSize: '50px',
                        color: 'var(--bs-primary)',
                        fontWeight: '600',
                        fontFamily: 'var(--font-family-base)',
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round',
        },
        colors: ['var(--bs-primary)'],
    };
    return (
        <>
            <Header />
            <main className="page-content">
                <div className="hero-banner style-1" style={{ backgroundImage: `url(${IMAGES.herobannerbg1})`, backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="inner-wrapper">
                            <span className="text-vertical text-secondary">24/7 EMERGENCY SERVICE</span>
                            <div className="row align-items-end h-100">
                                <div className="col-lg-6 align-self-center">
                                    <div className="hero-content">
                                        <h1 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s"> Medical & <br />Health Care <span className="text-primary"> Services </span> <img src={IMAGES.herobannerline} alt="" /> </h1>
                                        <p className="text wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Your health is our top priority. Schedule an appointment with us today</p>
                                        <Link to="/appointment" className="btn btn-lg btn-icon btn-primary m-r20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <Link to="/contact-us" className="btn btn-lg btn-icon btn-secondary wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            Contact Us
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                    <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                        <img className="thumbnail" src={IMAGES.herobanner1} alt="" />
                                        <div className="circle-wrapper">
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <div className="item1">
                                                <img src={IMAGES.herobannerheart} alt="" />
                                            </div>
                                        </div>
                                        <div className="item2" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-1 move-3">
                                                <div className="avatar-group">
                                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="" />
                                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="" />
                                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="" />
                                                    <img className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="" />
                                                </div>
                                                <div className="clearfix ms-2">
                                                    <span className="number text-primary">150k</span>
                                                    <span>Patient recovers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-2 move-2">
                                                <div id="progressChart">
                                                    <Chart options={options} series={options.series} type="radialBar" height={options.chart.height} />
                                                </div>
                                                <div className="widget-content">
                                                    <h6 className="mb-0">Successfully diagnosis</h6>
                                                    <Link to="/team-detail" className="btn btn-square btn-outline-light text-primary rounded-circle">
                                                        <i className="feather icon-arrow-up-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item4" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                            <div className="info-widget style-3 move-1">
                                                <div className="widget-head">
                                                    <div className="widget-media">
                                                        <img src={IMAGES.smallavatar5} alt="" />
                                                    </div>
                                                    <div className="widget-content">
                                                        <h6 className="title">Dr. Natali jackson</h6>
                                                        <ul className="star-list">
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                            <li><i className="fa fa-star" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>“It is a long established fact that a reader will be distracted by the readable content”</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item5" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(30px)">
                                <div className="info-widget style-4 move-4">
                                    <div className="widget-media">
                                        <img src={IMAGES.smallavatar6} alt="" />
                                    </div>
                                    <div className="widget-content">
                                        <h6 className="title">Have a Question?</h6>
                                        <Link to="mailto:info@example.com">info@example.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg1png})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="container">
                        <WorldClass />
                    </div>
                </section>
                <Counter />
                <section className="content-inner-2 bg-light">
                    <div className="container">
                        <div className="section-head style-1 m-b30 row align-items-end">
                            <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">Start Feeling Your Best <br /> Explore Our Wellness Services </h2>
                            </div>
                            <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <Link to="/services" className="btn btn-icon btn-secondary"> View All
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                        <ServiceBox />
                    </div>
                </section>
                <AppointmentData />
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 m-b30 row align-items-end">
                            <div className="col-sm-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">We Employ only <br /> Specialists </h2>
                            </div>
                            <div className="col-sm-5 text-sm-end d-sm-block d-none wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
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
                <Howitwork />
                <MeetDr />
                <Frequently />
                <Award />
                <StayInformed />
                <MapWraper />
            </main >
            <Footer />
            <ScrollTopButton />
        </>
    )
}
export default Index;