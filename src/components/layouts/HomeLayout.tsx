import { FC } from "react";

import "./styles.css";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return <div className="home-layout">{children}</div>;
};
