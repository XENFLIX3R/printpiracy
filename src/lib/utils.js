import { clsx } from "clsx"
    import { twMerge } from "tailwind-merge"

    export function cn(...inputs) {
      return twMerge(clsx(inputs))
    }

    export function setFavicon(url) {
      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    export function getCurrentFavicon() {
      const link = document.querySelector("link[rel*='icon']");
      return link ? link.href : null;
    }