import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/doctor',
        destination: '/doctors',
        permanent: true,
      },
      {
        source: '/treatments/piles',
        destination: '/doctor/near-me/treat/general-surgery/laser-piles-treatment',
        permanent: true,
      },
      {
        source: '/treatments/fistula',
        destination: '/doctor/near-me/treat/general-surgery/fistula-laser-treatment',
        permanent: true,
      },
      {
        source: '/treatments/fissure',
        destination: '/doctor/near-me/treat/general-surgery/anal-fissure-treatment',
        permanent: true,
      },
      {
        source: '/treatments/gallbladder',
        destination: '/doctor/near-me/treat/general-surgery/laparoscopic-gallbladder-removal',
        permanent: true,
      },
      {
        source: '/treatments/appendix',
        destination: '/doctor/near-me/treat/general-surgery/laparoscopic-appendix-surgery',
        permanent: true,
      },
      {
        source: '/treatments/hernia',
        destination: '/doctor/near-me/treat/general-surgery/laparoscopic-hernia-repair',
        permanent: true,
      },
      {
        source: '/treatments/hysterectomy',
        destination: '/doctor/near-me/treat/obstetrics-gynaecology/laparoscopic-hysterectomy-guide',
        permanent: true,
      },
      {
        source: '/insurance',
        destination: '/patients/insurance',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
