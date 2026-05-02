"use client";

import { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user
    console.log(user);


    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <header className="border-b sticky top-0 bg-white z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/hatgpt.png"
                        alt="QurbaniHaat Logo"
                        width={60}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                    <h2 className="font-bold text-lg">
                        Qurbani<span className="text-green-600">Haat</span>
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/all-animals">All Animals</Link></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-3">
                    {isPending ? <div className="flex items-center gap-4">
                        <Spinner />
                    </div> : user ? (
                        <><h2>{user.name}</h2>
                            <Image
                                src={user.image || "/fallback.jpg"}
                                alt={user.name || "User"}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <Button onClick={handleLogout} variant="danger-soft">
                                Logout
                            </Button>

                        </>
                    ) : (
                        <>
                            <Link href="/register">
                                <Button variant="light">Register</Button>
                            </Link>
                            <Link href="/login">
                                <Button color="primary">Login</Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow-md">

                    <ul className="flex flex-col gap-3 text-sm font-medium">
                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/all-animals" onClick={() => setIsOpen(false)}>
                                All Animals
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Auth */}
                    {isPending ? <div className="flex flex-col items-center gap-2">
                        <Spinner color="success" />
                        <span className="text-xs text-muted">Success</span>
                    </div> : user ? (
                        <div className="flex flex-col items-center gap-3">
                            <p>Hello, {user?.name}</p>
                            <Image
                                src={user.image || "/fallback.jpg"}
                                alt={user.name || "User"}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />

                            <Button onClick={handleLogout} fullWidth variant="danger-soft">
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Link href="/register" onClick={() => setIsOpen(false)}>
                                <Button fullWidth variant="light">Register</Button>
                            </Link>

                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <Button fullWidth color="primary">Login</Button>
                            </Link>
                        </div>
                    )}

                </div>
            )}
        </header>
    );
};

export default Navbar;