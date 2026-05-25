import { IMAGES } from "../../constant/theme";
import Frequently from "../../component/frequently";
import PageBanner from "../../component/pagebaner";
import Schedule from "../../component/schedule";
import ScrollTopButton from "../../component/scrolltotop";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Connect from "../../component/connect";
import Getintouch from "../../component/getintouch";

function Faqs() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Faq's" bnrimage={IMAGES.bnr2} />
                <Frequently />
                <Schedule />
                <section className="content-inner">
                    <div className="container">
                        <div className="row g-xl-4 align-items-center">
                            <Connect />
                            <Getintouch />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default Faqs;