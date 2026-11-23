
import { Check, ShieldCheck, Zap, Crown } from 'lucide-react';
import Reveal from './Reveal';

const plans = [
    {
        name: 'Basic Care',
        price: 'Rs. 2,000',
        period: '/ month',
        description: 'For small websites that need occasional care.',
        icon: ShieldCheck,
        features: [
            'Monthly website checkup',
            'Basic content updates',
            'Broken link checks',
            'Email support',
        ],
    },
    {
        name: 'Growth Care',
        price: 'Rs. 4,000',
        period: '/ month',
        description: 'For businesses that need regular website updates.',
        icon: Zap,
        popular: true,
        features: [
            'Everything in Basic Care',
            'Up to 4 small updates monthly',
            'Form and link testing',
            'Performance checkup',
            'Priority email support',
        ],
    },
    {
        name: 'Premium Care',
        price: 'Rs. 7,000',
        period: '/ month',
        description: 'For websites that need more ongoing attention.',
        icon: Crown,
        features: [
            'Everything in Growth Care',
            'Up to 8 small updates monthly',
            'Regular website testing',
            'Monthly maintenance report',
            'Priority support',
        ],
    },
];

export default function Maintenance() {
    return (
        <section id="maintenance" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
                            After Launch Support
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            Website <span className="text-purple-400">Maintenance</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Keep your website updated, checked, and running smoothly.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => {
                        const Icon = plan.icon;

                        return (
                            <Reveal key={plan.name}>
                                <div className={`glow-card relative h-full p-8 rounded-2xl border bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 ${plan.popular
                                    ? 'border-purple-400/70 shadow-lg shadow-purple-500/10'
                                    : 'border-purple-500/20 hover:border-purple-400/50'
                                    }`}>
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
                                            MOST POPULAR
                                        </span>
                                    )}

                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                                        <Icon size={25} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {plan.name}
                                    </h3>

                                    <p className="text-sm text-gray-400 min-h-12 mb-6">
                                        {plan.description}
                                    </p>

                                    <div className="mb-8">
                                        <span className="text-3xl font-bold text-white">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {plan.period}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <Check size={18} className="text-purple-400 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#contact"
                                        className="mt-8 block w-full text-center rounded-xl border border-purple-400/40 px-5 py-3 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
                                    >
                                        Ask About This Plan
                                    </a>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <p className="text-center text-xs text-gray-500 mt-10">
                    Sample starting prices. Final scope, response times, and included updates must be agreed before purchase.
                    Hosting, domain, and third-party service fees may be separate.
                </p>
            </div>
        </section>
    );
}
