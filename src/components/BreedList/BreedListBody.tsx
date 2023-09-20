import { Box, Table, TableRow, TableCell, ImageListItem, Typography, TableBody, Button } from "@mui/material";
import { useCallback } from "react";
import { css } from '@emotion/react';
import { useState } from 'react';
import { srcset } from '@/utils/functions';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface BreedListBody { breed: any }
export default function BreedListBody ({ breed }: BreedListBody) {
    const [showTable, setShowTable] = useState(false);
    const searParams = useSearchParams();
    const [ _, tabName ] = usePathname().split('/');
    const breed_id = searParams.get('breed_id')
    const router = useRouter();
    
    const imageRef = useCallback((node: HTMLImageElement) => {
      if (node !== null && tabName === 'breeds' && breed.id === breed_id) {
        const listener = () => node.scrollIntoView({ block: "center", behavior: 'smooth' });
        node.addEventListener('load', listener)
        setTimeout(() => node.scrollIntoView({ block: "center", behavior: 'smooth' }))
        return () => {
          node.removeEventListener('load', listener);
        }
      }
    }, [tabName])
  
    return (
      <Box key={breed.id} mb={'20px'} id={breed.id}>
        <Typography variant={'h4'}>{breed.name}</Typography>
        <ImageListItem cols={2} rows={2}>
          <img
            ref={imageRef}
            {...srcset(breed?.image?.url, 250, 200, 2, 2)}
            alt={breed.name}
            loading="eager"
            />
        </ImageListItem>
        <Button
          variant={'contained'}
          css={css`
            float: right;
            margin-top: -45px;
            margin-right: 12px;
          `}
          onClick={() => setShowTable(showTable => !showTable)}
          >{showTable ? 'Hide Details' : 'Show Details'}</Button>
        <Button
          variant={'contained'}
          css={css`
            float: left;
            margin-top: -45px;
            margin-left: 12px;
          `}
          onClick={() => router.push(`/cats?breed_ids=${breed.id}`)}
          >Show images</Button>
        {showTable && (
          <Table>
            <TableBody>
              {Object.entries(breed).filter(([key, value]) => typeof value !== 'object')
                .map((breedDetails) => {
                  const [key, value] = breedDetails as [string, string];
                  return (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        )}
      </Box>
    )
}