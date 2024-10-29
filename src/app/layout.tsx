import '@mantine/core/styles.css';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: any }) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <ColorSchemeScript />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
    <NextIntlClientProvider messages={messages}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
