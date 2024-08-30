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
            About
          </main>
          <Footer />
        </body>
      </html>
    );
  }
  
  export default Home;