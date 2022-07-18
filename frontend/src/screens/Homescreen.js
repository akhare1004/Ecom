import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const Homescreen = () => {
  return (
    <div>
        <h1>Current Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>

    </div>
  )
}

export default Homescreen
