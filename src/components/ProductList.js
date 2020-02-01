import React, {Component} from 'react';
import Product from './Product';
//import Title from './Title';
import {ProductConsumer} from './Context';


class ProductList extends Component {
    
    render() {
      
        return(
            <React.Fragment>
<img className="imageslinder" src={require('../banner.png')}/>
                <div className="py-2">

                
                    <div className="container">
                        < h4>All Courses</h4>
                        
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                   return value.products.map(product=> {
                                       return <Product key={product.id} product={product}/>
                                   })
                                }}

                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default ProductList;