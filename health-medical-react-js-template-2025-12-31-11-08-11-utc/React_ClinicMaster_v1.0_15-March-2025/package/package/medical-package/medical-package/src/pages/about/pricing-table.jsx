import Frequently from "../../component/frequently";
import PageBanner from "../../component/pagebaner";
import Pricing from "../../component/pricing";
import RealPatient from "../../component/realpatient";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";

function PricingTable() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Pricing Table" bnrimage={IMAGES.bnr1} />
                <section className="content-inner">
                    <div className="container">
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
export default PricingTable;