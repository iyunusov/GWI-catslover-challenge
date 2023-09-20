import { Box, FormControl, Table, TableRow, TableCell, ListItem, useTheme, ImageListItem, Typography, TableBody } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { css } from '@emotion/react';
import { useState } from 'react';
import { apiRoute, apiHeaders } from '@/utils/apiRoutes';
import { srcset } from '@/utils/functions';
import BreedListBody from "./BreedListBody";

interface BreedList { breeds: any[] }
export default function BreedList ({ breeds }: BreedList) {

  return (
    <FormControl component="form" css={css`background-color: white;`} fullWidth>
      {breeds && breeds.map(breed => {
        return (
          <BreedListBody key={breed.id} breed={breed} />
        )
      })}
    </FormControl>
  )
}