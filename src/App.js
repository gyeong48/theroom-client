import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={root} />
    </HelmetProvider>
  )
}

export default App;
