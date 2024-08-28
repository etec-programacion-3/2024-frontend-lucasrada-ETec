import '../styles/Header.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => {
    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet"></link>
        </head>
        <body>
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