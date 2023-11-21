import { AddShoppingCart } from "@mui/icons-material"
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Tooltip, IconButton, Stack, Paper, Link } from "@mui/material"


const Products = () => {
  // function imgURL() {
  //   throw new Error("Function not implemented.")
  // }

  // function formatEUR(): import("react").ReactNode {
  //   throw new Error("Function not implemented.")
  // }

  const sortedProducts: unknown = [1,2,3,4,5,6,7,8,9]

  return (
    <Grid container spacing={2}>
    {Array.isArray(sortedProducts) && sortedProducts.map((product) => (
      <Grid item xs={12} sm={6} md={4} key={product}>
        <Card
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <CardActionArea sx={{ flexGrow: 1 }}>
            <Link
              href={`/products/${product}`}
              sx={{
                textDecoration: 'none',
                // color: (theme) => theme.palette.text.primary,
              }}
            >
              <CardMedia
                component="img"
                sx={{ maxHeight: 210, objectFit: 'contain' }}
                // image={imgURL("kejew").width(270).url()}
                image={"data:image/jpeg;base64,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"}
                alt={product}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {product.title}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Tooltip title="Add to Cart">
              <IconButton color="primary">
                <AddShoppingCart />
              </IconButton>
            </Tooltip>
            <Stack spacing={1} direction="row">
              {/* {product.oldPrice && product.oldPrice > product.price && ( */}
                <>
                  <Typography
                    sx={{
                      textDecoration: 'line-through',
                      opacity: 0.5,
                    }}
                  >
                    {/* {formatEUR(product.oldPrice)} */}
                    15
                  </Typography>
                  <Paper
                    sx={{
                      bgcolor: 'red',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      position: 'absolute',
                      top: 5,
                      right: 5,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography color="white">Sale</Typography>
                  </Paper>
                </>
              {/* )} */}
              <Typography color="primary">
                {/* {formatEUR(product.price)} */}
                15
              </Typography>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
  )
}

export default Products
