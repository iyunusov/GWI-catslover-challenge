import React, { useCallback, useContext } from 'react';
import { IconButton, ImageListItem as MuiImageListItem, ImageListItemBar } from "@mui/material";
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { apiHeaders, apiRoute } from "@/utils/apiRoutes";
import { srcset } from '@/utils/functions';
import { useState } from "react";
import { IImageList } from './ImageList';
import ModalContext from '@/app/modalContext';
import { useRouter, useSearchParams } from 'next/navigation';
import ModalContentImage from '../Modal/ModalImageContent';

export type Image = {
    id: string;
    url: string;
    name?: string;
    width: string;
    height: string;
    breeds: any[];
    favourite?: any;
}
interface IImageListItem { 
  image: Image;
  title: string;
  rows: number;
  cols: number;
  handleFavoriteClick?: IImageList['handleFavoriteClick']
};
export default function ImageListItem ({ image: imageProp, title, cols, rows, handleFavoriteClick }: IImageListItem) {
  const [image, setImage] = useState(imageProp);
  const { openModal, setModalContent, closeModal } = useContext(ModalContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onFavouriteClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if(image.favourite) {
      await fetch(`${apiRoute}/favourites/${image.favourite.id}`, {
        method: 'DELETE',
        headers: apiHeaders,
      })
      if (handleFavoriteClick) {
        handleFavoriteClick(image.id);
        return;
      }
      setImage(({ favourite, ...others }: Image) => others)
      return;
    }

    var rawBody = JSON.stringify({ 
      "image_id": image.id,
      "sub_id": window.localStorage.getItem('sub_id')
    });

    const response = await fetch(
      `${apiRoute}/favourites`, 
      {
          method: 'POST',
          headers: apiHeaders,
          body: rawBody
      }
    )
    const { id: favId } = await response.json();

    setImage((prevImage: Image) => ({
        ...prevImage,
        favourite: { id: favId }
      })
    );
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as unknown as URLSearchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/cats?${createQueryString('image_id', image.id)}`, { scroll: false })
    setModalContent(<ModalContentImage image={image} />)
    openModal();
  }

  return (
    <MuiImageListItem key={image.url} onClick={onClick} cols={cols} rows={rows}>
      <img
        {...srcset(image.url, 250, 200, rows, cols)}
        alt={title}
        loading="eager"
      />
      <ImageListItemBar
        sx={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        }}
        title={title}
        position="top"
        actionIcon={
          <IconButton
            sx={{ color: 'white' }}
            aria-label={`star ${title}`}
            onClick={onFavouriteClick}
          >
            {image.favourite ? <FavoriteIcon />: <FavoriteBorderIcon />}
          </IconButton>
        }
        actionPosition="left"
      />
    </MuiImageListItem>
  )
}