"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 shadow-md flex items-center justify-between max-w-5xl p-2 mx-auto mt-2 rounded-xl md:py-8">
                <Link href="/" className="flex items-center">
                    <Image src="/assets/devmind-b.png" width="100" height="40" alt="Logo" />
                </Link>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                                <Link href={idLink} className="text-lg hover:text-secondary">{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
