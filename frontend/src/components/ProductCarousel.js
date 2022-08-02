import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarousel = () => {
  const dispatch = useDispatch()
  const productTopRated = useSelector(state => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  },[dispatch])
  
    return (
    <div>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map(product => (
                 <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid></Image>
                        <Carousel.Caption className='carousel-caption'>
                            <h2>{product.name} (&#8377;{product.price})</h2>
                        </Carousel.Caption>
                    </Link>
                 </Carousel.Item>
            ))}
        </Carousel>
      )}
    </div>
  )
}

export default ProductCarousel
