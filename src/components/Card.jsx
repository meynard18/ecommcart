import React, { useContext } from 'react';
import { ProductContext } from './Product/ProductContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardComponent = () => {
   const { data, handleAddToCart } = useContext(ProductContext);

   return (
      <>
         <Grid container sx={{ justifyContent: 'center', gap: 4, mt: 6 }}>
            {data.map((item, idx) => (
               <Card sx={{ minWidth: 340 }} key={idx}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        height="240"
                        image={item.image}
                        alt="green iguana"
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {item.itemName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {item.description}
                        </Typography>
                     </CardContent>
                  </CardActionArea>
                  <CardActions>
                     <StyledButton
                        size="small"
                        color="primary"
                        value={item}
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
   background-color: gray;
   color: white;
   width: 90%;
   margin: 1rem auto;
   padding: 0.25rem 0;
   border-radius: 5rem;
   &:hover {
      background-color: #151515;
   }
`;
