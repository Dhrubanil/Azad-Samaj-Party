import { Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { serverBasePath } from "../../server_ip";
import axios from "axios";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowForwardIos } from "@mui/icons-material";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

export const CarouselComponent = ({issues}) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          {issues.map((c) => (
            <Grid item xs={3}>
              <Card key={c.id}  sx={{ maxWidth: 345,maxHeight: 300 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={`${serverBasePath}${c.attributes.issue.data.attributes.url}`}
                  title="green iguana"
                />
                <CardContent className="card_content">
                  <Typography variant="body2" color="white">
                    {c.attributes.Description}
                  </Typography>
                </CardContent>
                <CardActions alig  className="card_content">
                  <IconButton size="large" style={{marginLeft: "auto"}}>
                    <ArrowForwardIos fontSize="small" style={{color:'white'}} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item> */}
        </Carousel>
      </div>
    </>
  );
}
