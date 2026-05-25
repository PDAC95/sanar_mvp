import { Link } from "react-router-dom";
import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Sidebar from "../../component/sidebar";
import { blogdata2 } from "../../constant/alldata";

function BlogListSidebar() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Blog List Sidebar" bnrimage={IMAGES.bnr2} />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-12 m-b30 pe-xl-5">
                                <div className="row loadmore-content">
                                    {blogdata2.map((item, i) => (
                                        <div className="dz-card style-2 blog-half m-b35 wow fadeInUp" data-wow-delay={item.dealy} data-wow-duration="0.5s" key={i}>
                                            <div className="dz-media">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date">AUGUST 5, 2025</li>
                                                        <li className="post-author">By <Link to={"#"}>ClinicMaster</Link></li>
                                                        <li className="post-comments">2 COMMENTS</li>
                                                    </ul>
                                                </div>
                                                <h3 className="dz-title"><Link to={"#"}>{item.title}</Link></h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link to={"#"} className="btn icon-link-hover-end btn-primary radius-sm">
                                                    Read More <i className="feather icon-arrow-right" />
                                                </Link>
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
export default BlogListSidebar;