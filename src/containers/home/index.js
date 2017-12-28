import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {map} from 'lodash'

import {
  getProducts
} from '../../modules/product'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>isLoading: {props.isLoading}</p>

    <p>
      <button onClick={props.getProducts} disabled={props.isLoading}>Fetch</button>
    </p>

      <ul>
          {map(props.products, (product) => {
              return <li>{product.name}</li>
          })}
      </ul>

    <p><button onClick={() => props.changePage()}>Go to about page</button></p>
  </div>
)

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
