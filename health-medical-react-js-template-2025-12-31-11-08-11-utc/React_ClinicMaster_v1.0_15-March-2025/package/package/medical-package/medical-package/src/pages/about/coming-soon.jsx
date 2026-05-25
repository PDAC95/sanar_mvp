import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Countdown from 'react-countdown';
import emailjs from '@emailjs/browser'; 
import { useRef } from "react";

function Comingsoon({ }) {
    const targetDate = new Date('2025-04-01T23:59:59');
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Time's up!</span>;
        } else {
            return (
                <div className="d-flex">
                    <div className="date">
                        <span className="time" id="day">{days}</span>
                        <span className="text"> Days</span>
                    </div>
                    <div className="date">
                        <span className="time" id="hour">{hours}</span>
                        <span className="text">Hours</span>
                    </div>
                    <div className="date">
                        <span className="time" id="min">{minutes}</span>
                        <span className="text">Minutes</span>
                    </div>
                    <div className="date">
                        <div className="time lost" id="second">{seconds}</div>
                        <span className="text">Seconds</span>
                    </div>
                </div>
            );
        }
    };
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
            <main className="page-content">
                <section className="dz-coming-soon">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 px-0">
                            <div className="dz-coming-bx">
                                <div className="top-wrapper">
                                    <div className="coming-soon-logo">
                                        <Link to="/"><img src={IMAGES.logo} alt="" /></Link>
                                    </div>
                                    <div className="dz-content">
                                        <h2 className="dz-title pe-xl-4">We Are <br /> Coming Soon</h2>
                                        <div className="countdown">
                                            <Countdown date={targetDate} renderer={renderer} />
                                        </div>
                                        <p>Big things are coming! ClinicMaster will be opening its doors soon. Be the first to experience something special!</p>
                                        <form className="dzSubscribe style-3" ref={form} onSubmit={sendEmail} method="post">
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="form-group">
                                                <div className="input-group mb-0">
                                                    <input name="dzEmail" required="required" type="email" className="form-control" placeholder="enter Your Email Address" />
                                                    <div className="input-group-addon">
                                                        <button name="submit" value="Submit" type="submit" className="btn btn-primary btn-hover1">
                                                            <span className="btn-text">Subscribe Now</span>
                                                            <span className="btn-icon">
                                                                <i className="fa-solid fa-paper-plane" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="bottom-wrapper">
                                    <div className="dz-social-icon style-4 m-b20">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link to="https://x.com/dexignzone" target="_blank"><i className="fa-brands fa-twitter" /></Link></li>
                                            <li><Link to="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link to="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                    <p className="copyright-text m-0">© <span className="current-year">2025</span> <Link to="https://themeforest.net/user/dexignzone">DexignZone</Link> Theme. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 px-0">
                            <div className="dz-coming-media">
                                <img src={IMAGES.comingsoon} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Comingsoon;