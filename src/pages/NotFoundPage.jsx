
import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Skull } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-15rem)] py-12">
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
            className="mb-8"
          >
            <Skull className="h-32 w-32 text-destructive animate-bounce" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-extrabold tracking-tighter mb-4"
          >
            404 - Lost at Sea!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-md mb-8"
          >
            Arr! It seems ye've ventured into uncharted waters. This page does not exist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Return to Safe Harbor (Home)
              </Button>
            </Link>
          </motion.div>
        </div>
      );
    };

    export default NotFoundPage;