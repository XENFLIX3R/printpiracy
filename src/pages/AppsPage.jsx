
import React from 'react';
    import { motion } from 'framer-motion';
    import { apps } from '@/config/content';
    import ContentCard from '@/components/ContentCard';
    import { AppWindow } from 'lucide-react';

    const AppsPage = () => {
      return (
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8"
          >
            <AppWindow className="h-10 w-10 mr-3 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">Apps</h1>
          </motion.div>

          {apps.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              No apps available yet. The digital seas are calm for now.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="show"
            >
              {apps.map((app, index) => (
                <ContentCard key={index} item={app} type="app" />
              ))}
            </motion.div>
          )}
        </div>
      );
    };

    export default AppsPage;