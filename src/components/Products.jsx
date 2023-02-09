import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Product from './Product'
import { fetchProducts } from '../redux/actions/productActions'

function Products() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div>
            <Product />
        </div>
    )
}

export default Products
