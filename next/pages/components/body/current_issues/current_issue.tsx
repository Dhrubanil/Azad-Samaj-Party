import React, { useState, useEffect } from "react";
import { serverBasePath } from "../../server_ip";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowForwardIos } from "@mui/icons-material";

import ImageSlider from "./image_slider";

export const CurrentIssues = (props) => {
  const [issues, setIssues] = useState([]);

  const getCurrentIssues = async () => {
    try {
      const url = `${serverBasePath}/api/current-issues`;
      console.log("url", url);
      const res = await axios.get(url, {
        params: {
          populate: "*",
        },
      });
      console.log("res", res.data.data);
      setIssues(res.data.data);
    } catch (e) { }
  };

  useEffect(() => {
    getCurrentIssues();
  }, []);

  const issue: any = [
    <img src='https://picsum.photos/200' alt='' />,
    <img src='https://picsum.photos/201' alt='' />,
    <img src='https://picsum.photos/202' alt='' />,
    <img src='https://picsum.photos/203' alt='' />,
    <img src='https://picsum.photos/204' alt='' />,
  ]
  const leftArrowStyles = {
    position: "absolute",
    top: "120%",
    transform: "translate(0, -50%)",
    left: "6%",
    fontSize: "45px",
    color: "blue",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "120%",
    transform: "translate(0, -50%)",
    right: "6%",
    fontSize: "45px",
    color: "blue",
    zIndex: 1,
    cursor: "pointer",
  };  


  return (
    <div className="current_issues">
      <div>CURRENT ISSUES</div>
      <ImageSlider issues={issues}/>
      {/* <CarouselContainer slides={issue} interval={2000}/> */}
      {/* <div>
        <div style={leftArrowStyles}>
          ❰
        </div>
        <div style={rightArrowStyles}>
          ❱
        </div>
        <div>
          <CarouselContainer interval={0} slidesPresented={3}>
            {issues.map((c) => (<CarouselChild key={c.id}>
              <Card key={c.id} sx={{ maxWidth: 345, maxHeight: 300 }}>
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
                <CardActions className="card_content">
                  <IconButton size="large" style={{ marginLeft: "auto" }}>
                    <ArrowForwardIos fontSize="small" style={{ color: 'white' }} />
                  </IconButton>
                </CardActions>
              </Card>
            </CarouselChild>))}
          </CarouselContainer>

        </div>
      </div> */}
    </div>
  );
};

export default CurrentIssues;
