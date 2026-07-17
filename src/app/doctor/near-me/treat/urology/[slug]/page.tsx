export const runtime = "edge";

export const dynamic = "force-dynamic";


import ServiceDetailPage, { generateMetadata as parentGenerateMetadata } from '../../[...slug]/page';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 return parentGenerateMetadata({ params: Promise.resolve({ slug: ['urology', slug] }) });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 return <ServiceDetailPage params={Promise.resolve({ slug: ['urology', slug] })} />;
}
