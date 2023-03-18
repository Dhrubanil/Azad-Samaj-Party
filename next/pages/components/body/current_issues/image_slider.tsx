import React from 'react'
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
import { serverBasePath } from "../../server_ip";

interface props {
    issues: any;
}

const ImageSlider = ({issues}: props) => {


    return (
        <div className="wrapperSlider">
            {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
            <div className="carouselSlider">
                {issues.map(c=>(
                    <img src={`${serverBasePath}${c.attributes.issue.data.attributes.url}`} alt="img" draggable="false" />
                    // <Card key={c.id} sx={{ maxWidth: 345, maxHeight: 300 }}>
                    //     <CardMedia
                    //     sx={{ height: 200 }}
                    //     image={`${serverBasePath}${c.attributes.issue.data.attributes.url}`}
                    //     title="green iguana"
                    //     />
                    //     <CardContent className="card_content">
                    //     <Typography variant="body2" color="white">
                    //         {c.attributes.Description}
                    //     </Typography>
                    //     </CardContent>
                    //     <CardActions className="card_content">
                    //     <IconButton size="large" style={{ marginLeft: "auto" }}>
                    //         <ArrowForwardIos fontSize="small" style={{ color: 'white' }} />
                    //     </IconButton>
                    //     </CardActions>
                    // </Card>
                ))}
            </div>
            {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
        </div>
    )
}

export default ImageSlider