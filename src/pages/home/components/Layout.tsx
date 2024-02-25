import { Section } from "@/components/Elements";
import { Head } from "@/components/Head";
import { ReactNode } from "react";
import { Header } from "./Header";

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
      <Header />
      <Section className="bg-white tracking-[-0.10em] font-mono">
        {children}
      </Section>
    </>
  );
};
