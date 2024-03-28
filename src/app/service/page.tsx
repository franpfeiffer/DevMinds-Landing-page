import Link from 'next/link';
import { BackgroundRadialRight } from "../../components/BackgroundRadialRight";
import { BackgroundRadialLeft } from "../../components/BackgroundRadialLeft";
import { MotionTransition } from '../../components/MotionTransition/MotionTransition';

interface ServiceItemProps {
    title: string;
    description: string;
}

export default function Service() {
    return (
        <div>
            <MotionTransition className="bg-green inline-block rounded-lg">
                <a href="/" className="text-white p-4 block">
                    Go back
                </a>
            </MotionTransition>

            <div className="min-h-screen flex flex-col justify-center items-center">
                <BackgroundRadialRight />
                <BackgroundRadialLeft />
                <main className="max-w-6xl w-full px-4 py-8">
                    <MotionTransition className="mb-8 pb-10 sm:pb-20">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Website Services</h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            <ServiceItem title="Corporative Websites" description="Build a compelling corporate website for a strong online presence." />
                            <ServiceItem title="E-commerce" description="Maximize online sales with a secure, user-friendly virtual store." />
                            <ServiceItem title="Blogs" description="Engage your audience with a sleek blog filled with relevant content." />
                            <ServiceItem title="Online Portfolios" description="Highlight your talent with a customized online portfolio." />
                            <ServiceItem title="Custom Projects" description="Bring any idea to life with our custom web development services." />
                        </div>
                    </MotionTransition>

                    <MotionTransition className="pb-10 sm:pb-20">
                        <h2 className="text-2xl font-semibold mb-4 text-center">System Services</h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <ServiceItem title="Project Management System" description="Development of systems to organize, monitor, and manage business projects efficiently." />
                            <ServiceItem title="Online Booking System" description="Create reservation systems for hotels, restaurants, medical appointments, and salons." />
                            <ServiceItem title="Customer Relationship Management System" description="Implement CRM, sales tracking, and data analysis systems." />
                            <ServiceItem title="Content Management System" description="Create intuitive platforms for web content creation, publishing, etc." />
                            <ServiceItem title="Learning Management System" description="Develop platforms for online course administration and distribution." />
                            <ServiceItem title="Custom Systems Development" description="We turn ideas into digital solutions. Let's innovate together!" />
                        </div>
                    </MotionTransition>
                </main>
            </div>
        </div>
    );
}

function ServiceItem({ title, description }: ServiceItemProps) {
    return (
        <div className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between">
            <h4 className="text-lg font-semibold text-center mb-2">{title}</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link href="/service" className="text-blue-500 text-center self-center">
                Request Pricing
            </Link>
        </div>
    );
}
