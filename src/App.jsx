import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Getstarted from "./components/Getstarted";
import Review from "./components/Review";
import Plan from "./components/Plan";
import About from "./components/About";
import image from "../src/images/3.png";

const App = () => {
  return (
    <div
      className="px-44 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <Navbar />
      <Signup />
      <About />
      <Plan />
      <Review />
      <Getstarted />
      <Footer />
    </div>
  );
};

export default App;
