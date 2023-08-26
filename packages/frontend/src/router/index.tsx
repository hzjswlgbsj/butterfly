// 路由配置
import React from 'react';
import { useRoutes } from "react-router-dom";
import Layout from '../application/Layout';
import Document from '../application/Document';
import Home from '../application/Home';

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'doc/:roomId',
        element: <Document />,
        // children: [
        //   {
        //     path: "/recommend/:id",
        //     element: <Album />
        //   }
        // ]
      },
      {
        index: true,
        element: <Home />
      },
    ]
  }
]

export default function Router() {
  return useRoutes(routes)
}
