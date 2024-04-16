import Link from "next/link";
import { Reveal } from "../Reveal";


export function CtaDark() {
    return (
        <div className="px-6 my-40 md:mt-10">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-3xl font-bold">What are you waiting for</h3>
                        </Reveal>
                        <Reveal>
                            <p>Everything you need to do to boost your online presence and make your numbers go through the roof is click this button.</p>
                        </Reveal>
                    </div>

                    <Link href="/service" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
                        <Reveal>
                            Start Now
                        </Reveal>
                    </Link>
                </div>
            </div>
        </div>
    )
}
