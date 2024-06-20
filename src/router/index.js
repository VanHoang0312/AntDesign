import LayoutDefault from "../layout/LayoutDefault";
import Bookroom from "../pages/Bookroom";
import CreateRoom from "../pages/CreateRoom";
import Dashboard from "../pages/Dashboard";
import ListRoom from "../pages/ListRoom";




export const router = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/bookroom",
        element: <Bookroom/>
      },
      {
        path: "/createroom",
        element: <CreateRoom/>
      },
      {
        path: "/listroom",
        element: <ListRoom/>
      },
    ]
  }
];