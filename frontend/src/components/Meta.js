import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop | Home",
  description: "We sell the best products with the best price",
  keywords:
    "electronics, buy electronics, cheap electronics, buy devices, devices",
};

export default Meta;
