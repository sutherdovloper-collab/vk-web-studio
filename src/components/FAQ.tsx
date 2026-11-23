
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
    {
        question: 'How long does it take to build a website?',
        answer: 'A simple website usually takes 3–5 days, while larger projects may take 1–3 weeks depending on the features and requirements.',
    },
    {
        question: 'Will my website work on mobile devices?',
        answer: 'Yes! Every website is designed to be responsive and work smoothly on mobile phones, tablets, and desktops.',
    },
    {
        question: 'Can I request changes to my website?',
        answer: 'Absolutely! We discuss your requirements and include revisions according to the selected package and project agreement.',
    },
    {
        question: 'Do you create websites for different businesses?',
        answer: 'Yes! We create websites for beauty salons, restaurants, cafés, online stores, and many other businesses.',
    },
    {
        question: 'Will my website be ready to launch?',
        answer: 'Yes! The project includes preparing your website for launch. Domain and hosting costs may be separate.',
    },
    {
        question: 'Do you provide support after launch?',
        answer: 'Support and maintenance can be discussed separately depending on your needs.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="text-center mb-14">
                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
                            Got Questions?
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            Frequently Asked <span className="text-purple-400">Questions</span>
                        </h2>
                        <p className="text-gray-400">
                            Everything you need to know before starting your project.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={faq.question}>
                            <div className="rounded-2xl border border-purple-500/20 bg-white/[0.03] overflow-hidden hover:border-purple-400/50 transition-colors duration-300">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-white font-medium">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`shrink-0 text-purple-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${openIndex === index
                                        ? 'grid-rows-[1fr]'
                                        : 'grid-rows-[0fr]'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-gray-400 text-sm leading-7">
                                            {faq.answer}
                                        </p>
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
