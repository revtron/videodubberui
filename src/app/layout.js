// src/app/layout.js
import { MantineProvider } from '@mantine/core';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Mantine App</title>
      </head>
      <body>
        <MantineProvider
          theme={{ colorScheme: 'light' }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
