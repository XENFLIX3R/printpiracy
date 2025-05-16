
import React from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { Skull, Ship, Gamepad2, AppWindow, Settings } from 'lucide-react';
    import { motion } from 'framer-motion';
    import {
      NavigationMenu,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      navigationMenuTriggerStyle,
    } from "@/components/ui/navigation-menu";
    import { Button } from '@/components/ui/button';
    import { useTheme } from '@/components/theme-provider';


    const navItems = [
      { name: 'Home', path: '/', icon: Ship },
      { name: 'Games', path: '/games', icon: Gamepad2 },
      { name: 'Apps', path: '/apps', icon: AppWindow },
      { name: 'Settings', path: '/settings', icon: Settings },
    ];

    const Header = () => {
      const { theme, setTheme } = useTheme();

      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
      
      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Skull className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tighter">Piracy</span>
            </Link>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavLink to={item.path} className="block">
                      {({ isActive }) => (
                        <NavigationMenuLink 
                          className={`${navigationMenuTriggerStyle()} ${isActive ? 'bg-accent text-accent-foreground' : ''}`}
                        >
                          <item.icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </NavigationMenuLink>
                      )}
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <Skull className="h-5 w-5" /> : <Ship className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </motion.header>
      );
    };

    export default Header;