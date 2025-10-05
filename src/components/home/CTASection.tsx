import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center border-primary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já estão gerenciando seus negócios de forma mais eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => navigate('/auth')}
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/auth')}
            >
              Fazer Login
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
