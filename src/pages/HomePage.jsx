
import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Search, Compass } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const HomePage = () => {
      return (
        <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Compass className="h-24 w-24 md:h-32 md:w-32 text-primary animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-foreground"
          >
            Welcome to Piracy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Navigate the web seas freely. Enter an address or search below to begin your voyage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full max-w-lg flex items-center space-x-2 mb-12"
          >
            <Input
              type="text"
              placeholder="Enter URL or search term..."
              className="flex-grow text-lg p-4 rounded-lg border-2 border-input focus:border-primary"
              aria-label="Search or enter URL"
            />
            <Button size="lg" className="p-4 rounded-lg bg-primary hover:bg-primary/90">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md"
          >
            <Link to="/games">
              <Button variant="outline" size="lg" className="w-full py-6 text-lg border-2 hover:border-primary hover:bg-accent">
                Explore Games
              </Button>
            </Link>
            <Link to="/apps">
              <Button variant="outline" size="lg" className="w-full py-6 text-lg border-2 hover:border-primary hover:bg-accent">
                Discover Apps
              </Button>
            </Link>
          </motion.div>
        </div>
      );
    };

    export default HomePage;