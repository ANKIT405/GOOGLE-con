import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from "./Shopping";
import Images from "./Images";

import Searchbar from "./Searchbar";
import Alllink from "./Alllink";
import All from "./All";
function App() {
  let Render_C1 = <Alllink />;
  let Render_C2 = <Searchbar />;
  let C_Arr = [Render_C2, Render_C1];
  console.log(Render_C1);
  let getItem = localStorage.getItem("Num");
  return (
    // All Components
    <>
      <BrowserRouter>
        {C_Arr[getItem]} {/*C2 for result Component*/}
        <Routes>
          <Route path="/All" element={<All />} />
          <Route path="/Images" element={<Images />} />
          <Route path="/Shopping" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
