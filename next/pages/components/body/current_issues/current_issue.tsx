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
import { CarouselComponent } from "./carousel";

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
    } catch (e) {}
  };

  useEffect(() => {
    getCurrentIssues();
  }, []);

  return (
    <div className="current_issues">
      <div>CURRENT ISSUES</div>
      <CarouselComponent issues={issues}/>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

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
        </Grid>
      </Box> */}
    </div>
  );
};

export default CurrentIssues;
