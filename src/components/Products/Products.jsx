


import React, { useState} from "react";
import classes1 from './Products.module.css'
import Product from "../Product/Product";
import Modal from "../modal/Modal";
import AddForm from "./AddForm";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));
let Products = (props) => {     //taking products from firebase and provide to component <Product/>
    const classes = useStyles();
    const [show, setShow] = useState(false)
    let productsElements = props.products
        .map((product) =>

            <Product setProduct={props.setProduct}
                     deleteProduct={props.deleteProduct}
                     name={product.name}
                     description={product.description}
                     count={product.count}
                     weight={product.weight}
                     height={product.size.height}
                     width={product.size.width}
                     imgUrl={product.imgUrl}
                     id={product.id}
                     key={product.id}
            />
        );


    return (<div className={classes1.wrapper}>
            <React.Fragment>
                <CssBaseline />
                <main>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    choose sort
                                </Button>
                            </Grid>
                            <Grid item>

                                <Button onClick={() => setShow(true)} variant="contained" color="primary" > Add product</Button>
                                <Modal title="Add your new Product" onClose={() => setShow(false)} show={show}>
                                    <AddForm createProduct={props.createProduct}/>
                                </Modal>

                            </Grid>
                        </Grid>
                    </div>
                </main>
            </React.Fragment>
            {/*<div>*/}
            {/*    <button onClick={() => setShow(true)}> Add product</button>*/}
            {/*    <Modal title="Add your new Product" onClose={() => setShow(false)} show={show}>*/}
            {/*        <AddForm createProduct={props.createProduct}/>*/}
            {/*    </Modal>*/}
            {/*</div>*/}
            {/*<button>choose sort</button>*/}

            <div>
                <div className={classes1.postProduct}>
                    {productsElements}
                </div>
            </div>
        </div>

    )
}

export default Products;