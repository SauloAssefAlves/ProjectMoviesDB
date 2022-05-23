import { Routes as RoutesAll, Route } from "react-router-dom";
import * as Pages from "./Pages";
import Body from "./Pages/Commons/Body";
import Router from "./Router";

export default function App() {
  return (
    <RoutesAll>
      <Route path="/" element={<Body />}>
        {Router.map((page) => <Route key={page.name} path={page.path} element={page.element} />)}
      </Route>
      <Route path="*" element={<Pages.NotFound />} />
    </RoutesAll>
  );
}
