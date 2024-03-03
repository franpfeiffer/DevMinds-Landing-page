"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Team() {
    return (
        <div className="relative p-8 md:py-64" id="team">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        The Collective Expertise at Our Disposal
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">Our team, with its diverse and extensive expertise,
                            excels at addressing a wide range of challenges. The collective knowledge and skills
                            ensure a nuanced and proficient approach, delivering unparalleled solutions tailored to
                            your unique needs.</p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}
