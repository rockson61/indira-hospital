const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/app/doctor/near-me/treat');
const directories = fs.readdirSync(baseDir);

const skipDirs = ['[...slug]', 'directory', 'HealthLibraryClient.tsx', 'page.tsx'];

directories.forEach(dirName => {
  if (skipDirs.includes(dirName)) return;

  const dirPath = path.join(baseDir, dirName);
  const stat = fs.statSync(dirPath);

  if (stat.isDirectory()) {
    const slugDirPath = path.join(dirPath, '[slug]');
    if (!fs.existsSync(slugDirPath)) {
      fs.mkdirSync(slugDirPath);
      console.log(`Created directory: ${slugDirPath}`);
    }

    const pageFilePath = path.join(slugDirPath, 'page.tsx');
    const pageContent = `import ServiceDetailPage, { generateMetadata as parentGenerateMetadata } from '../../[...slug]/page';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return parentGenerateMetadata({ params: Promise.resolve({ slug: ['${dirName}', slug] }) });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage params={Promise.resolve({ slug: ['${dirName}', slug] })} />;
}
`;

    fs.writeFileSync(pageFilePath, pageContent, 'utf8');
    console.log(`Written file: ${pageFilePath}`);
  }
});

console.log('Successfully generated catch-all routes for all departments!');
