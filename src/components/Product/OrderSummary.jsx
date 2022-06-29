// import React, { useContext } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { ProductContext } from './ProductContext';

// import { styled } from '@mui/material/styles';

// const style = {
//    position: 'absolute',
//    top: '50%',
//    left: '50%',
//    transform: 'translate(-50%, -50%)',
//    width: 600,
//    height: 800,
//    bgcolor: 'background.paper',
//    boxShadow: 24,
//    p: 4,
// };

// export default function BasicModal() {
//    const {
//       data,
//       handleOpen,
//       handleClose,
//       open,
//       setOpen,
//       modal,

//       quantity,
//       setQuantity,
//       cart,
//       setCart,
//       setModal,
//       openConfirmation,
//       setOpenConfirmation,
//       handleCloseSummary,
//    } = useContext(ProductContext);
//    //    const [open, setOpen] = React.useState(false);
//    //    const handleOpen = () => setOpen(true);
//    //    const handleClose = () => setOpen(false);
//    //    const handleOpenSummary = () => {
//    //       console.log('hi');
//    //    };
//    {
//       console.log(cart);
//    }
//    return (
//       <div>
//          {cart.map((item) => (
//             <Modal
//                open={openConfirmation}
//                onClose={handleCloseSummary}
//                aria-labelledby="modal-modal-title"
//                aria-describedby="modal-modal-description"
//             >
//                <ItemBox sx={style}>
//                   <img src={item.image} alt="food" style={{ width: '2rem' }} />

//                   <FlexBox>
//                      <Typography
//                         id="modal-modal-title"
//                         variant="h4"
//                         component="h2"
//                      >
//                         {item.itemName}
//                      </Typography>
//                      <Typography
//                         variant="h6"
//                         component="h4"
//                         id="modal-modal-description"
//                         sx={{ mt: 2, color: 'gray' }}
//                      >
//                         {item.description}
//                      </Typography>
//                   </FlexBox>
//                </ItemBox>
//             </Modal>
//          ))}
//       </div>
//    );
// }

// const ItemBox = styled(Box)``;
// const FlexBox = styled(Box)``;
