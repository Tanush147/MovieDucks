import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import TargetCursor from "./components/TargetCursor";
import TiltedCard from "./components/TiltedCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
        <div>
          <TargetCursor spinDuration={2} hideDefaultCursor={true} />

          <h1>Hover over the elements below</h1>
          <button className="cursor-target">Click me!</button>
          <div className="cursor-target">Hover target</div>
        </div>

        <TiltedCard
          imageSrc="logo192.png"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />

        <TiltedCard
          imageSrc="logo192.png"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
          }
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;



