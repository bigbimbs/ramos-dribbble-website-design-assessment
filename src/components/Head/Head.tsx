import { memo } from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = Partial<{
  title?: string;
  description?: string;
}>;

const HeadComponent = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    // <Helmet
    //   title={title ? `${title} | Afrinvest` : undefined}
    //   defaultTitle="Afrinvest"
    // >
    <meta name="description" content={description} />
    // </Helmet>
  );
};

export const Head = memo(HeadComponent);
