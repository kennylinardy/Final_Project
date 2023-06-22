import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TiketHabis from "./components/TiketHabis";
import BerandaLoading from "./components/BerandaLoading";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PencarianEmpty from "./components/PencarianEmpty";
import HasilPencarian from "./components/HasilPencarian";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BerandaLoading" element={<BerandaLoading />} />
        <Route path="/TiketHabis" element={<TiketHabis />} />
        <Route path="/PencarianEmpty" element={<PencarianEmpty />} />
        <Route path="/HasilPencarian" element={<HasilPencarian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;