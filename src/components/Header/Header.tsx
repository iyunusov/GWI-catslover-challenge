'use client'
import { Typography, Grid } from '@mui/material';
import TopBar from './TopBar';

const Header = () => {
  return (
    <TopBar>
      <Grid item xs={12} md={12}>
        <Typography variant="h6">GlobalWebIndex Engineering Challenge</Typography>
      </Grid>
    </TopBar>
  );
};

export default Header;