import HeroSection from "../../components/customer/HeroSection";
import FeaturedServices from "../../components/customer/FeaturedServices";
import WhyChooseUs from "../../components/customer/WhyChooseUs";
import BarbersSection from "../../components/customer/BarbersSection";
import Testimonials from "../../components/customer/Testimonials";
import CTASection from "../../components/customer/CTASection";
import AboutSection from "../../components/customer/AboutSection";
import Footer from "../../components/customer/Footer";

function Home() {
    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* Featured Services */}
            <FeaturedServices />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Meet the Barbers */}
            <BarbersSection />

            {/* About */}
            <AboutSection />

            {/* Testimonials */}
            <Testimonials />

            {/* Call To Action */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;