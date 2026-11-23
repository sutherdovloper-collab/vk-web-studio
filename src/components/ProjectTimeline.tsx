
import { ClipboardList, Palette, Code2, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const timeline = [
    {
        day: 'Day 1',
        duration: '1 Day',
        title: 'Planning & Discovery',
        description: 'We discuss your business, goals, content, and website requirements.',
        icon: ClipboardList,
    },
    {
        day: 'Day 2',
        duration: '1 Day',
        title: 'Design & Layout',
        description: 'We create the visual direction, layout, colors, and overall experience.',
        icon: Palette,
    },
    {
        day: 'Day 3–4',
        duration: '2 Days',
        title: 'Development',
        description: 'We build the website, add features, animations, and responsive layouts.',
        icon: Code2,
    },
    {
        day: 'Day 5',
        duration: '1 Day',
        title: 'Testing & Launch',
        description: 'We test the website, make agreed final adjustments, and prepare it for launch.',
        icon: CheckCircle2,
    },
];

export default function ProjectTimeline() {
    return (
        <section id="timeline" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
                            From Idea to Launch
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            Project <span className="text-purple-400">Timeline</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A simple look at how we turn your idea into a beautiful website.
                        </p>
                        <p className="text-xs text-gray-500 mt-3">
                            Example timeline for a small website. Actual timing depends on project scope and feedback.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {timeline.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Reveal key={item.day}>
                                <div className="glow-card h-full p-7 rounded-2xl border border-purple-500/20 bg-white/[0.03] hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2">
                                    <div className="flex justify-between items-center mb-7">
                                        <span className="text-sm font-semibold text-purple-300 bg-purple-500/10 px-4 py-2 rounded-full">
                                            {item.day}
                                        </span>
                                        <Icon size={25} className="text-purple-400" />
                                    </div>

                                    <p className="text-xs text-gray-500 mb-2">{item.duration}</p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-7">
                                        {item.description}
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
