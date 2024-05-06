import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
