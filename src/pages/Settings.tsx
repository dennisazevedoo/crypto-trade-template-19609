import * as React from 'react';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Notifications } from '@/components/dashboard/settings/notifications';
import { UpdatePasswordForm } from '@/components/dashboard/settings/update-password-form';

export default function SettingsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Box sx={{ py: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h4">Settings</Typography>
            <Notifications />
            <UpdatePasswordForm />
          </Stack>
        </Box>
      </DashboardLayout>
    </AuthGuard>
  );
}
