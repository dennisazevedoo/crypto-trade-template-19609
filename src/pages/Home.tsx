import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Logo } from '@/components/core/logo';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="header" sx={{ py: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Logo />
        </Container>
      </Box>
      
      <Box component="main" sx={{ flex: 1, display: 'flex', alignItems: 'center', py: 8 }}>
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h2" component="h1">
              Material Kit React
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 'sm' }}>
              A professional React admin dashboard template built with Material-UI
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/dashboard')}
              >
                View Dashboard
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => navigate('/auth/sign-in')}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
