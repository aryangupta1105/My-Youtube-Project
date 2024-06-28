import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
function App() {


  const appRouter = createBrowserRouter([{
    path: '/',
    element:<><Header/><Body/></>,
    children:[
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      },
      {
        path: "/results",
        element: <SearchResultPage/>
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
