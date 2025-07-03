import { useEffect } from 'react';

export default function SakhiBot() {
  useEffect(() => {
    const loadBotpress = () =>
      new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    const loadConfig = () =>
      new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://files.bpcontent.cloud/2025/07/01/13/20250701131259-WRI7AMQO.js';
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    loadBotpress()
      .then(() => loadConfig())
      .catch((err) => console.error('Error loading Botpress scripts', err));
  }, []);

  return null;
}

