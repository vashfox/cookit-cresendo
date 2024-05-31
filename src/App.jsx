import Router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/elements/Modal";

function App() {
  return (
    <div className="relative">
      <Modal />
      <Header />
      <div className="content-wrapper">
        <div className="page-wrapper">
          <Router />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
