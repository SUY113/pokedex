import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import {Link} from "react-router-dom"
import React from 'react'

const useStyles = makeStyles((theme) =>({
    card:{
      cursor: "pointer",
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "rgb(90, 90, 90)"
      }
    },
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130,
    },
    CardContent: {
      textAlign: "center",

    },
    link:{
      textDecoration: "none"
    }
}))

export default function PokemonCard(props) {
  const classes = useStyles()
  const {pokemon, image} = props
  const {id, name} = pokemon
  return (
    <Grid item xs={12} sm ={2} key ={id} className={classes.link}>
      <Link to={"pokemon/" +id}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image = {image}></CardMedia>
          <CardContent className={classes.CardContent}>
            <Typography>
              {name.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
