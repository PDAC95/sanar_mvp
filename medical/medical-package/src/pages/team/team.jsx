import { useState } from "react";
import Frequently from "../../component/frequently";
import MeetDr from "../../component/meetdr";
import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Link } from "react-router-dom";
import { empolydata } from "../../constant/alldata";

function Team() {
    const [active, setActive] = useState(1);
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Team" bnrimage={IMAGES.bnr2} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {empolydata.map((item, i) => (
                                <div className="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay={item.delay} data-wow-duration="0.8s" key={i}>
                                    <div className={active === item.id ? "dz-team style-1 active box-hover" : "dz-team style-1 box-hover"} onMouseEnter={() => setActive(item.id)}>
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
                                            <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link to="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link to="https://x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                            <li><Link to="https://www.youtube.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <MeetDr />
                <Frequently />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default Team;