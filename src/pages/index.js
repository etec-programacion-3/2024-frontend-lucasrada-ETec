import '../styles/index.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => {
    return (
      <html>
        <body id='home'>
          <Header />
          <main>
            <div class="musicBanner">
                <img id="newReleaseImage" class="newReleaseAlbum" src={require("../media/ttpd.jpg")} alt="The Tortured Poets Department" onmouseover="imageFocus(this, 1.04)" onmouseout="imageFocusOut(this)" />
                <div>
                    <p id="album" class="album">
                        The Tortured Poets Department
                    </p>
                    <p class="artist">
                        Taylor Swift
                    </p>
                    <div id="releaseDate" class="releaseDate">19/04/2024</div>
                </div>
            </div>
            <div class="audioBanner">
                <div class="audioProduct">
                    <img class="productImage" src={require("../media/WH-1000XM4.png")} alt="" onmouseover="imageFocus(this, 1.02)" onmouseout="imageFocusOut(this)" />
                    <p class="product">WH-1000XM4</p>
                </div>
                <div class="audioProduct">
                    <img class="productImage" src={require("../media/WH-1000XM4.png")} alt="" onmouseover="imageFocus(this, 1.02)" onmouseout="imageFocusOut(this)" />
                    <p class="product">WH-1000XM4</p>
                </div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    );
  }
  
  export default Home;