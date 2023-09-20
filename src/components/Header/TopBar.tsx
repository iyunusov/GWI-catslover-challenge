'use client'
import { ReactNode, useEffect, useState, FC } from 'react';
import { AppBar, Toolbar, Grid, useTheme } from '@mui/material';
import { appBarPlaceholder, appBarStaticStyles, appBarStyles, appBarDynamicStyles, toolBarStyles } from './styles';

const HEADER_HEIGHT = 75;

export interface ITopBar { children: ReactNode, type?: 'default' | 'auth' };

const TopBar: FC<ITopBar> = ({ children, type }) => {
  const theme = useTheme();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <>
      <div css={appBarPlaceholder}></div>
      <AppBar color="transparent" css={[appBarStyles(), offset > HEADER_HEIGHT ? appBarDynamicStyles(theme): appBarStaticStyles(theme, HEADER_HEIGHT)]}>
        <Toolbar css={toolBarStyles(theme)}>
          <Grid container justifyContent={'space-between'} alignItems={'center'} >{children}</Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;