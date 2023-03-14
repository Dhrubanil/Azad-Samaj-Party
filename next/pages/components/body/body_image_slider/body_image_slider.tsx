import { useEffect, useState } from "react";
import { ImageSlider } from "./image_slider";
import { serverBasePath } from "../../server_ip";
import axios from "axios";

const containerStyles = {
  width: "100%",
  height: "100%",
  margin: "0 auto",
};

// export const getStaticProps = async () => {
//   let sliders = [];
//   try {
//     const url = `${serverBasePath}/api/homepageimages`;
//     console.log("url", url);
//     const res = await axios.get(url, {
//       params: {
//         populate: "*",
//       },
//     });
//     sliders = res.data.data.map((c) => ({
//       url: `${serverBasePath}${c.attributes.image.data[0].attributes.url}`,
//       description: c.attributes.Description,
//     }));
//     console.log("res", res.data.data, sliders);
//   } catch (e) {}
//   return {
//     props: {
//       sliders,
//     },
//   };
// };

export const BodyImage = (props) => {
  const [slides, setSlides] = useState([]);
  const fetchSlides = async () => {
    try {
      const url = `${serverBasePath}/api/homepageimages`;
      console.log("url", url);
      const res = await axios.get(url, {
        params: {
          populate: "*",
        },
      });
      const sliders = res.data.data.map((c) => ({
        url: `${serverBasePath}${c.attributes.image.data[0].attributes.url}`,
        description: c.attributes.Description,
      }));
      setSlides(sliders);
    } catch (e) {}
  };
  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <div style={{...containerStyles,height: 600 }}>
      <ImageSlider slides={slides} />
    </div>
  );
};
