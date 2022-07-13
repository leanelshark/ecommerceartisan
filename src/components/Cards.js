import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/masonry.css'

const Product = (props) => {
   
    return (
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className="title">{props.title}</Card.Title>
                    <Card.Text className="text">{props.description}</Card.Text>
                    <Button variant="primary" className="btn-primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )
}

export default Product; 