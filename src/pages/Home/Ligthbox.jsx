import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
//import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://i.ibb.co/B552vSfC/13.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "https://i.ibb.co/B552vSfC/13.jpg", width: 320, height: 213 },
              { src: "https://i.ibb.co/6J4ch5Dv/food1.jpg", width: 640, height: 427 },
              { src: "https://i.ibb.co/JWJhxwzM/food3.jpg", width: 1200, height: 800 },
              { src: "https://i.ibb.co/B552vSfC/13.jpg", width: 2048, height: 1365 },
              { src: "https://i.imghippo.com/files/qj8596GHw.jpg", width: 3840, height: 2560 },
            ],
          },
          // ...
        ]}
      />
    </>
  );
} 
//not worked please tell me why ???

import React from 'react';

const Ligthbox = () => {
    return (
        <div>
            
        </div>
    );
};

export default Ligthbox;