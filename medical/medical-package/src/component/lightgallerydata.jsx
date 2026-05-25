import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function Lightgallerydata() {
    return (
        <>
            <div className="overflow-hidden">
                <LightGallery
                    zoom={true}
                    thumbnail={true}
                    thumbnailHeight={80}
                    thumbnailWidth={80}
                    plugins={[lgThumbnail, lgZoom]}
                    selector='.lightimg'
                >
                    <div className="dz-img-wrapper" id="lightgallery">
                        <div className="left-wrapper">
                            <div className="dz-media media-lg">
                                <Link to={IMAGES.portfolio1} data-src={IMAGES.portfolio1} className="lg-item lightimg">
                                    <img src={IMAGES.portfolio1} alt="" />
                                </Link>
                            </div>
                            <div className="media-inner">
                                <div className="dz-media media-md">
                                    <Link to={IMAGES.portfolio2} data-src={IMAGES.portfolio2} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio2} alt="" />
                                    </Link>
                                </div>
                                <div className="dz-media media-sm">
                                    <Link to={IMAGES.portfolio3} data-src={IMAGES.portfolio3} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio3} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <div className="media-inner">
                                <div className="dz-media media-sm">
                                    <Link to={IMAGES.portfolio4} data-src={IMAGES.portfolio4} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio4} alt="" />
                                    </Link>
                                </div>
                                <div className="dz-media media-md">
                                    <Link to={IMAGES.portfolio5} data-src={IMAGES.portfolio5} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio5} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="dz-media media-lg">
                                <Link to={IMAGES.portfolio6} data-src={IMAGES.portfolio6} className="lg-item lightimg">
                                    <img src={IMAGES.portfolio6} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="left-wrapper">
                            <div className="dz-media media-lg">
                                <Link to={IMAGES.portfolio1} data-src={IMAGES.portfolio1} className="lg-item lightimg">
                                    <img src={IMAGES.portfolio1} alt="" />
                                </Link>
                            </div>
                            <div className="media-inner">
                                <div className="dz-media media-md">
                                    <Link to={IMAGES.portfolio2} data-src={IMAGES.portfolio2} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio2} alt="" />
                                    </Link>
                                </div>
                                <div className="dz-media media-sm">
                                    <Link to={IMAGES.portfolio3} data-src={IMAGES.portfolio3} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio3} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <div className="media-inner">
                                <div className="dz-media media-sm">
                                    <Link to={IMAGES.portfolio4} data-src={IMAGES.portfolio4} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio4} alt="" />
                                    </Link>
                                </div>
                                <div className="dz-media media-md">
                                    <Link to={IMAGES.portfolio5} data-src={IMAGES.portfolio5} className="lg-item lightimg">
                                        <img src={IMAGES.portfolio5} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="dz-media media-lg">
                                <Link to={IMAGES.portfolio6} data-src={IMAGES.portfolio6} className="lg-item lightimg">
                                    <img src={IMAGES.portfolio6} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </LightGallery >
            </div >
        </>
    )
}
export default Lightgallerydata;