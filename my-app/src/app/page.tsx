import About from "@/_components/About";
import Header from "@/_components/Header";
import Myroad from "@/_components/Myroad";
import Mystacks from "@/_components/Mystacks";
import Navbar from "@/_components/Navbar";
import Project from "@/_components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Mystacks />
      <Myroad />
      <Project />
    </>
  );
};
export default Home;
