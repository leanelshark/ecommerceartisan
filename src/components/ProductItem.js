import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/masonry.css'

const ProductItem = ({ data, addToCart }) => {
    let { id, name, price, image } = data;

    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={name}/>
            <Card.Body>
                <Card.Title className="title">{name}</Card.Title>
                <Card.Text className="text">${price}.00</Card.Text>
                <Button variant="primary" className="btn-primary" onClick={() => addToCart(id)}>Add to cart</Button>
            </Card.Body>
        </Card>
    )}

export default ProductItem;
