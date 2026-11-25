
import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import VkLogo from '@/components/VkLogo';

type Status = 'idle' | 'sending' | 'success' | 'error';

const fieldClasses =
  'w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-lavender-200/35 outline-none transition-all duration-300 focus:border-neon/60 focus:bg-ink-800 focus:shadow-[0_0_20px_-6px_rgba(179,136,255,0.5)]';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const packageName = String(data.get('package') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !packageName || !message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const completeMessage =
      `Selected Package: ${packageName}\n\nProject Details:\n${message}`;

    // Save message in Supabase database
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message: completeMessage }]);

    if (error) {
      console.error('Database error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again in a moment.');
      return;
    }

    // Send email notification
    const { error: emailError } = await supabase.functions.invoke(
      'smooth-processor',
      {
        body: {
          name,
          email,
          message: completeMessage,
        },
      }
    );

    if (emailError) {
      console.error('Email notification failed:', emailError);
    }

    form.reset();
    setStatus('success');
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-80 w-[560px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-tag justify-center">Let's talk</p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              HAVE A PROJECT IN MIND?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-lavender-200/70">
              Let's create something amazing together.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glow-card mt-10 p-7 md:p-10">
            {status === 'success' ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300">
                  <VkLogo size="sm" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  Message sent!
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm text-lavender-200/65">
                  Your message has been received and saved successfully.
                  We'll get back to you soon!
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-white/15 px-6 py-2.5 text-sm text-lavender-200 transition-all duration-300 hover:border-neon/50 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-lavender-200/60"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={120}
                      placeholder="Your name"
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-lavender-200/60"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      placeholder="you@example.com"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="package"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-lavender-200/60"
                  >
                    Choose Your Package
                  </label>

                  <select
                    id="package"
                    name="package"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled className="bg-ink-800">
                      Select a package
                    </option>

                    <option value="Starter - Rs. 10,000" className="bg-ink-800">
                      Starter — Rs. 10,000
                    </option>

                    <option value="Professional - Rs. 20,000" className="bg-ink-800">
                      Professional — Rs. 20,000
                    </option>

                    <option value="Premium - Rs. 35,000+" className="bg-ink-800">
                      Premium — Rs. 35,000+
                    </option>

                    <option value="Custom Project" className="bg-ink-800">
                      Custom Project
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-lavender-200/60"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us about your project — a salon, restaurant, business site or template."
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                {status === 'error' && errorMessage && (
                  <p className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
