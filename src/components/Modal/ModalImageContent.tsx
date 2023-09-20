import { ImageListItem } from "@mui/material";
import Link from 'next/link';
import { srcset } from "@/utils/functions";
import { Image } from "../ImageList/ImageListItem";
import { useContext } from "react";
import ModalContext from "@/app/modalContext";
import { css } from '@emotion/react';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ModalContentImage ({ image }: { image: Image }) {
  const { closeModal } = useContext(ModalContext);
  return (
    <>
      {image?.breeds?.length ? (
        <Box display={'inline-flex'} mb={'12px'}>
          <Typography whiteSpace={'pre'}>
            Go to category:{' '}
          </Typography>
          {image?.breeds?.map((breed: any) => (
            <Link
              key={breed.id}
              href={`/breeds?breed_id=${breed.id}`}
              onClick={() => closeModal()}
              scroll={false}
              >
                {breed.name}
            </Link>
          ))}
        </Box>
      ): <></>}
      <ImageListItem cols={1} rows={1} css={css`
          display: inline-flex;
          width: -webkit-fill-available;
          justify-content: center;
        `}>
        <img
          {...srcset(image.url, 250, 200, 1, 1)}
          alt={image.name}
          loading="eager"
        />
      </ImageListItem>
    </>
  )
}