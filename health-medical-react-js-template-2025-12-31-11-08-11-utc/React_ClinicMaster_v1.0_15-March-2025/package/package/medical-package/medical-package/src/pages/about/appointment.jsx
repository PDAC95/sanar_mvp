import PageBanner from "../../component/pagebaner";
import ScrollTopButton from "../../component/scrolltotop";
import { IMAGES } from "../../constant/theme";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import AppointmentData from "../../component/appointment";
import Whychoose from "../../component/whychoose";
import Frequently from "../../component/frequently";
import Alllocation from "../../component/alllocation";

function Appointment() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title="Appointment" bnrimage={IMAGES.bnr2} />
                <AppointmentData />
                <section className="content-inner overlay-secondary-dark background-blend-luminosity bg-img-fix overflow-hidden" style={{ backgroundImage: `URL(${IMAGES.bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <div className="container">
                        <Whychoose />
                    </div>
                </section>
                <Alllocation />
                <Frequently />
            </main>
            <Footer />
            <ScrollTopButton />
        </>
    );
}
export default Appointment;