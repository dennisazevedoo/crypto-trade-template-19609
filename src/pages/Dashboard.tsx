import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Box sx={{ py: 3 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 3, sm: 6 }}>
              <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
            </Grid>
            <Grid size={{ xs: 12, lg: 3, sm: 6 }}>
              <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
            </Grid>
            <Grid size={{ xs: 12, lg: 3, sm: 6 }}>
              <TasksProgress sx={{ height: '100%' }} value={75.5} />
            </Grid>
            <Grid size={{ xs: 12, lg: 3, sm: 6 }}>
              <TotalProfit sx={{ height: '100%' }} value="$15k" />
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Sales sx={{ height: '100%' }} />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Traffic sx={{ height: '100%' }} />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <LatestProducts sx={{ height: '100%' }} />
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 8 }}>
              <LatestOrders sx={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </AuthGuard>
  );
}
