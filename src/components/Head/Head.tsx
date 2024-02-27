import { memo } from "react";

type HeadProps = Partial<{
  title?: string;
  description?: string;
}>;

const HeadComponent = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export const Head = memo(HeadComponent);
