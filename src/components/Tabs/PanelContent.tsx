import { Paper, useTheme } from "@mui/material";
import { ReactNode } from "react";
import TabPanel from "./TabPanel";
import SwipeableViews from 'react-swipeable-views';
import { css } from '@emotion/react';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PanelContent ({ tabName, components, children }: { tabName: string; components: { [key: string]: ReactNode }, children: ReactNode }) {
  const theme = useTheme();
  const tabIndex = Object.keys(components).indexOf(tabName);
  return (
    <Paper css={css`margin-top: 20px; margin-bottom: 50px;`} component={'div'}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabIndex}
        animateTransitions={true}
        // height={'min-content'}
        // animateHeight={true}
      >
        {
          Object.values(components).map((component: ReactNode, index: number) => (
            <TabPanel key={index} value={index} index={index} tabIndex={tabIndex} dir={theme.direction} {...a11yProps(index)}>
              {component}
            </TabPanel>
          ))
        }
      </SwipeableViews>
     </Paper>
  )
}