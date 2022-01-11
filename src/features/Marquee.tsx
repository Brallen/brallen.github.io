import React from 'react';

import { SvgIcon, Typography } from '@mui/material';
import { Box, SxProps } from '@mui/system';

import Landscape from '../images/landscape.svg';

const classes: { [className: string]: SxProps } = {
  image: {
    width: 'inherit',
    height: 'inherit',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const Marquee: React.FC = () => {
  return (
    <Box component="section" >
      <Typography variant="h1" align="center">Brett Case</Typography>
      <Typography variant="h2" align="center">Software Engineer</Typography>
      <SvgIcon component={Landscape} sx={classes.image} viewBox="0 0 2665 886" />
    </Box>
  );
};

export default Marquee;


// import React from "react"
// import Landscape from "../../images/landscape.svg"

// const Marquee = () => (
//   <section className="main-marquee">
//     <div className="container">
//       <div className="text-center">
//         <h1 className="col-12">Brett Case</h1>
//         <h2 className="col-12">Software Engineer</h2>
//       </div>
//     </div>

//     <img src={Landscape} className="mountains" alt="mountain landscape" />
//   </section>
// )

// export default Marquee
