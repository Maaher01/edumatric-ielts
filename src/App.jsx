import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentConfirm from "./pages/paymentConfirm";
import PaymentSuccess from "./pages/paymentSuccess";
import PaymentFail from "./pages/paymentFail";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-confirm/:id" element={<PaymentConfirm />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/fail" element={<PaymentFail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
