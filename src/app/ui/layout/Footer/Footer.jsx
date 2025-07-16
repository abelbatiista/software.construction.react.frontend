import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import XIcon from '@mui/icons-material/X';
import { Container, IconButton, Stack, Typography } from '@mui/material';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography className={styles.logo}>
            <span className={styles.human}>Human</span>
            <span className={styles.together}>Together</span>
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography className={styles.socialLabel}>
              Redes Sociales:
            </Typography>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={styles.socialIcon} size="small">
                <MusicNoteIcon />
              </IconButton>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={styles.socialIcon} size="small">
                <XIcon />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={styles.socialIcon} size="small">
                <InstagramIcon />
              </IconButton>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={styles.socialIcon} size="small">
                <FacebookIcon />
              </IconButton>
            </a>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
