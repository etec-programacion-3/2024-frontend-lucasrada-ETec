import '../styles/product.css';
import '../styles/search-bar.css';

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


const Product = () => {
    return (
        <body id='product'>
            <Header />
            <main>
                <div class="prod_banner">
                    <img class="banner" src={require('../media/headphoneswb.jpg')} alt="Image didnt load" width="100%" />
                    <b class="banner_text" id="bannertext">AUDIO</b>
                </div>
                {/* Inicio de barra de busqueda https://www.youtube.com/watch?v=YXalp9Fr4-4 */}
                
                <div class="searchBar">
                    {/* Inicio de dropdown1 */}
                    
                    <div class="dropdown">
                        <div class="uppersearch">
                        <div id="drop-text" class="dropdown-text">
                        <span>Todo audio</span>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                        <ul id="dropList" class="dropdown-list">
                            <li class="dropdown-list-item">Todo audio</li>
                            <li class="dropdown-list-item">Audio neutro</li>
                            <li class="dropdown-list-item">Comunicaciones</li>
                            <li class="dropdown-list-item">Gaming</li>
                        </ul>
                    </div>
                    
                    {/* Fin de dropdown1 */}
                    {/* Inicio de dropdown2 */}
                    
                    <div class="dropdown">
                        <div class="uppersearch">
                        <div id="drop-text2" class="dropdown-text2">
                        <span>Todo audio</span>
                        <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                        <ul id="dropList2" class="dropdown-list">
                            <li class="dropdown-list-item">Todo audio</li>
                            <li class="dropdown-list-item">Audio neutro</li>
                            <li class="dropdown-list-item">Comunicaciones</li>
                            <li class="dropdown-list-item">Gaming</li>
                        </ul>
                    </div>
                    
                    {/* Fin de dropdown2 */}
                    {/* Inicio de input de busqueda */}
                        <div class="uppersearch">
                            <div class="search-box">
                                <input type="text" id="search-input" placeholder="Busque sus audifonos..." />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    {/* Fin de input de busqueda */}
                </div>


                {/* Fin de barra de busqueda */}
                <div class="columnas">
                    <div class="row row-cols-3 row-cols-md-4 g-5 wow fadeInUp" >
                        {/* CARTA INDIVIDUAL */}
                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>
                        {/* CARTA INDIVIDUAL */}
                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <img
                                src={require('../media/md_starfield2_4.jpg')}
                                class="card-img-top"
                                alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                        <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary"
                                        >Mirar analisis</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img
                                    src={require('../media/md_starfield2_4.jpg')}
                                    class="card-img-top"
                                    alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                    <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary">Mirar analisis</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img
                                    src={require('../media/md_starfield2_4.jpg')}
                                    class="card-img-top"
                                    alt="Image didnt load"
                                />
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">9/10 Audio neutro (?)</li>
                                </ul>
                                <div class="card-body">
                                    <h5 class="card-title">Moondrop Starfield 2</h5>
                                    <p class="card-text">Pequeña descripción</p>
                                    <ul class="list-group list-group-flush">
                                    <b>199 USD</b>
                                    </ul>
                                    <a href="./carrito.html" class="btn btn-primary">Mirar analisis</a>
                                </div>
                            </div>
                        </div>
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
    dropList.classList.toggle("show");
};

dropText2.onclick = function() {
    dropList2.classList.toggle("show2");
};

*/}

export default Product;