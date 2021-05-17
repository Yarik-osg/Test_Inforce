
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from "react-router-dom";
import classes1 from '../Products/Products.module.css'
//shows a single product on page "/product/id" wiht material-ui
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

export default function SingleProduct(props) {
    const classes = useStyles();

    return (<div className={classes1.wrapper}>
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={props.product.imgUrl}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Name: {props.product.name}
                                        </Typography>
                                        <Typography>
                                            Description:{props.product.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Count: {props.product.count}
                                        </Typography>

                                        <Typography gutterBottom variant="h6" component="h2">
                                        Size:
                                        </Typography>
                                        <Typography >
                                             Height: {props.product.size.height}

                                             ,Width:{props.product.size.width}
                                        </Typography>
                                        <Typography >
                                            Weight:{props.product.weight}
                                        </Typography>
                                    </CardContent>
                                    <NavLink to={'/products/'}>
                                        <Button>
                                            Back
                                        </Button>
                                    </NavLink>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
        </div>
    );
}

