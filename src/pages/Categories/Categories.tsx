import React, { useEffect, useState } from "react";
import { categoryPageContent } from "./content";

import {
  StyledCategoryTabs,
  StyledContainer,
  StyledContent,
  StyledContentSection,
  StyledImageSection,
} from "./styled";

import { motion } from "framer-motion";

import LogoSVG from "../../assets/images/logo.svg";
import { AnimatePresence } from "framer-motion";

const Categories = (): JSX.Element => {
  const [activeTabIndex, setAdctiveTabIndex] = useState("category-01");

  const [displayContent, setDisplayContent] = useState(categoryPageContent[0]);

  useEffect(() => {
    setDisplayContent(
      categoryPageContent.filter((content) => content.id === activeTabIndex)[0]
    );
  }, [activeTabIndex]);

  return (
    <StyledContainer>
      <StyledContentSection>
        <h1>Categories</h1>

        {displayContent && (
          <StyledContent key={displayContent.id}>
            <h3>{displayContent.title}</h3>
            <p>{displayContent.description}</p>
            <button>Get Started</button>
          </StyledContent>
        )}

        <StyledCategoryTabs>
          {categoryPageContent.map((content) => (
            <motion.div
              key={content.id}
              className={content.id === activeTabIndex ? "active-tab" : ""}
              onClick={() => setAdctiveTabIndex(content.id)}
            >
              <img src={LogoSVG} alt="" />
              <p>{content.title}</p>
            </motion.div>
          ))}
        </StyledCategoryTabs>
      </StyledContentSection>

      <AnimatePresence>
        <StyledImageSection
          key={displayContent.id}
          initial={{ top: "-100%", right: "-630px" }}
          animate={{ top: "-15%", right: "0px" }}
          exit={{ top: "65%", right: "-630px" }}
        >
          <img src={displayContent.image} alt="" />
        </StyledImageSection>
      </AnimatePresence>
    </StyledContainer>
  );
};

export default Categories;
