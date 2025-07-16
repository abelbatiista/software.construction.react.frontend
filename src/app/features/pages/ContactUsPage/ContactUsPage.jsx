import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import XIcon from '@mui/icons-material/X';
import { IconButton, Stack, Typography } from '@mui/material';
import { Input, TextArea, Button } from '@ui/components/Form';

import styles from './ContactUsPage.module.scss';

const ContactUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={'row w-100'}>
        <div className={'col-12 col-sm-5'}>
          <div className={styles.card}>
            <Input label="Nombre" />
            <Input label="Apellido" />
            <Input label="Email" />
            <Input label="Número de teléfono" />
            <TextArea label="Mensaje" />
            <div className={'d-flex justify-content-end'}>
              <Button>Enviar</Button>
            </div>
          </div>
        </div>
        <div className={'col-12 col-sm-2'}></div>
        <div className={'col-12 col-sm-5'}>
          <div className={styles.card}>
            <Input label="Email" value="HumanTogether@gmail.com" disabled />
            <Input label="SMS / Whatsapp" value="+971 55 343 6433" disabled />
            <hr />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
