import { createBrowserRouter, RouterProvider,useNavigation} from "react-router-dom";
import { About,Cocktail,Error,HomeLayout,Landing,Newsletter } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import {loader as singlePageLoader} from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/Newsletter";
import SinglePageError from "./pages/SinglePageError";
const App = () => {

  const router = createBrowserRouter([
    {path: "/",
     element: <HomeLayout/>,
     // as error bubble out so instead of setting it in child use in parent
     errorElement:<Error/>,
     children:[
     { index:true,loader:landingLoader ,
       element: <Landing/>,
       errorElement:<SinglePageError/>},
     { path: "about", element: <About/> },
     { path: "cocktail/:id",loader:singlePageLoader,element: <Cocktail/>, errorElement:<SinglePageError/>,
       },
     { path: "newsletter",
     action:newsLetterAction,
      element: <Newsletter/> }
     ]
     
     }
  
  ]);

  return (
    
      <RouterProvider router={router}/>
    
  );
};
export default App;
