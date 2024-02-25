import { BrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import { HomePage } from "./pages/home/Page";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
