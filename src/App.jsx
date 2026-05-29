import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/homepage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
