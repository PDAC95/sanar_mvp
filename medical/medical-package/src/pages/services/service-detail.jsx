import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { accordiondata, empolydata, servicedetails, worldclasslistdata } from "../../constant/alldata";

function ServiceDetail() {
    const [active, setActive] = useState(1);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Service Detail" bnrimage={IMAGES.bnr2} />
                <section className="content-inner service-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-inner order-lg-1">
                                <div className="single-media dz-media single-media height-sm radius-lg wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.7s">
                                    <img src={IMAGES.bloggrid2} alt="" className="object-fit-cover" />
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                    <h2>Angioplasty</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.7s">
                                    <h3>Steps in Angioplasty</h3>
                                    <ul className="list-check text-secondary grid-2 m-b30">
                                        {worldclasslistdata.map((item, i) => (
                                            <li key={i}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">
                                    <h3>Available Doctors Under Surgery</h3>
                                    <div className="row">
                                        {empolydata.slice(0, empolydata.length - 5).map((item, i) => (
                                            <div className="col-xxl-4 col-sm-6" key={i}>
                                                <div className={`dz-team style-1 box-hover ${active === item.id ? 'active' : ''}`} onMouseEnter={() => setActive(item.id)}>
                                                    <div className="dz-media">
                                                        <img src={item.image} alt="/" />
                                                        <Link to="/appointment" className="btn btn-primary">
                                                            <i className="feather icon-calendar m-r5" /> Appointment Now
                                                        </Link>
                                                    </div>
                                                    <div className="dz-content">
                                                        <div className="clearfix">
                                                            <h3 className="dz-name"><Link to="/team-detail">{item.title}</Link></h3>
                                                            <span className="dz-position">{item.position}</span>
                                                        </div>
                                                        <Link to="/team-detail" className="btn btn-square btn-secondary">
                                                            <i className="feather icon-arrow-right" />
                                                        </Link>
                                                    </div>
                                                    <ul className="dz-social">
                                                        <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"> <i className="fa-brands fa-linkedin" /></Link></li>
                                                        <li><Link to="https://www.instagram.com/dexignzone" target="_blank"> <i className="fa-brands fa-instagram" /></Link></li>
                                                        <li><Link to="https://www.facebook.com/dexignzone" target="_blank"> <i className="fa-brands fa-facebook-f" /></Link></li>
                                                        <li><Link to="https://x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /></Link></li>
                                                        <li><Link to="https://www.youtube.com/@dexignzone" target="_blank"> <i className="fa-brands fa-youtube" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="content-item wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                                    <h3>Frequently asked questions</h3>
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i} className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.7s">
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top left">
                                    <div className="widget service_menu_nav bg-secondary wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">
                                        <div className="widget-title">
                                            <h4 className="title">All Services</h4>
                                        </div>
                                        <ul>
                                            {servicedetails.map((item, i) => (
                                                <li key={i} className={item.columnstand}><Link to="/service-detail">{item.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="widget_contact wow fadeInUp" style={{ backgroundImage: `url(${IMAGES.bg3png})` }} data-wow-delay="0.4s" data-wow-duration="0.7s">
                                        <div className="widget-content">
                                            <img src={IMAGES.question} width="80" alt="" />
                                            <h4 className="title">Do you need any help?</h4>
                                            <div className="phone-number">
                                                <Link to="tel:+11234567890">+1 123 456 7890</Link>
                                            </div>
                                            <div className="email">
                                                <Link to="mailto:info@support.com">info@support.com</Link>
                                            </div>
                                            <div className="link-btn">
                                                <Link to="javascript:void(0);" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                                                    Contact Us <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default ServiceDetail;