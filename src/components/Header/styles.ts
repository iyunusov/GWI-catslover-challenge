import { css } from '@emotion/react';
import { Theme, useTheme } from '@mui/material/styles';
import { ITopBar } from './TopBar';

export const appBarPlaceholder = () => css`
  position: relative;
  width: 100%;
  z-index: -99;
`;

export const appBarStyles = () => css`
  background-color: white;
  z-index: 1;
`

export const appBarStaticStyles = (theme: Theme, HEADER_HEIGHT: number) => css`
  position: absolute;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const appBarDynamicStyles = (theme: Theme) => css`
  position: fixed;
  left: 0;
`;
export const toolBarStyles = (theme: Theme) => css`
  margin: auto;
  width: 100%;
  max-width: 1200px;

  &.MuiToolbar-root {
    min-height: auto;
  }
`;
