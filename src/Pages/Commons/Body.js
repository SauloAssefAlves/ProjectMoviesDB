import { Outlet } from "react-router";
import Header from "./Header";

export default function Body() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="p-4 max-w-full max-h-full  ">
        <Outlet />
      </div>
    </div>
  );
}
