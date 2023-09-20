import * as React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import ModalContext from '@/app/modalContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  maxHeight: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  flexDirection: 'column',
};

export default function Modal() {
  const { modalContent, closeModal, showModal } = React.useContext(ModalContext);

  return (
    showModal && (
      <MuiModal
        keepMounted
        open={showModal}
        onClose={closeModal}
        aria-labelledby="cat-image-preview"
        disableScrollLock
      >
        <Box sx={style}>
          {modalContent}
        </Box>
      </MuiModal>
    )
  );
}
