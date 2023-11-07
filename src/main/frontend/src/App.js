import './App.css';
import Form from './pages/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import ImageUpload from './pages/FileUpload';
import ServerError from './pages/ServerErorr';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<Success />} />
        <Route path="/file" element={<ImageUpload />} />
        <Route path="/servererror" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
