import useFetchData from '../hooks/useFetchData';
import '../styles/Card.css';

const ip = '127.0.0.1';

const Card = ({id}) => {
    const { data, loading: loadingData, error: errorData } = useFetchData(`http://${ip}:8000/products/${id}/?format=json`);
    const { data: images, loading: loadingImages, error: errorImages } = useFetchData(`http://${ip}:8000/products/${id}/images/?format=json`);

    if (loadingData || loadingImages) return <div>Loading...</div>;

    if (errorData) return <div>Error fetching product data: {errorData.message}</div>;
    if (errorImages) return <div>Error fetching product images: {errorImages.message}</div>;
 
    return (
        <div className="col">
            <div className="card">
                <img src={images[0].image_url} className="card-img-top" alt="" />
                <ul className="list-group list-group-flush">
                <li className="list-group-item">{data.rating}</li>
                </ul>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.desc}</p>
                    <ul className="list-group list-group-flush">
                        <b>{data.price}</b>
                    </ul>
                    <a href="./carrito.html" className="btn btn-primary">Mirar analisis</a>
                </div>
            </div>
        </div>
    );
};

export default Card;