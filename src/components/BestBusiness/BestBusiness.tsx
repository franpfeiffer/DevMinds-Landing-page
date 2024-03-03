"use client"

import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-blueLight">If you have a problem,</span>
                            We have the BEST <br />
                            solution
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Problems are our expertise.
                            At DevMinds, we have a team whose main proficiency is problem-solving,
                            which makes us come up with the absolute best solutions for any problem.
                            We turn challenges into triumphs. Your success, simplified with us.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Sign in to start now</Link>
                        </div>
                    </Reveal>
                </div>

                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-primary">{title}</h4>
                                    <p className="text-primaryDark">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
