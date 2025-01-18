import { ReactNode } from "react";
import Header from "./Header";

const layout = ({ children }: { children: ReactNode }) => {
  return <div>
    <Header />
    {children}
  </div>;
};

export default layout;
