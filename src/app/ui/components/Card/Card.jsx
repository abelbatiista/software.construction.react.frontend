import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from '@mui/material';

const Card = () => {
  return (
    <MuiCard
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 4,
        backdropFilter: 'blur(6px)',
        color: '#fff',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="/images/image-1.jpg"
        alt="Descripción"
      />
      <CardContent>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Juan perez
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Se necesita alimento para la comunidad de La Cañitas
        </Typography>
        <LinearProgress
          variant="determinate"
          value={70}
          sx={{
            borderRadius: 5,
            height: 8,
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
        />
        <Typography variant="caption" sx={{ mt: 1 }}>
          70%
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
