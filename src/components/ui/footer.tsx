import Link from 'next/link'
import { Instagram } from 'lucide-react'

const links = [
    {
        title: 'Privacy',
        href: '#',
    },

    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#',
    },
    {
        title: 'Help',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-muted py-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="block size-fit">
                        <span className="font-bold text-xl tracking-tight">SubmissionSensAI</span>
                    </Link>
                    <Link
                        href="https://www.instagram.com/submissionsensai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <Instagram className="size-6" />
                    </Link>
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} SubmissionSensAI, All rights reserved</span>
            </div>
        </footer>
    )
}
