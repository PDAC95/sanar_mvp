import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES, SVGICONS } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Sidebar from "../../component/sidebar";
import { blogdata } from "../../constant/alldata";

function BlogGrid() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Blog Grid" bnrimage={IMAGES.bnr2} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 m-b30 pe-xl-5">
                                <div className="row loadmore-content">
                                    {blogdata.map((item, i) => (
                                        <div className="col-lg-6 col-md-6 m-b25 wow fadeInUp" data-wow-delay={item.dealy} data-wow-duration="0.5s" key={i}>
                                            <div className="dz-card style-2 dz-card-overlay" style={{ backgroundImage: `url(${item.image})` }}>
                                                <div className="dz-info">
                                                    <div className="post-date">12 Jan 2025</div>
                                                    <div className="bottom-info">
                                                        <h3 className="dz-title"> <Link to="/blog-details">{item.title}</Link> </h3>
                                                        <Link to="/blog-details" className="btn btn-square btn-white rounded-circle"> {SVGICONS.uparrow2} </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-center m-t30 m-lg-t0 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.5s">
                                        <Link to={"#"} className="btn btn-lg btn-icon btn-primary dz-load-more" rel="ajax/blog-grid ">
                                            Load More <span className="right-icon"><i className="feather icon-refresh-ccw" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-12">
                                <Sidebar />
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
export default BlogGrid;