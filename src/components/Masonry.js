import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import imagenes from '../assets/imagenes'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CardGroup from 'react-bootstrap/CardGroup'
import '../styles/masonry.css'
import Product from './Cards.js';

const Masonry = () => {
  return (
        <div className="products-masonry container">
            <div className="col">
                <section className="products-masonry-filter mt-4 mt-lg-5 mb-4 ">
                    <Tabs variant="pills" defaultActiveKey="sillones" id="sillones" className="nav nav-pills nav-fill border-top border-bottom py-3">        
                        <Tab eventKey="sillones" title="Sillones">
                            <CardGroup className="card-columns">
                                <Product
                                    title="Card 1" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon1}
                                />
                                <Product
                                    title="Card 2" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon3}
                                />
                                <Product
                                    title="Card 3" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon2}
                                />
                                <Product
                                    title="Card 4" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon4}
                                />
                                <Product
                                    title="Card 5" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon5}
                                />
                                <Product
                                    title="Card 6" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon6}
                                />
                                <Product
                                    title="Card 7" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.sillon7}
                                />
                            </CardGroup>
                        </Tab>
                        <Tab eventKey="mesas" title="Mesas">
                            <CardGroup className="card-columns">
                                <Product
                                    title="Card 8" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa1}
                                />
                                <Product
                                    title="Card 9" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa2}
                                />
                                <Product
                                    title="Card 10" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa3}
                                />
                                <Product
                                    title="Card 11" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa4}
                                />
                                <Product
                                    title="Card 12" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa5}
                                />
                                <Product
                                    title="Card 13" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa6}
                                />
                                <Product
                                    title="Card 14" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.mesa7}
                                />
                            </CardGroup>
                        </Tab>
                        <Tab eventKey="sillas" title="Sillas">
                            <CardGroup className="card-columns">
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla1}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla2}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla3}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla4}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla5}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla6}
                                />
                                <Product
                                    title="Card 15" 
                                    descrption="Some quick example text to build on the card title and make up the bulk of the card's content."
                                    image={imagenes.silla7}
                                />

                            </CardGroup>
                        </Tab>
                    </Tabs>
                </section>
            </div>
        </div>
  )
}

export default Masonry