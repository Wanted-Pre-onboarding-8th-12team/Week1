import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Auth from "@pages/Auth";
import ToDo from "@pages/ToDo";

import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<App />}>
        <Route index element={<Auth />} />
        <Route path='todo' element={<ToDo />} />
      </Route>
    </Route>,
  ),
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
