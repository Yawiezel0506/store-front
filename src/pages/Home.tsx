import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Category } from "../interfaces/category";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../rtk/hooks";
import { render } from "../rtk/cartSlice";
import { useNavigate } from "react-router-dom";
import HomeSkeleton from "../components/HomeSkeleton";
import { cardCategory, pHello } from "../style/home";
interface Banner {
  author: string;
  category: string;
  createdAt: string;
  id: number;
  image: {
    alt: string;
    url: string;
  };
  productID: number;
  rating: number;
  sale: number;
  text: string;
  _id: string;
}

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_SERVER_API;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveBanner = () => {
      if (scrollContainerRef.current) {
        const newScrollPosition = scrollContainerRef.current.scrollLeft + 1; // עדכון קטן של המיקום
        scrollContainerRef.current.scrollLeft = newScrollPosition;
      }
    };

    const interval = setInterval(moveBanner, 150); // כאן אתה יכול לשנות את המהירות

    return () => clearInterval(interval); // ניקוי הטיימר כאשר הקומפוננטה לא קיימת יותר
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`${baseURL}/api/categories`);
        const { data } = resp;
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [baseURL]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`https://serverbanners.onrender.com/api/banners`);
        const { data } = resp;
        console.log(resp);

        setBanners(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [baseURL]);
  console.log(banners);

  useEffect(() => {
    dispatch(render());
  }, [dispatch]);

  const clickToCard = (cat: string) => {
    navigate(`/products/${cat}`);
  };
  const handleClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '5px',
    cursor: 'pointer', // Changes the cursor to indicate it's clickable
    transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease', // Smooth transition for effects
    ':hover': {
      transform: 'scale(1.05)', // Slightly enlarges the image
      opacity: 0.9, // Slightly reduces the opacity
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Adds a shadow effect
    }
  };


  return (
    <>
     {banners && banners.length > 0 && (
  <>
    <style>
      {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
    <div className="hide-scrollbar" style={{
      display: 'flex',
      overflowX: 'auto',
      backgroundColor: "#E0E0E0",
      border: '2px solid #B3B3B3', // מסגרת בגוון אפור בהיר יותר
      padding: '10px',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    }}>
      <div ref={scrollContainerRef} style={{
        display: 'flex',
        flexWrap: 'nowrap'
      }}>
        {banners.map((banner, index) => (
          <div key={index} style={{
            minWidth: '300px',
            flexShrink: 0,
            margin: '5px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <img
              src={banner.image.url}
              alt={banner.image.alt}
              style={imageStyle}
              onClick={() => handleClick(banner.productID.toString())}
            />
          </div>
        ))}
      </div>
    </div>
  </>
)}


      <Typography variant="h1" align="center" gutterBottom style={pHello}>
        Hello
      </Typography>
      <Grid container spacing={2}>
        {loading ? (
          <HomeSkeleton />
        ) : (
          Array.isArray(categories) &&
          categories.map((cat: Category) => (
            <Grid item xs={12} sm={6} md={4} key={cat._id}>
              <Card sx={cardCategory}>
                <CardActionArea sx={{ flexGrow: 1 }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h3"
                      fontFamily="Fira Sans, sans-serif"
                      fontWeight="bold"
                      color="rgb(33,47,58)"
                    >
                      {cat.name}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: 210, objectFit: "" }}
                    image={cat.image}
                    alt={cat.name}
                    onClick={() => clickToCard(cat.name)}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Home;
