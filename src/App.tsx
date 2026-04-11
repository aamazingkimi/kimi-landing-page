import React from 'react';

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function KimiLanding() {
  const base = '/kimi-landing-page/';

  const ImageCard = ({ src, alt, className = '' }: ImageCardProps) => (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover bg-gray-100 ${className}`}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.opacity = '0';
        const parent = target.parentElement;
        if (parent && !parent.querySelector('[data-fallback]')) {
          const fallback = document.createElement('div');
          fallback.setAttribute('data-fallback', 'true');
          fallback.className = 'absolute inset-0 flex items-center justify-center text-sm text-gray-500';
          fallback.textContent = 'Image placeholder';
          parent.appendChild(fallback);
          parent.classList.add('relative');
        }
      }}
    />
  );

  const features = [
    {
      icon: '📧',
      title: 'Reads your emails',
      description: 'Kimi scans your inbox, identifies important messages, flags urgent items, and surfaces what needs your attention.'
    },
    {
      icon: '✍️',
      title: 'Drafts replies',
      description: 'Kimi writes email responses based on your tone and context. You review and send with one click.'
    },
    {
      icon: '📄',
      title: 'Summarizes documents',
      description: 'Kimi reads PDFs, Word docs, and articles. Extracts key points, highlights action items, and saves you hours.'
    },
    {
      icon: '🔍',
      title: 'Researches topics',
      description: 'Kimi searches the web, gathers information, compares options, and presents findings in clear bullet points.'
    },
    {
      icon: '📅',
      title: 'Prepares meeting notes',
      description: 'Kimi joins your calls, transcribes conversations, extracts decisions, and creates follow-up task lists.'
    },
    {
      icon: '💬',
      title: 'Answers questions',
      description: 'Kimi monitors support channels, responds to common inquiries, and escalates complex issues to you.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Connect your tools',
      description: 'Connect your email, documents, and communication tools. Kimi integrates with Gmail, Outlook, Google Drive, Dropbox, Slack, and more.'
    },
    {
      number: '02',
      title: 'Kimi processes',
      description: 'Kimi reads incoming emails, analyzes documents, researches topics, and prepares responses. Everything happens automatically.'
    },
    {
      number: '03',
      title: 'You get results',
      description: 'Review drafted replies, read document summaries, check meeting notes, and see customer responses in your Kimi dashboard.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">Kimi</div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#dashboard" className="text-gray-600 hover:text-black">Dashboard</a>
            <a href="#features" className="text-gray-600 hover:text-black">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-black">How it works</a>
          </nav>
          <button className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
            Try Kimi
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            AI that reads emails, drafts replies, summarizes docs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Kimi automates email, research, and document work. Connect your tools and let Kimi handle the busywork.
          </p>
          <div className="mt-10">
            <button className="rounded-lg bg-black px-8 py-3 text-lg text-white hover:bg-gray-800">
              Start free trial →
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-200 bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Kimi Dashboard</div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="font-medium text-black">Inbox</a>
                <a href="#" className="text-gray-600">Documents</a>
                <a href="#" className="text-gray-600">Research</a>
                <a href="#" className="text-gray-600">Settings</a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4">
            {/* Sidebar */}
            <div className="border-r border-gray-200 bg-gray-50 p-6">
              <div className="mb-8">
                <div className="mb-2 text-xs font-medium uppercase text-gray-500">Mailboxes</div>
                <div className="space-y-1">
                  <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium">📧 Inbox (24)</div>
                  <div className="rounded-lg px-3 py-2 text-sm text-gray-600">📥 Processed</div>
                  <div className="rounded-lg px-3 py-2 text-sm text-gray-600">📤 Drafts</div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-xs font-medium uppercase text-gray-500">Integrations</div>
                <div className="space-y-1">
                  <div className="rounded-lg px-3 py-2 text-sm text-gray-600">📧 Gmail</div>
                  <div className="rounded-lg px-3 py-2 text-sm text-gray-600">📁 Google Drive</div>
                  <div className="rounded-lg px-3 py-2 text-sm text-gray-600">💬 Slack</div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-3 p-8">
              <div className="space-y-4">
                {/* Email 1 */}
                <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-medium">
                    JS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-gray-500">2 min ago</div>
                    </div>
                    <div className="text-sm text-gray-700">Meeting notes from Tuesday</div>
                    <div className="text-sm text-gray-500">Here are the notes from our product review. The key decisions were...</div>
                  </div>
                </div>
                
                {/* Email 2 */}
                <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-medium">
                    AR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Alex Rivera</div>
                      <div className="text-sm text-gray-500">15 min ago</div>
                    </div>
                    <div className="text-sm text-gray-700">Project update and next steps</div>
                    <div className="text-sm text-gray-500">The development is on track. We need your input on the design phase...</div>
                  </div>
                </div>
              </div>
              
              {/* AI Suggestion */}
              <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    🤖
                  </div>
                  <div className="font-medium">Kimi's reply suggestion</div>
                </div>
                <div className="text-gray-700">
                  "Thanks for sending the notes. I've reviewed the action items and will follow up on points 3 and 4. Let's schedule a brief sync for next week to discuss implementation."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">What Kimi does</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Kimi handles the work that eats your week, so you can focus on what matters.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 hover:border-gray-300 hover:shadow-lg">
                <div className="mb-6 text-3xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">How Kimi works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Connect your tools. Kimi processes. You get results.
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 text-6xl font-bold text-gray-200">{step.number}</div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to let Kimi handle the busywork?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Try Kimi free for 14 days. Connect your tools and see how Kimi reads emails, drafts replies, and summarizes documents.
          </p>
          <button className="mt-10 rounded-lg bg-white px-8 py-3 text-lg text-black hover:bg-gray-100">
            Start free trial →
          </button>
          <p className="mt-6 text-sm text-gray-400">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-xl font-bold">Kimi</div>
            <div className="mt-6 flex gap-8 md:mt-0">
              <a href="#dashboard" className="text-gray-600 hover:text-black">Dashboard</a>
              <a href="#features" className="text-gray-600 hover:text-black">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-black">How it works</a>
              <a href="mailto:support@kimi.ai" className="text-gray-600 hover:text-black">Support</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2026 Kimi. AI that reads emails, drafts replies, summarizes docs.
          </div>
        </div>
      </footer>
    </div>
  );
}