import React from "react";
import { StyledContainer, StyledSection } from "./styled";
import Cat1LightBlueBG from "../../assets/images/homePage/cat1-light-blue-bg.svg";
import Dog1YellowBG from "../../assets/images/homePage/dog1-yellow-bg.svg";
import Dog2BlueBG from "../../assets/images/homePage/dog2-blue-bg.svg";
import Dog3OrangeBG from "../../assets/images/homePage/dog3-orange-bg.svg";
import Dog4GreenBG from "../../assets/images/homePage/dog4-green-bg.svg";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Home = (): JSX.Element => {
  const { scrollYProgress } = useScroll();

  const topPositionDogBlue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [130, 188, 188, 190, 432]
  );
  const rightPositionDogBlue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 125, 220, 80]
  );
  const scaleDogBlue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1, 1, 1, 0.9]
  );
  const rotationBlueDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0deg", "0deg", "0deg", "6deg", "20deg"]
  );

  const bottomPositionDogGreen = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [10, 145, 145, 145, 157]
  );

  const rightPositionDogGreen = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [75, 75, 75, 213, 125]
  );

  const rotationDogGreen = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0deg", "0deg", "0deg", "-5deg", "10deg"]
  );

  const rightPositionLightBlueCat = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [530, 530, 442, 315, 345]
  );

  const topPositionLightBlueCat = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [190, 190, 190, 175, 195]
  );

  const rotateLightBlueCat = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    ["0deg", "0deg", "0deg", "-8deg"]
  );

  const scaleLightBlueCat = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [1, 1, 1, 0.9]
  );

  const topPositionOrangeDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [160, 160, 160, 160, 300]
  );

  const rightPositionLightOrangeDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [205, 205, 205, 205, 465]
  );

  const scaleOrangeDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [1, 1, 1, 1.05]
  );

  const rotationOrangeDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0deg", "0deg", "0deg", "0deg", "-20deg"]
  );

  const rightPositionYellowDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [430, 430, 430, 300, 205]
  );

  const bottomPositionYellowDog = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [19, 19, 145, 135, 230]
  );

  const scaleDogYellow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [1, 1, 1, 0.9]
  );
  const rotationBlueYellow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0deg", "0deg", "0deg", "9deg", "-6deg"]
  );

  const leadTextMotionStyle = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [150, -355, -600, -1270]
  );

  const subTextMotionTop = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-150, -150, -150, 350, 450]
  );

  return (
    <StyledContainer>
      <StyledSection>
        <motion.img
          className="cat-light-blue"
          style={{
            right: rightPositionLightBlueCat,
            top: topPositionLightBlueCat,
            rotate: rotateLightBlueCat,
            scale: scaleLightBlueCat,
          }}
          src={Cat1LightBlueBG}
          alt=""
        />
        <motion.img
          style={{
            right: rightPositionYellowDog,
            bottom: bottomPositionYellowDog,
            scale: scaleDogYellow,
            rotate: rotationBlueYellow,
          }}
          className="dog1-yellow-bg"
          src={Dog1YellowBG}
          alt=""
        />
        <motion.img
          style={{
            top: topPositionDogBlue,
            right: rightPositionDogBlue,
            rotate: rotationBlueDog,
            scale: scaleDogBlue,
          }}
          className="dog2-blue-bg"
          src={Dog2BlueBG}
          alt=""
        />
        <motion.img
          style={{
            top: topPositionOrangeDog,
            right: rightPositionLightOrangeDog,
            scale: scaleOrangeDog,
            rotate: rotationOrangeDog,
          }}
          className="dog3-orange-bg"
          src={Dog3OrangeBG}
          alt=""
        />
        <motion.img
          style={{
            bottom: bottomPositionDogGreen,
            right: rightPositionDogGreen,
            rotate: rotationDogGreen,
          }}
          className="dog4-green-bg"
          src={Dog4GreenBG}
          alt=""
        />

        <motion.p style={{ left: leadTextMotionStyle }} className="title">
          Taking care for your pets !
        </motion.p>
        <motion.p style={{ top: subTextMotionTop }} className="sub-text">
          Get various services personalized for your pets like
        </motion.p>
      </StyledSection>
    </StyledContainer>
  );
};

export default Home;
