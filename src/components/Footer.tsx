import { motion } from "motion/react";
import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:isabellejgan@gmail.com" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isabellegan",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/isabellegan" },
  ];

  return (
    <footer className="bg-white border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <p className="max-w-md text-[var(--forest-green)]">
              Building technology that puts people first.
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Isabelle Gan
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
