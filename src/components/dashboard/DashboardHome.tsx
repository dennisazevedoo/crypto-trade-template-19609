import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface DashboardHomeProps {
  profile: any;
}

export const DashboardHome = ({ profile }: DashboardHomeProps) => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    loadStats();
  }, [profile]);

  const loadStats = async () => {
    if (!profile?.id) return;

    try {
      // Load products count
      const { count: productsCount } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true })
        .eq("company_id", profile.id);

      // Load sales count and total revenue
      const { data: salesData } = await supabase
        .from("sales")
        .select("total_amount")
        .eq("company_id", profile.id);

      // Load customers count
      const { count: customersCount } = await supabase
        .from("customers")
        .select("*", { count: "exact", head: true })
        .eq("company_id", profile.id);

      const totalRevenue = salesData?.reduce((sum, sale) => sum + Number(sale.total_amount || 0), 0) || 0;

      setStats({
        totalProducts: productsCount || 0,
        totalSales: salesData?.length || 0,
        totalCustomers: customersCount || 0,
        totalRevenue,
      });
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  };

  const statCards = [
    {
      title: "Total de Produtos",
      value: stats.totalProducts,
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "Total de Vendas",
      value: stats.totalSales,
      icon: ShoppingCart,
      color: "text-green-500",
    },
    {
      title: "Total de Clientes",
      value: stats.totalCustomers,
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Receita Total",
      value: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(stats.totalRevenue),
      icon: DollarSign,
      color: "text-primary",
    },
  ];

  const segmentLabels: Record<string, string> = {
    atacado_varejo: "Atacado e Varejo",
    autopecas_servicos: "Autopeças e Serviços",
    alimentacao_bebidas: "Alimentação e Bebidas",
    moda_vestuario: "Moda e Vestuário",
    beleza_estetica: "Beleza e Estética",
    tecnologia_informatica: "Tecnologia e Informática",
    construcao_materiais: "Construção e Materiais",
    saude_bem_estar: "Saúde e Bem-estar",
    educacao_treinamentos: "Educação e Treinamentos",
    servicos_financeiros: "Serviços Financeiros",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bem-vindo, {profile?.responsible_name}!</h1>
        <p className="text-muted-foreground mt-1">
          Segmento: {segmentLabels[profile?.business_segment] || profile?.business_segment}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Resumo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Seu sistema está pronto para gerenciar produtos, vendas, clientes e equipe.
            Use o menu lateral para navegar pelas funcionalidades.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
