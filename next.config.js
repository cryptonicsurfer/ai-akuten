/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/book',
            destination: 'https://outlook.office365.com/owa/calendar/AIakuten@falkenbergskommun.onmicrosoft.com/bookings/', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
