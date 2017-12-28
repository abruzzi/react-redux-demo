import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {map} from 'lodash'

import {
  getProducts
} from '../../modules/product'

class Home extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    renderProducts(products) {
        return (
            <ul>
                {map(products, (product) => {
                    return <li key={product.key}><span className="product-name">{product.name}</span><span className="product-price">{product.price}</span></li>
                })}
            </ul>
        )
    }

    render() {
        const products = this.props.products
        return (<div>
            <h2>Product list</h2>
            {this.renderProducts(products)}
        </div>)
    }
}

const mapStateToProps = state => ({
  products: state.product.products,
  isLoading: state.product.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getProducts,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
