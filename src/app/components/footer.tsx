

const links = [
    { label: 'GitHub', href: 'https://github.com/mdredoanhasan' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/md-redoan-hasan' },
    { label: 'Instagram', href: 'https://www.instagram.com/mdredoan_hasan?xtok=bWRtcG94Y2ZhczJ1' },
];

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0f]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
                <p className="text-sm text-gray-400">
                    © 2026 Redoan Hasan. All rights reserved.
                </p>

                <nav className="flex items-center gap-5 text-sm">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;