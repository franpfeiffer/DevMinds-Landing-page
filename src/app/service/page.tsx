import Link from 'next/link';
import { BackgroundRadialRight } from "../../components/BackgroundRadialRight";
import { BackgroundRadialLeft } from "../../components/BackgroundRadialLeft";

interface ServiceItemProps {
    title: string;
    description: string;
}

export default function Service() {
    return (
        <div>
            <div className="bg-green inline-block rounded-lg">
                <a href="/" className="text-white p-4 block">
                    Go back
                </a>
            </div>

            <div className="min-h-screen flex flex-col justify-center items-center">
                <BackgroundRadialRight />
                <BackgroundRadialLeft />
                <main className="max-w-6xl w-full px-4 py-8">
                    <section className="mb-8 pb-10 sm:pb-20">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Website Services</h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            <ServiceItem title="Corporative Websites" description="Create a strong online presence for your company with a professional and attractive corporate website." />
                            <ServiceItem title="E-commerce" description="Sell your products effectively online with a secure and easy-to-use virtual store." />
                            <ServiceItem title="Blogs" description="Share your voice and attract your audience with a well-designed blog full of relevant content." />
                            <ServiceItem title="Online Portfolios" description="Showcase your work impressively with a customized online portfolio that highlights your talent." />
                            <ServiceItem title="Custom Projects" description="Make any idea come true with our custom web development services. From dog websites to download platforms, your imagination is our limit." />
                        </div>
                    </section>

                    <section className="pb-10 sm:pb-20">
                        <h2 className="text-2xl font-semibold mb-4 text-center">System Services</h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <ServiceItem title="Project Management System" description="Development of systems to organize, monitor, and manage business projects efficiently." />
                            <ServiceItem title="Online Booking System" description="Creation of reservation systems for services such as hotels, restaurants, medical appointments, beauty salons, etc." />
                            <ServiceItem title="Customer Relationship Management System" description="Implementation of systems to manage customer relationships, sales tracking, contact management, and data analysis." />
                            <ServiceItem title="Content Management System" description="Development of platforms for creating, editing, and publishing web content intuitively and efficiently." />
                            <ServiceItem title="Learning Management System" description="Creation of platforms for the administration and distribution of courses and educational material online." />
                            <ServiceItem title="Custom Systems Development" description="Do you have a unique idea or a particular challenge that requires a technological solution? At DevMinds, we're here to make it happen. From enterprise management systems to custom productivity tools, our experience and programming skills enable us to create anything you can imagine. Get in touch with us and turn your ideas into innovative digital solutions!" />
                        </div>
                    </section>
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
