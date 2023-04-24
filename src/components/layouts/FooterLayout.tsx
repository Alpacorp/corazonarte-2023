import { FC } from "react";

interface FooterLayoutProps {
  children: React.ReactNode;
}

export const FooterLayout: FC<FooterLayoutProps> = ({ children }) => {
  return <div className="footer-layout">{children}</div>;
};
