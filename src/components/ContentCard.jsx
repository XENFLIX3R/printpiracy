
import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { PlayCircle, ExternalLink } from 'lucide-react';

    const ContentCard = ({ item, type }) => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      };

      const handlePlay = () => {
        // In a real scenario, this would handle the embed code or link
        alert(`Playing ${item.name}! (Embed code: ${item.embedCode})`);
      };

      return (
        <motion.div
          variants={cardVariants}
          className="bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full h-48 bg-secondary/50 flex items-center justify-center">
            <img  
              alt={item.name} 
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1701330415878-163aacb005ff" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-foreground truncate">{item.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{item.description}</p>
            <Button 
              onClick={handlePlay} 
              className="w-full mt-auto bg-primary hover:bg-primary/80 text-primary-foreground"
              aria-label={`Launch ${item.name}`}
            >
              {type === 'game' ? <PlayCircle className="mr-2 h-5 w-5" /> : <ExternalLink className="mr-2 h-5 w-5" />}
              Launch {type === 'game' ? 'Game' : 'App'}
            </Button>
          </div>
        </motion.div>
      );
    };

    export default ContentCard;