import { FormControl } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { fetchBreedImages, fetchImageById, fetchRandomImages } from "@/utils/apiRoutes";
import ImageList from '@/components/ImageList/ImageList';
import ModalContext from "@/app/modalContext";
import ModalContentImage from "../Modal/ModalImageContent";

export default function Cats () {
  const [images, setImages] = useState<any[]>([]);
  const [, tabName] = usePathname().split('/');
  const searchParams = useSearchParams();
  const breed_ids = searchParams.get('breed_ids');
  const image_id = searchParams.get('image_id');
  const { setModalContent, openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    if (tabName === 'cats') {
      (async () => {
        if (breed_ids) { 
          const breedImages = await fetchBreedImages(breed_ids);
          if (breedImages) setImages(breedImages);
        } else {
          const tenRandomImages = await fetchRandomImages(10);
          if (tenRandomImages) setImages(tenRandomImages)
        }
      })()
    }
  }, [breed_ids, tabName])

  useEffect(() => {
    (async () => {
      if (image_id && images.length) {
        let image = images.find(({ id }) => id === image_id);
        if (!image) {
          image = await fetchImageById(image_id);
          setImages(images => [image, ...images])
        }
        openModal()
        setModalContent(<ModalContentImage image={image} />)
      } else {
        closeModal();
      }
    })()
  }, [image_id, images, setModalContent]);

  return (
    <FormControl component="form" fullWidth onSubmit={() => {}}>
      <ImageList images={images} key={images.length} />
    </FormControl>
  )
}