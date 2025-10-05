import * as React from 'react';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AccountDetailsForm } from '@/components/dashboard/account/account-details-form';
import { AccountInfo } from '@/components/dashboard/account/account-info';

export default function AccountPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Box sx={{ py: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h4">Account</Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                <AccountInfo />
              </Grid>
              <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                <AccountDetailsForm />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </DashboardLayout>
    </AuthGuard>
  );
}
