
import { Lightbulb, Palette, Code2, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We understand your business, goals, and the website you dream of.',
        icon: Lightbulb,
    },
    {
        number: '02',
        title: 'Design',
        description: 'We create a beautiful, modern design that matches your brand.',
        icon: Palette,
    },
    {
        number: '03',
        title: 'Development',
        description: 'We bring the design to life with responsive features and animations.',
        icon: Code2,
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Your website goes live and is ready for the world to explore.',
        icon: Rocket,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
                            Simple & Seamless
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            How It <span className="text-purple-400">Works</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From your first idea to a beautiful live website,
                            we make the journey simple.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <Reveal key={step.number}>
                                <div className="glow-card group relative h-full p-8 rounded-2xl border border-purple-500/20 bg-white/[0.03] hover:border-purple-400/60 transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-4xl font-bold text-purple-400/40">
                                            {step.number}
                                        </span>
                                        <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                            <Icon size={26} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-7">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
