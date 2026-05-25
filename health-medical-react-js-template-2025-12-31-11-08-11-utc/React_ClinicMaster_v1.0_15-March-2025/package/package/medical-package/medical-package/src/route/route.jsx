import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/home";
import AboutUs from "../pages/about/about-us";
import Appointment from "../pages/about/appointment";
import PricingTable from "../pages/about/pricing-table";
import PatientInfo from "../pages/about/patient-info";
import Testimonial from "../pages/about/testimonial";
import Faqs from "../pages/about/faqs";
import Error404 from "../pages/about/error-404";
import Comingsoon from "../pages/about/coming-soon";
import UnderConstruction from "../pages/about/under-construction";
import Team from "../pages/team/team";
import TeamDetail from "../pages/team/team-detail";
import Services from "../pages/services/services";
import ServiceDetail from "../pages/services/service-detail";
import BlogGrid from "../pages/blogs/blog-grid";
import BlogListSidebar from "../pages/blogs/blog-list-sidebar";
import BlogDetail from "../pages/blogs/blog-details";
import Contactus from "../pages/contectus/contact-us";
import Scroll from "../component/scroll";

export default function Root() {
    return (
        <>
            <div className="page-wraper">
                <BrowserRouter>
                    <Scroll/>
                    <Routes>
                        <Route path="/" exact element={<Index />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="appointment" element={<Appointment />} />
                        <Route path="pricing-table" element={<PricingTable />} />
                        <Route path="patient-info" element={<PatientInfo />} />
                        <Route path="testimonial" element={<Testimonial />} />
                        <Route path="faqs" element={<Faqs />} />
                        <Route path="error-404" element={<Error404 />} />
                        <Route path="coming-soon" element={<Comingsoon />} />
                        <Route path="under-construction" element={<UnderConstruction />} />
                        <Route path="team" element={<Team />} />
                        <Route path="team-detail" element={<TeamDetail />} />
                        <Route path="services" element={<Services />} />
                        <Route path="service-detail" element={<ServiceDetail />} />
                        <Route path="blog-grid" element={<BlogGrid />} />
                        <Route path="blog-list-sidebar" element={<BlogListSidebar />} />
                        <Route path="blog-details" element={<BlogDetail />} />
                        <Route path="contact-us" element={<Contactus />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}