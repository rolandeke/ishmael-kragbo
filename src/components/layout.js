import { Filter } from "./filter";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-20">
      <Filter />
      <main>{children}</main>
    </div>
  );
};
