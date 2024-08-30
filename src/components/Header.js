import '../styles/Header.css';

const Header = () => {
    return (
        <header class="header">
            <h1 class="homeTitle">Audioteca</h1>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                </div>
                <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                </div>
                <div class="nav-links">
                    <a href="/" class="hover-underline-animation">Home</a>
                    <a href="/product" class="hover-underline-animation">Product</a>
                    <a href="./cart.html" class="hover-underline-animation">Cart</a>
                    <a href="./contact.html" class="hover-underline-animation">Contact</a>
                </div>
                <div class="nav-p">
                    <img class="searchButton" src={require('../media/search.svg').default} alt="Search" onclick="openSearch()" />
                    <a onclick="openModalSignIn()">
                        <img src={require('../media/avatar.jpg')} alt="Avatar" class="avatar" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;