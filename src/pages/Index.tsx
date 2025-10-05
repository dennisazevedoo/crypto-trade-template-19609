import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-foreground">
            Material Kit React
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um template moderno e elegante para suas aplicações React
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/auth">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
