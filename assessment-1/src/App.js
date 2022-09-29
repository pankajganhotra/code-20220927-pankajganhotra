import './App.css';
import { ImageContainer } from './components/custom/ImageContainer';
import { Header } from './Layout/Header';
import { Footer } from './Layout/Footer';
import { MainSection } from './containers/FirstSection';
import { ExploreSection } from './containers/ExploreSection';
import { AboutSection } from './containers/AboutSection';

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <MainSection />
        <ExploreSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
