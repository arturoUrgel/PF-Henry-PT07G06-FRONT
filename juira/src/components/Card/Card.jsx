import React from 'react';
import styles from './Card.module.css';
import { Link, useParams } from 'react-router-dom';

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/products.actions';


export default function Card(props) {

    const dispatch = useDispatch();
    const itemsAddedToCart = useSelector((state) => state.productsReducer.cart);


    const productIsAddedToCart = (id) => {
        return itemsAddedToCart.find((item) => item.id === id) ? true : false;
    }

    const handleAddToCart = (p) => {
        console.log('handleAddToCart > p: ', p)
        dispatch(addToCart(p))
    }

    const [fav, setFav] = useState(false);
    const toggleFav = () => {
       fav===false ? setFav(true) : setFav(false);
    }

    const isFav = () => fav;


    return (
        <section className={styles.cardContainer}>

            <IconButton sx={{ color:"var(--heartColor)",
                    position:"absolute", top:".125rem", right:".125rem" }}
                    onClick={ () => toggleFav() }>
              { isFav() ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>

            <div className={[styles.card, styles.stacked].join(' ')}>
                {/* <a href="/" className={styles.cardLink}> */}
                <Link to={`/juira/${props.id}`/* detail/${props.id} `*/}
                    className={styles.cardLink}>
                    <img src={props.image}
                        className={styles.card__img}
                        alt="Card" />
                    <div className={styles.card__content}>
                        <p className={styles.card__price}>{"$ " + props.price.toLocaleString('de-DE')}</p>
                        <h2 className={styles.card__title}>{props.name}</h2>
                        <p className={styles.card__description}></p>
                    </div>
                </Link>
                
                <IconButton sx={{ color:"var(--primaryColor)",
                    position:"absolute", bottom:".125rem", right:".125rem" }}
                    onClick={ () => {console.log('sx ',props.product); handleAddToCart(props.product)} }>
                        {productIsAddedToCart(props.product.id) 
                            ? <ShoppingCartIcon /> 
                            : <AddShoppingCartIcon />}
                </IconButton>
                
            </div>
        </section>
    )
}