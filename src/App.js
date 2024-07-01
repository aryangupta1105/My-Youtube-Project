import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import Error from "./components/Error";
import LoginPage from "./components/LoginPage";
function App() {


  const appRouter = createBrowserRouter([{
    path: '/',
    element:<><Header/><Body/></>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <MainContainer/>,
        errorElement: <Error/>
      },
      {
        path: "/watch",
        element: <WatchPage/>,
        errorElement: <Error/>
      },
      {
        path: "/results",
        element: <SearchResultPage/>,
        errorElement: <Error/>
      }
    ]
  }])


  return (
    <Provider store={store}>
        <div className="h-screen">
          <RouterProvider router={appRouter}/>
        </div>
    </Provider>
  );
}

export default App;
