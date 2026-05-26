import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    # Replace ModernCard imports and usages
    content = content.replace("from '@/components/ui/modern-card'", "from '@/components/ui/card'")
    content = content.replace('from "@/components/ui/modern-card"', 'from "@/components/ui/card"')
    content = content.replace("ModernCardTitle", "CardTitle")
    content = content.replace("ModernCardContent", "CardContent")
    content = content.replace("ModernCardHeader", "CardHeader")
    content = content.replace("ModernCardFooter", "CardFooter")
    content = content.replace("ModernCardDescription", "CardDescription")
    content = content.replace("ModernCard", "Card")
    
    # Replace GlassCard imports and usages
    content = content.replace("from '@/components/ui/glass-card'", "from '@/components/ui/card'")
    content = content.replace('from "@/components/ui/glass-card"', 'from "@/components/ui/card"')
    content = content.replace("GlassCard", "Card")

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            replace_in_file(os.path.join(root, file))
