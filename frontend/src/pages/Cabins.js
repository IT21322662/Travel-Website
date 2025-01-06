import React, { useState } from "react";
import '../Cabins.css'; // Make sure this file exists
import MountainViewImage from '../images/card1.png'; // Corrected the import for image
import ForestEscapeImage from '../images/card2.png'; // Corrected the import for image
import SeasideRetreatImage from '../images/card3.png'; // Corrected the import for image
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const cabins = [
  {
    location: "Hampshire · England",
    name: "Rustic country retreat",
    image: MountainViewImage, // Use the imported image variable
    description: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    price: "£210pp",
    rating: 4.5, // Rating out of 5
    reviewCount: 82 // Number of reviews
  },
  {
    location: "Norfolk · England",
    name: "Cozy getaway cabin",
    image: ForestEscapeImage, // Use imported image
    description: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    price: "£312pp",
    rating: 4.2, // Rating out of 5
    reviewCount: 82 // Number of reviews
  },
  {
    location: "Hampshire · England",
    name: "Seaside Retreat Cabin",
    image: SeasideRetreatImage, // Use imported image
    description: "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    price: "£210pp",
    rating: 4.8, // Rating out of 5
    reviewCount: 82 // Number of reviews
  }
];

// Modify the getStars function to render custom star colors and white for one star
const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  // Full stars will be green
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} style={{ color: 'green' }}>⭐</span>);
  }

  // Half star will be white
  if (halfStar) {
    stars.push(<span key="half" style={{ color: 'white' }}>⭐️</span>);
  }

  // Empty stars will be white
  while (stars.length < 5) {
    stars.push(<span key={`empty-${stars.length}`} style={{ color: 'white' }}>☆</span>);
  }

  return stars;
};

const Cabins = () => {
  const [likedCabins, setLikedCabins] = useState([]);

  const toggleLike = (index) => {
    setLikedCabins((prev) => {
      if (prev.includes(index)) {
        return prev.filter((id) => id !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div>
      <br></br>
      <h2>
        <span style={{ textDecoration: 'underline', textDecorationColor: '#F5B963', marginRight: '10px' }}>
          Discover
        </span>
        our idyllic countryside cabins
      </h2>
      <p>Fully equipped kitchen and bathroom with plenty of walking and cycling routes to explore.</p>

      <div className="cabins-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cabins.map((cabin, index) => (
          <Card key={index} sx={{
            maxWidth: 345,
            marginBottom: 3,
            backgroundColor: 'black',  // Set card background color to black
            color: 'white',  // Set text color to white
            boxShadow: 3, // Optional shadow for better UI
            position: 'relative', // Positioning for the like button
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="247"
                image={cabin.image} // Image URL from the cabins array
                alt={cabin.name}
              />
              {/* Like Icon in Black Box */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                  borderRadius: '10%', // Circular background for icon
                  padding: '8px', // Some padding for the icon
                  zIndex: 10, // Make sure it's above the image
                }}
              >
                <IconButton
                  onClick={() => toggleLike(index)}
                  sx={{
                    color: likedCabins.includes(index) ? 'red' : 'white', // Change color based on like status
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </div>
              <CardContent>
                {/* Cabin Name and Price in the same row */}
                <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', marginBottom: '10px', textAlign: 'left' }}>
                  {cabin.location}
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {/* Cabin Name aligned to the right */}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: 'white', flex: 1, textAlign: 'left', marginRight: '10px' }}
                  >
                    {cabin.name}
                  </Typography>

                  {/* Price aligned to the left */}
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', fontWeight: 'bold', textAlign: 'right', marginLeft: '10px' }}
                  >
                    {cabin.price}
                  </Typography>
                </div>

                {/* Location and Description under Cabin Name */}

                <Typography variant="body2" sx={{ color: 'white', fontSize: '14px', textAlign: 'left' }}>
                  {cabin.description}
                </Typography>

                {/* Rating and Reviews aligned in one row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '10px' }}>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {getStars(cabin.rating)} ({cabin.reviewCount} reviews)
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cabins;
