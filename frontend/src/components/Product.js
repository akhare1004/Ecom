import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
        <Card>
            <a link = {`/product/${Product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a link = {`/product/${Product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                </a>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Product
