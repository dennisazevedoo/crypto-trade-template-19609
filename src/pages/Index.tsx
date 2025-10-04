import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Sistema de Gestão Empresarial
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Gerencie seu negócio de forma eficiente com controle completo de estoque, vendas, clientes e equipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="button-gradient"
            onClick={() => navigate("/auth")}
          >
            Começar Agora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/auth")}
          >
            Fazer Login
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            "Controle de Estoque",
            "Gestão de Vendas",
            "CRM Completo",
            "Relatórios em Tempo Real",
            "Controle de Equipe",
            "Dashboard Intuitivo"
          ].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-lg"
            >
              <p className="text-center font-medium">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
