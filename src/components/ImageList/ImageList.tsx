import { ImageList as MuiImageList } from "@mui/material";
import ImageListItem, { type Image } from './ImageListItem';

export interface IImageList {
  images: Image[];
  handleFavoriteClick?: (id: string) => void;
}
export default function ImageList ({ images, handleFavoriteClick }: IImageList) {

  return (
    <MuiImageList
      sx={{
        transform: 'translateZ(0)',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
      gap={10}
      >
      {images && images.map((item) => {
        const cols = item.favourite ? 2 : 1;
        const rows = item.favourite ? 2 : 1;
        const title = item?.breeds?.map(({ name }) => name).join(', ') || '';
        
        return (
          <ImageListItem key={item.id} image={item} title={title} cols={cols} rows={rows} handleFavoriteClick={handleFavoriteClick} />
        );
      })}
    </MuiImageList>
  )
}