import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/masonry.css'

import CardGroup from 'react-bootstrap/CardGroup'

const CartItem = ({ data, delFromCart  }) => {

    let { id, name, image, price, quantity } = data;

    return(
        <div className="products-masonry container">
            <div className="col">
                <section className="products-masonry-filter mt-4 mt-lg-5 mb-4 ">
                   
                            <CardGroup className="card-columns">
                                <Card className="card" style={{ width: '18rem' }}>
                                
                                    <Card.Title className="title">{name}</Card.Title>
                                    <Card.Img variant="top"  alt={id} src={image} />
                                    
                                    <Card.Text className="text">${price}.00 X{quantity}=${price*quantity}.00</Card.Text>
                                    
                                    <Button onClick={() => delFromCart(id)} variant="primary" className="btn-primary">Remove one</Button>
                                    <Button onClick={() => delFromCart(id, true)} variant="primary" className="btn-primary">remove all</Button>
                                    
                                </Card>
                            </CardGroup>
                        
                   
                </section>
            </div>
        </div>
        )
    
    }

    export default CartItem;