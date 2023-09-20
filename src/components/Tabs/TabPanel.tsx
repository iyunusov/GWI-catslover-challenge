import { Box } from "@mui/material";
import { css } from '@emotion/react';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  tabIndex: number;
  value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, tabIndex, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      css={css`
        height: ${tabIndex === index ? 'initial': '0'};
      `}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}