import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MainNav } from './main-nav';
import { SideNav } from './side-nav';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <MainNav />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <SideNav />
        <Box component="main" sx={{ flex: 1, py: 3 }}>
          <Container maxWidth="xl">
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
