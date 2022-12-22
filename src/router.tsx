import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ToDo from "@pages/ToDo";

import App from "./App";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import { loginAction } from "./utils/actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<App />}>
        <Route index element={<Login />} action={loginAction} />
        <Route path='join' element={<Join />} />
        <Route path='todo' element={<ToDo />} />
      </Route>
    </Route>,
  ),
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
