'use client'
import { uid } from 'uid';
import { Box, Typography, useTheme } from "@mui/material";
import { rootBoxStyles, topHeading } from "./styles";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import AccountTypeTabs from "@/components/Tabs/MenuTabs";
import PanelContent from "@/components/Tabs/PanelContent";
import Header from '@/components/Header/Header';
import Wrapper from '@/components/Wrapper/Wrapper';

import Cats from '@/components/PanelContent/Cats';
import Breeds from '@/components/PanelContent/Breeds';
import Favourites from '@/components/PanelContent/Favourites';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const components = {
  ['cats']: (<Cats />),
  ['breeds']: (<Breeds />),
  ['favourites']: (<Favourites />),
}

export default function CatTabsLayout ({ children }: { children: EmotionJSX.Element }) {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [_, tabName = 'cats'] = pathname.split('/');

  const handleTabChange = (newTabName: string) => {
    router.push(newTabName)
  };

  useEffect(() => {
    if (!window.localStorage.getItem('sub_id')) window.localStorage.setItem('sub_id', uid())
  }, [])

  return (
    <>
      <Header />
      <Wrapper type='auth'>
        <Box css={rootBoxStyles(theme)}>
          <Typography variant="h3" css={topHeading}>Create a new account</Typography>
          {Object.keys(components).includes(tabName) && (
            <AccountTypeTabs tabName={tabName} handleChangeProp={handleTabChange} />
          )}
          <PanelContent tabName={tabName} components={components} >{<></>}</PanelContent>
        </Box>
        {children}
      </Wrapper>
    </>
  )
}