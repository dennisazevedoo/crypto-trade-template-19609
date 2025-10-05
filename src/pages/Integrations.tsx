import * as React from 'react';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IntegrationsFilters } from '@/components/dashboard/integrations/integrations-filters';
import { IntegrationsCard } from '@/components/dashboard/integrations/integrations-card';

const integrations = [
  { id: '1', title: 'Dropbox', description: 'Cloud storage', logo: '/assets/logo-dropbox.png', installed: true },
  { id: '2', title: 'Medium', description: 'Publishing platform', logo: '/assets/logo-medium.png', installed: false },
  { id: '3', title: 'Slack', description: 'Communication', logo: '/assets/logo-slack.png', installed: true },
];

export default function IntegrationsPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Box sx={{ py: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h4">Integrations</Typography>
            <IntegrationsFilters />
            <Grid container spacing={3}>
              {integrations.map((integration) => (
                <Grid key={integration.id} size={{ xs: 12, md: 6, lg: 4 }}>
                  <IntegrationsCard integration={integration} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Box>
      </DashboardLayout>
    </AuthGuard>
  );
}
