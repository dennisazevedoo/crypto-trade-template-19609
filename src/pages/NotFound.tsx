import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box
            component="img"
            src="/assets/error-404.png"
            sx={{ height: 'auto', maxWidth: '100%', width: '400px' }}
          />
          <Typography variant="h3">404: Page not found</Typography>
          <Typography color="text.secondary">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/')}>
            Go to Home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
