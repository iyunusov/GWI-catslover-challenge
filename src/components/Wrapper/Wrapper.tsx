'use client'
import { Box, Grid } from '@mui/material';
import { maxWidth } from '@mui/system';

export default function Wrapper({ children, type = 'default' }: { children: React.ReactNode, type?: 'default' | 'auth' }) {
  return (
    <Box sx={(theme) => ({ 
        display: 'grid',
        gridColumnGap: 20,
        gridTemplateColumns: 'repeat(12, 1fr)',
        ...{ 
          ['default']: { maxWidth: '1600px' },
          ['auth']: { maxWidth: '1200px' }
        }[type],
        margin: 'auto',
        position: 'relative',
        zIndex: 0,

        [theme.breakpoints.down('sm')]: {
          padding: '0 20px',
        }
      })}>
      {children}
    </Box>
    )
}