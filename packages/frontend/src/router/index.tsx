// 路由配置
import React from 'react';
import { useRoutes } from "react-router-dom";
import Layout from '../application/Layout';
import Document from '../application/Document';

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Document />
      },
      {
        path: 'doc',
        element: <Document />,
        // children: [
        //   {
        //     path: "/recommend/:id",
        //     element: <Album />
        //   }
        // ]
      },
    ]
  }
]

export default function Router() {
  return useRoutes(routes)
}
