
import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {NavLink} from "react-router-dom";
import {deleteProduct} from "../../redux/products-reducer";
import Modal from "../modal/Modal";
import ModalDelete from "../modal/modalDelete";

                                                            //shows products in "/products" page with material-ui

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1];

export default function Product(props) {

    const handleClick = (e, id) => {
        // debugger
        console.log(id)
        console.log(e)
        e.preventDefault()
        props.deleteProduct(id)
        console.log(id)
    }
    const classes = useStyles();

    const [show, setShow] = useState(false)

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card  className={classes.card}>
                                    <NavLink  to={'/product/'+ props.id}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={props.imgUrl}
                                            title="Image title"
                                        />
                                    </NavLink>
                                    <CardContent  className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {props.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h8" component="h2">
                                            count:{props.count}
                                        </Typography>
                                        <Typography>
                                            {props.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {/*    (e)=> {*/}
                                    {/*    handleClick(e,props.id)*/}
                                    {/*}*/}
                                        <Button onClick={()=>setShow(true)} size="small" color="primary">
                                            <ModalDelete title="Delete Product" onClose={() => setShow(false)} id={props.id} deleteProduct={props.deleteProduct} show={show}>
                                            </ModalDelete>
                                            Delete
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
