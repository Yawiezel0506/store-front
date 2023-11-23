import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, IconButton, Accordion, AccordionSummary, AccordionDetails, Box} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProductDetailsProps {
  product: Product;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  attributes: Attributes[];
}

interface Attributes {
  key: string;
  value: number | string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const {
    title,
    image,
    price,
    attributes,
    description
  } = product;

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ backgroundColor: 'cornsilk' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: 'auto' }}
            />
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <IconButton variant="contained" color="primary">
                  <FavoriteIcon />
                
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton variant="contained" color="secondary">
                  <ShoppingCartIcon />
              
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{flexGrow:"1"}}/>

          <Grid item xs={12} md={8} container direction="column">
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Price: ${price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Attributes:
            </Typography>
            <ul>
              {attributes.map((attr, index) => (
                <li key={index}>
                  {attr.key}: {attr.value}
                </li>
              ))}
            </ul>
            <Accordion expanded={expanded} onChange={handleExpand} sx={{width: "25vw"}} style={{ backgroundColor: 'cornsilk' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ maxWidth: 'fit content' }}>
                <Typography variant="subtitle1" sx= {{width:'50%'}}>Description</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ width: 'fit content', overflowWrap: 'break-word' }}>
                <Typography variant="body1">{description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
