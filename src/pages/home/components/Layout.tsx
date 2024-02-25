import { Section } from "@/components/Elements";
import { Head } from "@/components/Head";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export const HomePageLayout = ({
  title,
  description,
  children,
}: LayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <Section className="bg-white">{children}</Section>
    </>
  );
};
