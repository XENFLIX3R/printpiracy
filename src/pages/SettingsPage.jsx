import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Settings, Palette, ShieldCheck, Info, EyeOff, LibraryBig } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Switch } from '@/components/ui/switch';
    import { Label } from '@/components/ui/label';
    import { useTheme } from '@/components/theme-provider';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
    import { cloakOptions } from '@/config/content';
    import { setFavicon } from '@/lib/utils';
    import { useToast } from "@/components/ui/use-toast";

    const SettingsPage = () => {
      const { theme, setTheme } = useTheme();
      const [currentCloak, setCurrentCloak] = useState(cloakOptions[0]);
      const { toast } = useToast();

      useEffect(() => {
        document.title = currentCloak.title;
        setFavicon(currentCloak.iconUrl);
      }, [currentCloak]);

      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };

      const handleAboutBlankCloak = () => {
        try {
          const newWindow = window.open('about:blank', '_blank'); 
          if (newWindow) {
            newWindow.document.write(`
              <html>
                <head>
                  <title>${document.title}</title>
                  <link rel="icon" href="${currentCloak.iconUrl}" />
                  <style>
                    body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
                    iframe { border: none; width: 100%; height: 100%; }
                  </style>
                </head>
                <body>
                  <iframe src="${window.location.href}"></iframe>
                </body>
              </html>
            `);
            newWindow.document.close();
            toast({
              title: "Stealth Mode Activated!",
              description: "Content is now displayed in an about:blank tab.",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Cloak Failed",
              description: "Popup blocker might be preventing the cloak. Please allow popups for this site.",
            });
          }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error during cloaking",
                description: "Could not open or write to the new window. Your browser might be blocking this action.",
            });
            console.error("Error during about:blank cloak:", error);
        }
      };

      const handleCloakChange = (cloak) => {
        setCurrentCloak(cloak);
        toast({
          title: "Tab Cloak Applied",
          description: `Tab now appears as "${cloak.name}".`,
        });
      };

      return (
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-10"
          >
            <Settings className="h-10 w-10 mr-3 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
          </motion.div>

          <div className="space-y-12 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Palette className="mr-2 h-6 w-6 text-primary" /> Appearance
              </h2>
              <div className="p-6 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme-toggle" className="text-lg">
                    Dark Mode
                  </Label>
                  <Switch
                    id="theme-toggle"
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                    aria-label="Toggle dark mode"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Switch between light and dark themes for your viewing pleasure.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <EyeOff className="mr-2 h-6 w-6 text-primary" /> Tab Cloaking
              </h2>
              <div className="p-6 border rounded-lg bg-card shadow-sm space-y-4">
                <div>
                  <Label htmlFor="cloak-select" className="text-lg mb-2 block">Select Tab Cloak</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" id="cloak-select" className="w-full justify-between">
                        {currentCloak.name}
                        <LibraryBig className="ml-2 h-4 w-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 md:w-[calc(var(--radix-dropdown-menu-trigger-width)-2px)]" align="start">
                      <DropdownMenuLabel>Choose a Cloak</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {cloakOptions.map((cloak) => (
                        <DropdownMenuItem key={cloak.name} onSelect={() => handleCloakChange(cloak)}>
                          {cloak.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <p className="text-sm text-muted-foreground mt-2">
                    Changes the browser tab title and icon. Current: <span className="font-semibold">{currentCloak.title}</span>
                  </p>
                </div>
                <div>
                  <Button 
                    variant="destructive" 
                    onClick={handleAboutBlankCloak} 
                    className="w-full bg-gradient-to-r from-destructive to-red-700 hover:from-destructive/90 hover:to-red-700/90 text-destructive-foreground"
                    aria-label="Cloak tab as about:blank"
                  >
                    <EyeOff className="mr-2 h-4 w-4" /> Open Site in about:blank Tab
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Opens the current site inside a new tab that appears as 'about:blank'.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <ShieldCheck className="mr-2 h-6 w-6 text-primary" /> Proxy Options (Visual Only)
              </h2>
              <div className="p-6 border rounded-lg bg-card shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="stealth-mode" className="text-lg">Stealth Mode</Label>
                  <Switch id="stealth-mode" aria-label="Toggle stealth mode" disabled />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  This is a visual placeholder and does not provide actual stealth functionality.
                </p>
                <Button variant="outline" disabled>Clear Cache (Visual)</Button>
                 <p className="text-sm text-muted-foreground mt-1">
                  Ultraviolet proxy integration is a complex feature beyond current capabilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-6 w-6 text-primary" /> About
              </h2>
              <div className="p-6 border rounded-lg bg-card shadow-sm">
                <p className="text-muted-foreground">
                  Piracy Version: <span className="font-semibold text-foreground">1.0.2 (Alpha)</span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This application is for demonstration and educational purposes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    };

    export default SettingsPage;