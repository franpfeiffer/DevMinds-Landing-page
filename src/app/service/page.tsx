import Link from 'next/link';
import { BackgroundRadialRight } from "../../components/BackgroundRadialRight";
import { BackgroundRadialLeft } from "../../components/BackgroundRadialLeft";
import { MotionTransition } from '../../components/MotionTransition/MotionTransition';
import { Footer } from '@/components/Footer';
import { ServiceItemProps } from '../models/global-interface';
import Image from "next/image"



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
                            <ServiceItem title="Corporative Websites" description="Build a compelling corporate website for a strong online presence." link='https://wa.link/55oqi8' unlocked1='Professional Image' unlocked2='Brand Visibility and Awareness' unlocked3='Communication and Engagement' />
                            <ServiceItem title="Custom Projects" description="Bring any idea to life with our custom web development services." link='https://wa.link/5d48ck' unlocked1='Competitive Advantage' unlocked2='Scalability and Flexibility' unlocked3='Tailored User Experience' />
                            <ServiceItem title="E-commerce" description="Maximize online sales with a secure, user-friendly virtual store." link='https://wa.link/4zf960' unlocked1='Global Reach and Accessibility' unlocked2='Increased Efficiency' unlocked3='Enhanced Customer Experience' />
                        </div>
                    </MotionTransition>

                    <MotionTransition className="pb-10 sm:pb-20">
                        <h2 className="text-2xl font-semibold mb-4 text-center">System Services</h2>
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <ServiceItem title="Project Management System" description="Development of systems to organize, monitor, and manage business projects efficiently." link='https://wa.link/mbd1an' unlocked1='Improved Organization' unlocked2='Increased Efficiency and Productivity' unlocked3='Enhanced Visibility and Accountability' />
                            <ServiceItem title="Online Booking System" description="Create reservation systems for hotels, restaurants, medical appointments, and salons." link='https://wa.link/yhlglp' unlocked1='24/7 Availability and Convenience' unlocked2='Reduced Administrative Burden' unlocked3='Improved Customer Interaction ' />
                            <ServiceItem title="Customer Relationship Management System" description="Implement CRM, sales tracking, and data analysis systems." link='https://wa.link/ymwmnk' unlocked1='Centralized Customer Data and Insights ' unlocked2='Improved Sales and Marketing' unlocked3='Improved Customer Satisfaction' />
                            <ServiceItem title="Content Management System" description="Create intuitive platforms for web content creation, publishing, etc." link='https://wa.link/ywlbiu' unlocked1='Streamlined Content Creation' unlocked2='Consistent Branding and Design' unlocked3='Scalability and Flexibility' />
                            <ServiceItem title="Learning Management System" description="Develop platforms for online course administration and distribution." link='https://wa.link/04j93w' unlocked1='Centralized Learning Hub' unlocked2='Personalized Learning Paths' unlocked3='Tracking and Assessment Capabilities' />
                            <ServiceItem title="Custom Systems Development" description="We turn ideas into digital solutions. Let's innovate together!" link='https://wa.link/ymwnjk' unlocked1='Tailored Business Requirements' unlocked2='Full Ownership and Control' unlocked3='Scalability and Adaptability' />
                        </div>
                    </MotionTransition>
                </main>
            </div>
            <div className='mt-40'>
                <Footer />
            </div>
        </div>
    );
}

function ServiceItem({ title, description, link, unlocked1, unlocked2, unlocked3 }: ServiceItemProps) {
    return (
        <div className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between">
            <h4 className="text-lg font-semibold text-center mb-2">{title}</h4>
            <p className="text-gray-500 mb-4">{description}</p>
            <div className="my-3">
                <Image src="/assets/check.png" alt="check" width={700} height={700} className="h-auto w-3 inline-block mr-2 " />
                <p className="text-gray-600 inline text-sm">{unlocked1}</p>
            </div>
            <div className="my-3">
                <Image src="/assets/check.png" alt="check" width={700} height={700} className="h-auto w-3 inline-block mr-2" />
                <p className="text-gray-600 inline text-sm">{unlocked2}</p>
            </div>
            <div className="my-3">
                <Image src="/assets/check.png" alt="check" width={700} height={700} className="h-auto w-3 inline-block mr-2" />
                <p className="text-gray-600 inline text-sm">{unlocked3}</p>
            </div>
            <Link href={link} target='_blank' className="px-3 py-2 mt-5 rounded-md bg-blueRadial text-center self-center text-sm">
                Request Pricing
            </Link>
        </div>
    );
}
