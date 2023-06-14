// 路由配置
import React from 'react';
import { useRoutes } from "react-router-dom";
import Plate from '../application/Plate';
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
        path: 'editor',
        element: <Plate />,
      },
    ]
  }
]

export default function Router() {
  return useRoutes(routes)
}
