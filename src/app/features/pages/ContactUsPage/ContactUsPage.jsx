import { useEffect } from 'react';

import { useAxios } from '@core/hooks';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import XIcon from '@mui/icons-material/X';
import { IconButton, Stack, Typography } from '@mui/material';
import { Components } from '@ui';

import styles from './ContactUsPage.module.scss';

const ContactUsPage = () => {
  // const { data, loading, error, getAll } = useAxios('user');
  //
  // useEffect(() => {
  //   getAll().then();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={'row w-100'}>
        <div className={'col-12 col-sm-5'}>
          <div className={styles.card}>
            <Components.Form.Input label="Nombre" />
            <Components.Form.Input label="Apellido" />
            <Components.Form.Input label="Email" />
            <Components.Form.Input label="Número de teléfono" />
            <Components.Form.TextArea label="Mensaje" />
            <div className={'d-flex justify-content-end'}>
              <Components.Form.Button>Enviar</Components.Form.Button>
            </div>
          </div>
        </div>
        <div className={'col-12 col-sm-2'}></div>
        <div className={'col-12 col-sm-5'}>
          <div className={styles.card}>
            <Components.Form.Input
              label="Email"
              value="HumanTogether@gmail.com"
              disabled
            />
            <Components.Form.Input
              label="SMS / Whatsapp"
              value="+971 55 343 6433"
              disabled
            />
            <hr />
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography className={styles.socialLabel}>
                Redes Sociales:
              </Typography>
              <IconButton className={styles.socialIcon} size="small">
                <MusicNoteIcon />
              </IconButton>
              <IconButton className={styles.socialIcon} size="small">
                <XIcon />
              </IconButton>
              <IconButton className={styles.socialIcon} size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton className={styles.socialIcon} size="small">
                <FacebookIcon />
              </IconButton>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
