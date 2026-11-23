
import { useState } from 'react';
import {
    LayoutDashboard,
    MessageSquare,
    Star,
    FolderKanban,
    Users,
    Bell,
    Search,
    Menu,
    X,
    CheckCircle,
    Clock,
    ArrowUpRight,
} from 'lucide-react';

const stats = [
    { title: 'Total Messages', value: '12', icon: MessageSquare, color: 'text-purple-400' },
    { title: 'Pending Reviews', value: '04', icon: Star, color: 'text-pink-400' },
    { title: 'Total Projects', value: '08', icon: FolderKanban, color: 'text-violet-400' },
    { title: 'New Clients', value: '06', icon: Users, color: 'text-indigo-400' },
];

const messages = [
    { name: 'Sample Client One', project: 'Business Website', date: 'Today', status: 'New' },
    { name: 'Sample Client Two', project: 'Beauty Store', date: 'Yesterday', status: 'Pending' },
    { name: 'Sample Client Three', project: 'Portfolio Website', date: 'Yesterday', status: 'Replied' },
];

const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Reviews', icon: Star },
    { name: 'Projects', icon: FolderKanban },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#090711] text-white">
            <div className="flex min-h-screen">

                <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 bg-[#100d1d] p-6 transition-transform lg:static lg:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="mb-12 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-purple-300">&lt;/vk&gt;</h1>
                            <p className="text-xs text-gray-400">WEB STUDIO ADMIN</p>
                        </div>
                        <button onClick={() => setMenuOpen(false)} className="lg:hidden">
                            <X />
                        </button>
                    </div>

                    <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">Workspace</p>

                    <nav className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        setActiveTab(item.name);
                                        setMenuOpen(false);
                                    }}
                                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${activeTab === item.name
                                        ? 'bg-purple-500/20 text-purple-300'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <Icon size={19} />
                                    {item.name}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="mt-16 rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4">
                        <p className="text-sm font-semibold text-purple-200">VK Web Studio</p>
                        <p className="mt-1 text-xs text-gray-400">Manage your creative workspace.</p>
                    </div>
                </aside>

                {menuOpen && (
                    <button
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                    />
                )}

                <main className="min-w-0 flex-1 p-5 sm:p-8">
                    <header className="mb-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setMenuOpen(true)} className="lg:hidden">
                                <Menu />
                            </button>
                            <div>
                                <p className="text-sm text-purple-300">VK WEB STUDIO</p>
                                <h2 className="text-2xl font-bold sm:text-3xl">{activeTab}</h2>
                            </div>
                        </div>
                        <button className="rounded-full border border-white/10 p-3 text-gray-300 hover:bg-white/5">
                            <Bell size={19} />
                        </button>
                    </header>

                    <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-200">
                        Preview mode — these are sample figures and messages, not real client records.
                    </div>

                    {activeTab === 'Overview' && (
                        <>
                            <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                                {stats.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={stat.title} className="rounded-2xl border border-white/10 bg-[#151121] p-6">
                                            <div className="mb-5 flex items-center justify-between">
                                                <p className="text-sm text-gray-400">{stat.title}</p>
                                                <Icon className={stat.color} size={21} />
                                            </div>
                                            <p className="text-3xl font-bold">{stat.value}</p>
                                            <p className="mt-2 text-xs text-gray-500">Sample dashboard data</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <section className="rounded-2xl border border-white/10 bg-[#151121] p-5 sm:p-7">
                                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-semibold">Recent Messages</h3>
                                        <p className="text-sm text-gray-500">Example client inquiries</p>
                                    </div>
                                    <button onClick={() => setActiveTab('Messages')} className="flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200">
                                        View all <ArrowUpRight size={16} />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {messages.map((message) => (
                                        <div key={message.name} className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white/[0.03] p-4">
                                            <div>
                                                <p className="font-medium">{message.name}</p>
                                                <p className="mt-1 text-sm text-gray-400">{message.project}</p>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <span>{message.date}</span>
                                                <span className="rounded-full bg-purple-500/15 px-3 py-1 text-purple-300">{message.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === 'Messages' && (
                        <section className="rounded-2xl border border-white/10 bg-[#151121] p-6">
                            <h3 className="mb-5 text-lg font-semibold">Client Messages</h3>
                            {messages.map((message) => (
                                <div key={message.name} className="mb-3 rounded-xl bg-white/[0.03] p-4">
                                    <p className="font-medium">{message.name}</p>
                                    <p className="mt-1 text-sm text-gray-400">{message.project} · {message.date}</p>
                                    <span className="mt-3 inline-block text-xs text-purple-300">{message.status}</span>
                                </div>
                            ))}
                        </section>
                    )}

                    {activeTab === 'Reviews' && (
                        <section className="rounded-2xl border border-white/10 bg-[#151121] p-6">
                            <h3 className="mb-3 text-lg font-semibold">Customer Reviews</h3>
                            <p className="text-sm text-gray-400">Real reviews and approval controls will appear here after secure database connection.</p>
                            <div className="mt-5 flex items-center gap-3 text-purple-300">
                                <Clock size={20} /> Review management coming soon
                            </div>
                        </section>
                    )}

                    {activeTab === 'Projects' && (
                        <section className="rounded-2xl border border-white/10 bg-[#151121] p-6">
                            <h3 className="mb-3 text-lg font-semibold">Portfolio Projects</h3>
                            <p className="text-sm text-gray-400">Project management will be connected after the database setup.</p>
                            <div className="mt-5 flex items-center gap-3 text-purple-300">
                                <CheckCircle size={20} /> Project manager coming soon
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}
