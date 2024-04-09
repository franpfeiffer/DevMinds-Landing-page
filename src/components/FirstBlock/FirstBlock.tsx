"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 mt-20 md:py-20">
            <BackgroundRadialRight />
            <div className="grid max-w-6xl mx-auto mt-5 md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-6xl font-semibold pb-2">
                            We are
                            <span className="block degradedBlue bg-blueLight">
                                DevMinds,
                            </span>
                            Always Evolving
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">We don't just write code; we design experiences that push the limits of innovation. Our team of visionary minds is dedicated to crafting software solutions that go beyond expectations. Seamlessly blending creativity with technology, we ensure your business stands out in the digital realm.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="/service" className="px-4 py-3 rounded-md bg-blueRadial">Connect with us</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/4.png" alt="Card" width={700} height={700} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
