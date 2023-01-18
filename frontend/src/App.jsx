import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddFruit from './admin/AddFruit';
import Home from "./Home";
import Result from './Result';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin/add" element={<AddFruit />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}