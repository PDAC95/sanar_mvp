import { Link } from "react-router-dom";
import { locationdata } from "../constant/alldata";

function Alllocation() {
    return (
        <>
            <section className="content-inner bg-light bg-opacity-50">
                <div className="container">
                    <div className="section-head style-3">
                        <h2 className="title m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">All Locations</h2>
                    </div>
                    <div className="row content-wrapper">
                        {locationdata.map((data, i) => (
                            <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                <div className="content-bx style-6 shadow-sm">
                                    <div className="dz-media">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" style={{ border: 0, width: '100%', height: '100%', marginBottom: '-8px' }} allowFullScreen></iframe>
                                    </div>
                                    <div className="dz-info">
                                        <div className="clearfix">
                                            <h3 className="title m-b20">{data.title}</h3>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Address:</h4>
                                                <p>123 Health Way, Suite 456 Goodland, 78910 United States</p>
                                            </div>
                                            <div className="m-b15">
                                                <h4 className="m-b5 font-16">Service Time:</h4>
                                                <p>Mon -Sat: 7:00 - 17:00</p>
                                            </div>
                                        </div>
                                        <div className="dz-footer">
                                            <Link to="https://www.google.com/maps/" target="_blank" className="icon-link-hover-end">Get Directions <i className="feather icon-arrow-up-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Alllocation;