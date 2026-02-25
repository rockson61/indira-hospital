import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button, Tooltip, Link } from "@heroui/react";

interface SocialIconsProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

import { siteConfig } from "@/config/site";

export function SocialIcons({ className, size = "sm", color = "primary" }: SocialIconsProps) {
    const socialLinks = [
        { icon: Facebook, href: siteConfig.links.facebook, label: "Facebook" },
        { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
        { icon: Youtube, href: siteConfig.links.youtube || "https://youtube.com/@indiradental", label: "YouTube" },
        { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
    ];

    return (
        <div className={`flex gap-3 ${className}`}>
            {socialLinks.map((social) => (
                <Tooltip key={social.label} content={social.label} color={color}>
                    <Button
                        isIconOnly
                        as={Link}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        size={size}
                        color={color}
                        variant="ghost"
                        radius="full"
                        aria-label={social.label}
                    >
                        <social.icon className="w-5 h-5" />
                    </Button>
                </Tooltip>
            ))}
        </div>
    );
}
