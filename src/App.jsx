import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentConfirm from "./pages/paymentConfirm";
import PaymentNotice from "./pages/paymentNotice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-confirm/:id" element={<PaymentConfirm />} />
        <Route path="/payment-notice" element={<PaymentNotice />} />
      </Routes>
    </>
  );
}

export default App;
