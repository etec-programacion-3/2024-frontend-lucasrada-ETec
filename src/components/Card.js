import '../styles/Card.css';

const Card = () => {
    return (
        <div className="col">
            <div className="card">
                <img src={require('../media/md_starfield2_4.jpg')} className="card-img-top" alt="" />
                <ul className="list-group list-group-flush">
                <li className="list-group-item">9/10 Audio neutro</li>
                </ul>
                <div className="card-body">
                    <h5 className="card-title">Moondrop Starfield 2</h5>
                    <p className="card-text">Pequeña descripción</p>
                    <ul className="list-group list-group-flush">
                        <b>199 USD</b>
                    </ul>
                    <a href="./carrito.html" className="btn btn-primary">Mirar analisis</a>
                </div>
            </div>
        </div>
    );
};

export default Card;