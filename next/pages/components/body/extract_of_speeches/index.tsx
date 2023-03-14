import React, { useState, useEffect } from "react";
import { serverBasePath } from "../../server_ip";
import axios from "axios";
import Box from "@mui/material/Box";

export const ExtractSpeeches = () => {
  const [speeches, setSpeeches] = useState([]);

  const getAllSpeeches = async () => {
    try {
      const url = `${serverBasePath}/api/extract-of-speeches`;
      console.log("url", url);
      const res = await axios.get(url, {
        params: {
          populate: "*",
        },
      });
      // console.log("res", res);
      setSpeeches(res.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getAllSpeeches();
  }, []);
  return (
    <>
      <div className="extract_speeches">
        "{speeches[0]?.attributes.speeches}"
      </div>
      <div>
        <Box
          sx={{
            mx: "auto",
            // width: 200,
            height: 30,
            p: 1,
            m: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#2c2c8f",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark" ? "grey.800" : "#2c2c8f",
            borderRadius: 2,
          }}
        ></Box>
      </div>
    </>
  );
};

