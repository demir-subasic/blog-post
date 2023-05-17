import React from "react";
import CardItems from "../mini-components/cards-item/cards-item";
import "./card-section.css"
import slika1 from "../../icons-pictures/slika-tema1.jpg"
import slika2 from "../../icons-pictures/slika-tema2.jpg"
import slika3 from "../../icons-pictures/slika-tema3.jpeg"
import slika4 from "../../icons-pictures/slika-tema4.jpg"
import slika5 from "../../icons-pictures/slika-tema5.jpg"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import "../mini-components/cards-item/cards-item.css"

function CardSection () {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

   
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid className="card-wrapper" container spacing={2}>
        <Grid item xs={6}>
          <Item> <CardItems className = "card1" pic={slika1} text = "Find out how radiation affected people and the environment and what kind of mark it left." /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <CardItems className = "card1" pic={slika2} text = "It is written here how the nuclear disaster proceeded as well as its details." /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><CardItems className = "card2" pic={slika3} text = "What consequences did the disaster have on society and culture in the region." /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <CardItems className = "card2" pic={slika4} text = "Technical aspects of the disaster and who is to blame for it." /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <CardItems className = "card2" pic={slika5} text = "How tourism developed in the area before and how it is now." /></Item>
        </Grid>

      </Grid>
    </Box>
        // <div className="cards-full-page">
        // <div className="card-wrapper">
        //     <div className="upper-cards">
        //     <CardItems className = "card1" pic={slika1} text = "Find out how radiation affected people and the environment and what kind of mark it left." />
        //     <CardItems className = "card1" pic={slika2} text = "It is written here how the nuclear disaster proceeded as well as its details." />
        //     </div>
        //     <div className="bottom-cards">
        //     <CardItems className = "card2" pic={slika3} text = "What consequences did the disaster have on society and culture in the region." />
        //     <CardItems className = "card2" pic={slika4} text = "Technical aspects of the disaster and who is to blame for it." />
        //     <CardItems className = "card2" pic={slika5} text = "How tourism developed in the area before and how it is now." />
        //     </div>
        // </div>
        // </div>

    )
}


export default CardSection