import { lazy } from "react";

let routes = [
  {
    path: "/:a?",
    name: "MyUseEffect",
    component: lazy(() => import("../MyUseEffect")),
    meta: {
      worker: "Terraria",
    },
  },
  {
    path: "/state",
    name: "MyUseState",
    component: lazy(() => import("../MyUseState")),
    meta: {
      worker: "zenith",
    },
    children: [
      {
        path: "/state",
        name: "secondRouter-a",
        component: lazy(() => import("../router-erji/a")),
      },
      {
        path: "/state/a",
        name: "secondRouter-a",
        component: lazy(() => import("../router-erji/a")),
      },
      {
        path: "/state/b",
        name: "secondRouter-b",
        component: lazy(() => import("../router-erji/b")),
      },
      {
        path: "/state/c",
        name: "secondRouter-c",
        component: lazy(() => import("../router-erji/c")),
      },
    ],
  },
  {
    path: "/redux",
    name: "MyRedux",
    component: lazy(() => import("../views/ReduxStudy")),
    meta: {
      worker: "随风",
    },
  },
];

export default routes;
