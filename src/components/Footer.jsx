
import React from 'react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-6 md:px-8 md:py-0 border-t border-border/40 bg-background"
        >
          <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {currentYear} Piracy. All rights reserved. Built with treasure and code.
            </p>
            <p className="text-xs text-muted-foreground">
              Disclaimer: This site is for educational purposes only.
            </p>
          </div>
        </motion.footer>
      );
    };

    export default Footer;