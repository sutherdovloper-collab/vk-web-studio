
import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
    {
        name: 'Beauty Brand Owner',
        role: 'Sample Client Review',
        initials: 'BB',
        review: 'A beautiful online presence can make a brand feel more professional and memorable.',
    },
    {
        name: 'Restaurant Owner',
        role: 'Sample Client Review',
        initials: 'RO',
        review: 'A well-designed website helps customers explore the menu and discover the business.',
    },
    {
        name: 'Small Business Owner',
        role: 'Sample Client Review',
        initials: 'SB',
        review: 'A simple, modern website makes it easier for customers to learn about your services.',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
                            Kind Words
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            What People <span className="text-purple-400">Say</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A few examples of the value a great website can bring to a business.
                        </p>
                        <p className="text-xs text-purple-300/70 mt-3">
                            Illustrative examples — not actual customer reviews.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item) => (
                        <Reveal key={item.initials}>
                            <div className="glow-card h-full p-8 rounded-2xl border border-purple-500/20 bg-white/[0.03] hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="flex justify-between items-center mb-7">
                                    <Quote size={34} className="text-purple-400/70" />
                                    <div className="flex gap-1 text-purple-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={15} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-7 mb-8">
                                    "{item.review}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-semibold">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
