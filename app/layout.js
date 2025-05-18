
 
// app/layout.js
import '../styles/style.scss';
import { Providers } from './providers';

export const metadata = {
  title: {
    template: '%s | Inna Bogdan Personal Trainer',
    default: 'Inna Bogdan Personal Trainer',
  },

  description: 'Inna Bogdan vmwhoami - Personal Training Services',

  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
};