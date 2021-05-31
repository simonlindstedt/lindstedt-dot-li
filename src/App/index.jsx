import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import About from "../components/About";

const App = () => {
  return (
    <Layout>
      <Header />
      <Projects />
      <About />
    </Layout>
  );
};

export default App;
