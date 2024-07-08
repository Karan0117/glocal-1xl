import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled.div`
  top: 107;
  right: 0;
  bottom: 0;
  left: 0;
  height: 500vh;
`;

export const StyledSection = styled(motion.div)`
  position: relative;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;

  p.title {
    font-family: var(--playfair);
    font-size: 96px;
    font-weight: 700;
    line-height: 127.97px;
    letter-spacing: 0.05em;
    z-index: -100;
    position: fixed;
    left: 100;
  }

  p.sub-text {
    font-family: var(--playfair);
    font-size: 40px;
    font-weight: 700;
    line-height: 53.32px;
    position: fixed;
    width: 40%;
    text-align: center;
    left: 155px;
    top: -150px;
    z-index: -60;
  }

  img {
    /* position: absolute; */
    position: fixed;
    pointer-events: none;
    filter: brightness(1.1);
  }

  .dog2-blue-bg {
    top: 130px;
    right: 0px;
    transform: translateX(50px);
    z-index: -90;
  }

  .cat-light-blue {
    top: 190px;
    right: 530px;
    z-index: -70;
  }

  .dog3-orange-bg {
    top: 160px;
    right: 205px;
    z-index: -50;
    scale: 0.9;
  }

  .dog4-green-bg {
    bottom: 10px;
    right: 75px;
    width: 280px;
    z-index: -100;
  }

  .dog1-yellow-bg {
    right: 430px;
    bottom: 19px;
    width: 273px;
    z-index: -85;
  }
`;
