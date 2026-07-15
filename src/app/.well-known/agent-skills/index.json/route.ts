import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export async function GET() {
  const agentSkills = {
    $schema: "https://agentskills.io/schema/v0.2.0/index.json",
    skills: [
      {
        name: "AppointmentBooking",
        type: "api",
        description: "Allows the agent to book a hospital appointment.",
        url: `${siteConfig.url}/api/skills/booking.json`,
        digest: "sha256-dummy"
      }
    ]
  };

  return NextResponse.json(agentSkills, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}
