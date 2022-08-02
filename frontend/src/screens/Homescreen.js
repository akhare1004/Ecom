import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import Paginate from '../components/Paginate'


const Homescreen = () => {
  const dispatch = useDispatch()
  const { keyword } = useParams()
  let { pageNumber } = useParams()
  if(!pageNumber){
    pageNumber = 1
  }


  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  
  return (
    <div>
        <h1>Current Products</h1>
        {loading ? <Loader /> : error ? <Message variant= 'danger'>{error}</Message>  : 
        (
          <>
          <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
          </Row>
          <br></br>
          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}></Paginate>
          </>
        )
        }

    </div>
  )
}

export default Homescreen
