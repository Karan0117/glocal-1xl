import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  margin: 24px 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

export const StyledContentSection = styled.div`
  overflow-x: hidden;
  width: 50%;
  h1 {
    font-family: var(--playfair);
    line-height: 53.32px;
    letter-spacing: 0.05em;
    margin-bottom: 82px;
  }

  h3 {
    font-size: 24px;
    line-height: 28.13px;
    letter-spacing: 0.05em;
    font-weight: 700;
    margin-bottom: 14px;
  }
`;

export const StyledContent = styled(motion.div)`
  margin-bottom: 90px;

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    letter-spacing: 0.05em;
    margin-bottom: 14px;
  }
`;

export const StyledCategoryTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 150;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 40px;
    gap: 3px;
    border-radius: 6px;
    padding-right: 10px;

    cursor: pointer;

    img {
      height: 100%;
    }
    p {
      font-family: Roboto;
      font-size: 20px;
      font-weight: 700;
      line-height: 23.44px;
      text-align: left;
    }
  }

  div.active-tab {
    background: var(--complementary-dark-green);
    color: var(--white);
  }
`;

export const StyledImageSection = styled(motion.div)`
  width: 650px;
  position: absolute;
`;
