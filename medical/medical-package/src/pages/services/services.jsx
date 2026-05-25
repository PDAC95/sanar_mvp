import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import ServiceBox from "../../component/servicebox";
import Whychoose from "../../component/whychoose";
import Pricing from "../../component/pricing";
import RealPatient from "../../component/realpatient";
import Frequently from "../../component/frequently";

function Services() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Services" bnrimage={IMAGES.bnr2} />
                <section className="content-inner bg-light" style={{ backgroundImage: `url(${IMAGES.bg5png})` }}>
                    <div className="container">
                        <ServiceBox />
                    </div>
                </section>
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.7s">Choose Your Optimal Plan</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.7s">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <Pricing />
                    </div>
                </section>
                <section className="clearfix p-t50 overlay-secondary-dark bg-primary background-blend-multiply overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <RealPatient />
                </section>
                <Frequently />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default Services;