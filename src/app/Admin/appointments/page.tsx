import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo-utils';
import AppointmentsClient from './AppointmentsClient';

export const metadata: Metadata = constructMetadata({
    title: "Admin | Indira Super Speciality Hospital",
    description: "Learn more about admin at Indira Hospital, Vellore&apos;s leading super-speciality center for advanced clinical care.",
    path: "/Admin/appointments"
});

export default function AppointmentDashboardPage() {
    return <AppointmentsClient />;
}
