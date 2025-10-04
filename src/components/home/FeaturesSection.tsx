import { motion } from 'framer-motion';
import { Package, ShoppingCart, Users, BarChart3, UserCircle, Layout } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gerencie seus produtos com facilidade. Controle quantidade, preço, custo e receba alertas de estoque baixo.',
    color: 'text-blue-500',
  },
  {
    icon: ShoppingCart,
    title: 'Gestão de Vendas',
    description: 'Registre vendas rapidamente, acompanhe o desempenho e analise suas margens de lucro em tempo real.',
    color: 'text-green-500',
  },
  {
    icon: Users,
    title: 'CRM Completo',
    description: 'Mantenha um cadastro completo de clientes com histórico de compras e informações de contato.',
    color: 'text-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Relatórios em Tempo Real',
    description: 'Visualize dashboards interativos com KPIs, gráficos e análises detalhadas do seu negócio.',
    color: 'text-orange-500',
  },
  {
    icon: UserCircle,
    title: 'Controle de Equipe',
    description: 'Gerencie sua equipe, turnos de trabalho e acompanhe o desempenho individual de cada colaborador.',
    color: 'text-pink-500',
  },
  {
    icon: Layout,
    title: 'Dashboard Intuitivo',
    description: 'Interface moderna e fácil de usar, com todas as informações importantes em um único lugar.',
    color: 'text-primary',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que você precisa para{' '}
            <span className="text-gradient">crescer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas essenciais para gerenciar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass h-full hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
