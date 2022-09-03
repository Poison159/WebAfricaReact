import React from "react";
import MainSection from "../components/mainSection";
import FibreOptions from "../components/fibreOptions";
import Speed from "../components/speed";
import Hype from "../components/hype";
import Footer from "../components/footer";
import Faq from "../components/faq";

export const Home = () => {
    return(
        <>
            <MainSection/>
            <FibreOptions/>
            <Speed/>
            <Hype/>
            <Faq/>
            <Footer/>
        </>
    )
}
export default Home;