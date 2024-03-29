import React, { Suspense } from "react";
import {
  Routes,
  Route,
  useSearchParams,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import routes from "./routes";

function Element(props) {
  let { component: Component } = props;
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();
  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  );
}

function createRoute(routes) {
  return (
    <>
      {routes.map((item) => {
        let { name, path, children } = item;
        return (
          <Route key={name} path={path} element={<Element {...item} />}>
            {Array.isArray(children) ? createRoute(children) : null}
          </Route>
        );
      })}
    </>
  );
}

export default function RouterView() {
  return (
    <Suspense fallback={<div>处理中...</div>}>
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  );
}
