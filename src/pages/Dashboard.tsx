import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button asChild variant="outline">
            <Link to="/">Início</Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral</CardTitle>
              <CardDescription>Estatísticas principais</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-sm text-muted-foreground">Total de usuários</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Receita</CardTitle>
              <CardDescription>Últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">R$ 45.231</p>
              <p className="text-sm text-green-600">+12% vs mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Atividade</CardTitle>
              <CardDescription>Hoje</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">234</p>
              <p className="text-sm text-muted-foreground">Ações realizadas</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
