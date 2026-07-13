import HeroSection from "../../components/customer/HeroSection";
import AboutSection from "../../components/customer/AboutSection";
import FeaturedServices from "../../components/customer/FeaturedServices";
import BarbersSection from "../../components/customer/BarbersSection";
import WhyChooseUs from "../../components/customer/WhyChooseUs";
import Testimonials from "../../components/customer/Testimonials";
import CTASection from "../../components/customer/CTASection";
import Footer from "../../components/customer/Footer";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <FeaturedServices />
            <BarbersSection />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <Footer />
        </>
    );
}

export default Home;