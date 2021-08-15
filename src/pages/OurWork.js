import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/the-racer2.jpg';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import { sliderContainer, sliderAnimation , pageAnimation, fadeAnimation, photoAnimation, lineAnimation } from '../animation';
import { UseScroll } from '../components/useScroll';
const OurWork = () => {
    const [element1,controls1] = UseScroll();
    const [element2, controls2] = UseScroll();
    const [element3, controls3] = UseScroll();
    return (
        <Work style={{ background: '#FFF' }} variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnimation}></Frame1>
                <Frame2 variants={sliderAnimation}></Frame2>
                <Frame3 variants={sliderAnimation}></Frame3>
                <Frame4 variants={sliderAnimation}></Frame4>
            </motion.div>
            <Movie ref={element1} variants={fadeAnimation} animate={controls1} initial="hidden">
                <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                    <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element2} variants={fadeAnimation} animate={controls2} initial="hidden">
                <motion.h2 variants={fadeAnimation}>The Racer</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide> 
                    <motion.img variants={photoAnimation} src={theracer} alt="theracer" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element3} variants={fadeAnimation} animate={controls3} initial="hidden">
                <motion.h2 variants={fadeAnimation}>Good Times</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                    <motion.img variants={photoAnimation} src={goodtimes} alt="goodtimes" />
                    </Hide>
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 928px){
        padding: 2rem 2rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background-color: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #ff8efb;
    z-index: 2;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
export default OurWork;