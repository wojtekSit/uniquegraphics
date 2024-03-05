import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    defaultLocale: 'pl',
    localePrefix,
    locales: ['en', 'de', 'pl'],

});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(pl|en|de)/:path*']
};
