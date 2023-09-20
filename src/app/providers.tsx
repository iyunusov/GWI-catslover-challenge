'use client';
import RootStyleRegistry from './styleRegistry';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme-provider';
import { ReactNode } from 'react';
import { ModalContextProvider } from './modalContext';

export default function Providers ({ children }: { children: ReactNode }) {
  return (
    <ModalContextProvider>
      <RootStyleRegistry>
        <ThemeProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RootStyleRegistry>
    </ModalContextProvider>
  )
}