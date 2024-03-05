import React from "react";

import {
  Theme,
  Banner,
  WhatWeDo,
  WhoWeAre,
  CompletedProjects,
  Contact,
} from "@components/layout";
import { ResolutionType, useWindowResolutionType } from "@hooks";
import Review from "../components/home/Review";

const IndexPage = () => {
  const resolutionType: ResolutionType = useWindowResolutionType();

  return (
    <Theme>
      <Banner resolutionType={resolutionType} />
      <WhatWeDo />
      <WhoWeAre />
      <CompletedProjects />
      <Review />
      <Contact />
    </Theme>
  );
};

export default IndexPage;
