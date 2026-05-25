import { Link } from "react-router-dom";
import { sidebarpostdata, tagdata } from "../constant/alldata";

function Sidebar() {
    return (
        <>
            <aside className="side-bar sticky-top @@dir m-b30 p-0">
                <div className="widget wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.5s">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
                            <div className="input-group">
                                <input name="text" className="form-control" placeholder="Search" type="text" />
                                <div className="input-group-btn">
                                    <button type="submit">
                                        <i className="feather icon-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="widget widget_categories style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                    <div className="widget-title">
                        <h4 className="title">Category</h4>
                    </div>
                    <ul>
                        {tagdata.map((data, i) => (
                            <li className="cat-item" key={i}><Link to={"#"}>{data.title}</Link> {data.num}</li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-posts-entry wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                    <div className="widget-title">
                        <h4 className="title">Latest Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {sidebarpostdata.map((data, i) => (
                            <div className="widget-post clearfix" key={i}>
                                <div className="dz-media">
                                    <img src={data.image} alt="/" />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to={"#"}>17 May 2025</Link></li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><Link to="/blog-details">The Art of Managing Business and Patient Care</Link></h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.5s">
                    <div className="widget-title">
                        <h4 className="title">Tags</h4>
                    </div>
                    <div className="tagcloud">
                        {tagdata.map((data, i) => (
                            <Link to={"#"} key={i}>{data.title}</Link>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}
export default Sidebar;