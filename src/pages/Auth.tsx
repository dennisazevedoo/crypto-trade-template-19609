import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bem-vindo</CardTitle>
          <CardDescription>Faça login para continuar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Senha</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button asChild className="w-full">
            <Link to="/dashboard">Entrar</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/">Voltar</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
