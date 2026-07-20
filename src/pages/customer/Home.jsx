import HeroSection from "../../components/customer/HeroSection";

function Home() {
    return (
        <>
            <HeroSection />

            <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>Everything below Hero works</h1>
            </div>
        </>
    );
}

export default Home;