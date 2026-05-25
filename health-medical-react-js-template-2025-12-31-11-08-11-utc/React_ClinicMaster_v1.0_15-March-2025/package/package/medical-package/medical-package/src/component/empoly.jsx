import { useState } from "react";
import { Link } from "react-router-dom";
import { empolydata } from "../constant/alldata";

function Empoly() {
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="row">
                {empolydata.slice(0, empolydata.length - 4).map((data, i) => (
                    <div className="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className={`dz-team style-1 box-hover ${active === data.id ? 'active' : ''}`} onMouseEnter={() => setActive(data.id)}>
                            <div className="dz-media">
                                <img src={data.image} alt="/" />
                                <Link to="/appointment" className="btn btn-primary">
                                    <i className="feather icon-calendar m-r5" /> Appointment Now
                                </Link>
                            </div>
                            <div className="dz-content">
                                <div className="clearfix">
                                    <h3 className="dz-name"><Link to="/team-detail">{data.title}</Link></h3>
                                    <span className="dz-position">{data.position}</span>
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
            </div >
        </>
    )
}
export default Empoly;