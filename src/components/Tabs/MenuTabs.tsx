import { Paper, Tab, Tabs, Typography } from "@mui/material";
import { tabButtonStyles, tabsIndicatorSpanStyles, tabsIndicatorStyles } from "./styles";
import { css } from '@emotion/react';
import { TAB_OPTIONS } from "@/utils/constants";

function TabContent ({ label, body }: { label: string; body: string; }) {
  return (
    <Typography variant={'body2'}>
      {label}
      <br />
      <Typography variant={'text1'} css={css`
        text-transform: initial;
        text-align: left;
      `}>{body}</Typography>
    </Typography>
  )
}

export default function MenuTabs ({ tabName = 'cats', handleChangeProp = (_) => {} }: { tabName: string; handleChangeProp: (newValue: string) => void }) {
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    handleChangeProp(newValue);
  };

  return (
    <Paper component={'div'}>
      <Tabs
        css={tabsIndicatorStyles}
        TabIndicatorProps={{ children: <span css={tabsIndicatorSpanStyles} /> }}
        value={Object.values(TAB_OPTIONS).includes(tabName as keyof typeof TAB_OPTIONS) ? tabName : 'cats' }
        onChange={handleChange}
        >
        <Tab
          value={TAB_OPTIONS['CATS']}
          label={(
            <TabContent label="Cats" body="cat photos" /> 
          )}
          disableRipple
          css={tabButtonStyles}
          />
        <Tab
          value={TAB_OPTIONS['BREEDS']}
          label={(
            <TabContent label="Breeds" body="cat breed info" />
          )}
          disableRipple
          css={tabButtonStyles}
          />
        <Tab
          value={TAB_OPTIONS['FAVOURITES']}
          label={(
            <TabContent label="Favourites" body="favourites selected" />
          )}
          disableRipple
          css={tabButtonStyles}
          />
      </Tabs>
    </Paper>
  )
}