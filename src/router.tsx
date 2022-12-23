import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Auth from "./pages/Auth";
import Error from "./pages/Error";
import { Join } from "./pages/Join";
import { Login } from "./pages/Login";
import Todo, { todoLoader } from "./pages/Todo";
import { joinAction, loginAction } from "./utils/actions";
import { todoAction } from "./utils/actions/todo"
import { withAction } from "./utils/actions/todo/withAction"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error />}>
      <Route element={<App />}>
        <Route
          index
          element={
            <Auth to='/todo' login={true}>
              <Login />
            </Auth>
          }
          action={loginAction}
        />
        <Route
          path='join'
          element={
            <Auth to='/todo' login={true}>
              <Join />
            </Auth>
          }
          action={joinAction}
        />
        <Route
          path='todo'
          element={
            <Auth to='/' login={false}>
              <Todo />
            </Auth>
          }
          action={withAction(todoAction)}
          loader={todoLoader}
        />
      </Route>
    </Route>,
  ),
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
