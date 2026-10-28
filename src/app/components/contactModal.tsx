"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type FormEvent,
    type ReactNode,
} from "react";

const ContactModalContext = createContext<(() => void) | null>(null);

export function useContactModal() {
    const openContactModal = useContext(ContactModalContext);

    if (!openContactModal) {
        throw new Error("useContactModal must be used within ContactModalProvider");
    }

    return openContactModal;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        const name = String(fields.get("name") ?? "");
        const email = String(fields.get("email") ?? "");
        const message = String(fields.get("message") ?? "");
        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

        window.location.href = `mailto:redoanhasan02@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <ContactModalContext.Provider value={() => setIsOpen(true)}>
            {children}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        className="relative my-auto w-full max-w-xl rounded-3xl border border-white/10 bg-[#11111a] p-6 shadow-2xl shadow-violet-950/30 sm:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close contact form"
                            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            <span aria-hidden="true">×</span>
                        </button>

                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                            Let&apos;s connect
                        </p>
                        <h2
                            id="contact-modal-title"
                            className="mt-3 pr-10 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            Tell me what you&apos;re building.
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                            Share a few details and your email app will open with a message
                            ready to send.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="space-y-2 text-sm text-gray-300">
                                    <span>Your name</span>
                                    <input
                                        autoFocus
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder="Jane Smith"
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15"
                                    />
                                </label>
                                <label className="space-y-2 text-sm text-gray-300">
                                    <span>Email address</span>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15"
                                    />
                                </label>
                            </div>
                            <label className="block space-y-2 text-sm text-gray-300">
                                <span>Project details</span>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="A short note about your idea, timeline, or question..."
                                    className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/15"
                                />
                            </label>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11111a]"
                            >
                                Continue to email
                            </button>
                        </form>
                    </section>
                </div>
            )}
        </ContactModalContext.Provider>
    );
}
