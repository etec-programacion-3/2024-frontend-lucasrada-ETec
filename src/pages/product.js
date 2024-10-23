import '../styles/product.css';

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Card from '../components/Card.js'


const Product = () => {
    return (
        <body id='product'>
            <Header />
            <main>
                <div className="prod_banner">
                    <img className="banner" src={require('../media/headphoneswb.jpg')} alt="" width="100%" />
                    <b className="banner_text" id="bannertext">AUDIO</b>
                </div>
                {/* Inicio de barra de busqueda https://www.youtube.com/watch?v=YXalp9Fr4-4 */}
                
                {/* Fin de barra de busqueda */}
                <div className="products">
                    <div className="row wow fadeInUp" >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>
            <script src="./js/wow.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
            <script>
            new WOW().init();
            </script>
            <script src="./js/main.js"></script>
            <script src="./js/search-bar.js"></script>
            <Footer />
        </body>
    );
}

{/*

let searchInput = document.getElementById("search-input");
let bannertext = document.getElementById("bannertext");
let dropText = document.getElementById("drop-text");
let dropText2 = document.getElementById("drop-text2");
let dropList = document.getElementById("dropList");
let dropList2 = document.getElementById("dropList2");

searchInput.addEventListener("mouseover", (event) => {
    event.target.style.background = "pink";
});

searchInput.addEventListener("mouseout", (event) => {
    event.target.style.background = "";
});

searchInput.addEventListener("focus", (event) => {
    event.target.style.background = "blue";
});

searchInput.addEventListener("blur", (event) => {
    event.target.style.background = "";
});

bannertext.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

bannertext.addEventListener("mouseenter", function() {
	bannertext.style.color = "blue"; 
});

bannertext.addEventListener("mouseleave", function() {
	bannertext.style.color = ""; 
});

dropText.onclick = function() {
    dropList.classNameList.toggle("show");
};

dropText2.onclick = function() {
    dropList2.classNameList.toggle("show2");
};

*/}

export default Product;