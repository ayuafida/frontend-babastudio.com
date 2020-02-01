import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';
import PropTypes from 'prop-types';

class Product extends Component {
   
    render() {
        
        const {id,nama_kursus,image,total_durasi,jumlah_materi,total_murid,jumlah_vidio,harga,flashSale, productCart}= this.props.product;
         console.log(this.props.product)
        return(
            <ProductWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          
                <div className="card">
                
                <ProductConsumer>
                    {value => (<div className="img-container" onClick={()=>
                    value.handleDetail(id)
                    }>
                    <Link to="#">
                    <img src={productCart.image} alt="product" className="card-img-top" />
                    </Link> 
                    </div>
                    )}
 
                    </ProductConsumer>
                  
                    <div className="card-footer  ">
                        <strong>
                        <p className="align-self-center text-blue mb-0"> {productCart.nama_kursus} </p>
                        </strong>
                     <br/>
                     <Deco1>
                     <p className="align-self-center  mb-0"> <i class="fas fa-play-circle text-blue"></i> Total Durasi Video Kursus {productCart.total_durasi} </p>
                     <p className="align-self-center  mb-0"> <i class="fas fa-users text-blue"></i>{productCart.total_murid} murid </p>
                     <p className="align-self-center  mb-0">  <i class="fas fa-book text-blue"></i> {productCart.jumlah_vidio} materi kursus </p>
                     </Deco1>
                     <br></br>
                     <div className ="d-flex justify-content-between">
                        <h8 className="mb-0 " >
                            <Deco>
                            Rp.{productCart.harga}
                            </Deco>
                           
                        </h8>
                       
                        <h5 className="text-blue mb-0">
                            <strong>
                            <span className="mr-1">Rp.</span>{flashSale} 
                            </strong>
                        </h5>
                                                
                     </div>
                        
                    </div>
                   
                </div>
            </ProductWarpper>

        );
    }
}

export default Product;

Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        materi : PropTypes.string,
        murid : PropTypes.string,
        durasi : PropTypes.string,
        title: PropTypes.string,
        price : PropTypes.number,
        inCart : PropTypes.bool,

    }).isRequired
};

const ProductWarpper = styled.div`
.card{
    border : 0.04rem solid rgba(0,0,0,0.2);
}
.card-footer{
    background : transparent;
    border-top : transparent;
    
}
&:hover{
    .card{
        border : 0.04rem solid rgba(0,0,0,0.2);
        box-shadow : 2px 2px 5px 0px rgba(0,1,0,0.2);
    }
}
.img-container{
    position : relative;
    overflow : hidden;
}
`;

const Deco = styled.div`
    font-size: 0.7rem;
    text-decoration: line-through; 
`

const Deco1 = styled.div`
    font-size: 0.7rem;
    color: grey;  
`
