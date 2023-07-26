import React, { useEffect } from 'react';
import Navbar from './Navbar';
// import 'semantic-ui-css/semantic.min.css';
import '../assets/css/loader.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {Script} from "gatsby";

const Layout = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
      <>
        {loading && (
            <Box sx={{ width: '100%' }} className='loader-box'>
              <LinearProgress color="warning" className='loader' />
            </Box>
        )}

        {!loading && (
            <>
              <div>
                <Navbar />
                {children}
              </div>
            </>
        )}
      </>
  );
};

export default Layout;



