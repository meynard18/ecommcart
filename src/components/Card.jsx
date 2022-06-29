import React, { useContext } from 'react';
import { ProductContext } from './Product/ProductContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
   Button,
   CardActionArea,
   cardActionAreaClasses,
   CardActions,
} from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardComponent = () => {
   const {
      data,
      handleAddToCart,
      handleOpen,
      handleClose,
      open,
      setOpen,
      setModal,
      modal,
      cart,
   } = useContext(ProductContext);

   const handleModal = (item) => {
      setModal([item]);
      handleOpen();
   };

   return (
      <>
         <Grid container sx={{ justifyContent: 'center', gap: 4, mt: 6 }}>
            {data.map((item, idx) => (
               <Card sx={{ minWidth: 340 }} key={idx}>
                  <CardActionArea
                     onClick={() => {
                        handleModal(item);
                     }}
                  >
                     <CardMedia
                        component="img"
                        height="240"
                        image={item.image}
                        alt="green iguana"
                     />
                     <CardContent>
                        <Typography
                           gutterBottom
                           variant="h5"
                           component="div"
                           style={{ textAlign: 'center' }}
                        >
                           {item.itemName}
                        </Typography>
                        <Typography
                           style={{ textAlign: 'center' }}
                           variant="subtitle1"
                           color="text.secondary"
                        >
                           {item.description}
                        </Typography>
                     </CardContent>
                  </CardActionArea>
                  <CardActions>
                     <StyledButton
                        size="small"
                        color="primary"
                        value={item}
                        disabled={item.quantity < item.count ? false : true}
                        onClick={() => handleAddToCart(item)}
                     >
                        Add to Cart
                     </StyledButton>
                  </CardActions>
               </Card>
            ))}
         </Grid>
      </>
   );
};

export default CardComponent;

const StyledButton = styled(Button)`
   background-color: #353839;
   color: white;
   width: 90%;
   margin: 1rem auto;
   padding: 0.25rem 0;
   border-radius: 5rem;
   &:hover {
      background-color: #151515;
   }
`;
