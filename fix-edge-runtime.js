const fs = require('fs');
const path = require('path');

const files = [
  'src/app/.well-known/oauth-authorization-server/route.ts',
  'src/app/.well-known/agent-skills/index.json/route.ts',
  'src/app/.well-known/mcp/server-card.json/route.ts',
  'src/app/.well-known/api-catalog/route.ts',
  'src/app/.well-known/oauth-protected-resource/route.ts',
  'src/app/doctor/near-me/treat/[...slug]/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes("export const runtime = 'edge'") && !content.includes('export const runtime = "edge"')) {
      content = `export const runtime = 'edge';\n${content}`;
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`Already updated ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
