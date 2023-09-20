'use client';
import { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import theme from '../utils/theme';

export default function ThemeProvider ({ children } : { children: ReactNode }) {
  return (<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>);
};