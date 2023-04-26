import { FC } from "react";

import "./styles.css";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return <main className="home-layout">{children}</main>;
};
