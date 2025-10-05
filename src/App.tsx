import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { UserProvider } from '@/contexts/user-context';

// Pages
import HomePage from '@/pages/Home';
import SignInPage from '@/pages/SignIn';
import SignUpPage from '@/pages/SignUp';
import ResetPasswordPage from '@/pages/ResetPassword';
import DashboardPage from '@/pages/Dashboard';
import CustomersPage from '@/pages/Customers';
import IntegrationsPage from '@/pages/Integrations';
import AccountPage from '@/pages/Account';
import SettingsPage from '@/pages/Settings';
import NotFoundPage from '@/pages/NotFound';

function App() {
  return (
    <LocalizationProvider>
      <UserProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth/sign-in" element={<SignInPage />} />
              <Route path="/auth/sign-up" element={<SignUpPage />} />
              <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/customers" element={<CustomersPage />} />
              <Route path="/dashboard/integrations" element={<IntegrationsPage />} />
              <Route path="/dashboard/account" element={<AccountPage />} />
              <Route path="/dashboard/settings" element={<SettingsPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </LocalizationProvider>
  );
}

export default App;
