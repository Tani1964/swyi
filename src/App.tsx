import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Home from "./pages/Home";
import Initiatives from "./pages/Initiatives";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
