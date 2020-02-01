import React, {Component} from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return(
            <ProductConsumer>
                {value =>{
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                            <div className="col-10 mx-auto col-md-6  my-3 text-center">
                                <img src ={img} className="img-fluid" alt="Product"/>
                    
                                </div>
                                <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                    <h1>Model : {title}</h1>
              
                <h4 className="text-blue"><strong>price : <span>Rp.</span> {price} </strong></h4>
                
                <div>
                    <Link to="/">
                        <ButtonContainer className="mr-2">Back To Product</ButtonContainer>
                    </Link>

                    <Link to = "#">
                        <ButtonContainer > Add To Cart </ButtonContainer>
                    </Link>
                   


                </div>
                                </div>
                            </div>
                    
                        </div>
                    )
                    
                }}
            </ProductConsumer>
        );
    }
}

export default Details;