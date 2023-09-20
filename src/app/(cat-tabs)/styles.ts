import { css } from '@emotion/react';
import { Theme, useTheme } from '@mui/material/styles';

export const appBarStyles = (theme: Theme) => css`
  position: fixed;
  left: 0;
`;

export const toolBarStyles = (theme: Theme) => css`
  max-width: 1600px;
  margin: auto;
  width: 100%;
  height: 75px;
`;

export const rootBoxStyles = (theme: Theme) => css`
  grid-column-start: 2;
  grid-column-end: 12;

  ${theme.breakpoints.between('sm', 'md')} {
    grid-column-start: 2;
    grid-column-end: 12;
   };

   ${theme.breakpoints.down('sm')} {
    grid-column-start: 1;
    grid-column-end: 13;
   };
`;

export const topPaperStyles = () => css`
  width: auto;
`;

export const topHeading = () => css`
  padding: 20px 0 40px;
`