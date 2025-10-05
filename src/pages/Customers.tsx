import * as React from 'react';
import { AuthGuard } from '@/components/auth/auth-guard';
import { DashboardLayout } from '@/components/dashboard/layout/dashboard-layout';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';

export default function CustomersPage() {
  return (
    <AuthGuard>
      <DashboardLayout>
        <Box sx={{ py: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h4">Customers</Typography>
            <CustomersFilters />
            <CustomersTable />
          </Stack>
        </Box>
      </DashboardLayout>
    </AuthGuard>
  );
}
