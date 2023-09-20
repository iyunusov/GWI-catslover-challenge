import { FormControl } from "@mui/material";
import { useEffect, useState} from "react";
import { fetchFavourites } from "@/utils/apiRoutes";
import ImageList from "../ImageList/ImageList";
import { type Image } from '@/components/ImageList/ImageListItem';
import { usePathname } from "next/navigation";

export default function Favourites () {
  const [images, setImages] = useState([]);
  const [, tabName] = usePathname().split('/');

  useEffect(() => {
    if (tabName === 'favourites') {
      (async () => {
        const fetchedImages = await fetchFavourites();
        setImages(fetchedImages.map((item: { image: Image, id: string; }) => 
            ({ ...item?.image, favourite: { id: item.id } })
        ))
      })()
    }
  }, [tabName])

  const handleFavoriteClick = (id: string) => {
    setImages(() => images.filter((image: Image) => image?.id !== id));
  }

  return (
    <FormControl component="form" fullWidth onSubmit={() => {}}>
      <ImageList images={images} handleFavoriteClick={handleFavoriteClick} />
    </FormControl>
  )
}