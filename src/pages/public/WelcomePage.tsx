import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WelcomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Decorative Blobs */}
        <div className="blob bg-brand-green w-96 h-96 rounded-full top-0 left-[-100px]" />
        <div className="blob bg-brand-pink w-80 h-80 rounded-full bottom-0 right-[-50px]" />
        <div className="blob bg-brand-beige w-64 h-64 rounded-full top-20 right-[20%]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="animate-slide-up space-y-8 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                  v1.0 Now Available
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Your Daily Work, <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Remembered.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-green/60 -z-0 transform -rotate-2" />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The AI memory for developers. Log your work in seconds, track
                complex problems, and let AI generate your daily summaries
                automatically.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Start for free
                  <FontAwesomeIcon
                    icon={["fas", "arrow-right"]}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-brand-black rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-xl"
                  />
                  Continue with GitHub
                </button>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className="text-green-600"
                  />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "check"]}
                    className="text-green-600"
                  />
                  <span>Free for individuals</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in">
              <div className="relative w-full max-w-md mx-auto">
                {/* Card 3 (Back) */}
                <div className="absolute top-0 left-12 w-full h-[500px] bg-brand-pink rounded-3xl border-2 border-brand-black transform rotate-6 scale-95 opacity-80 z-0 shadow-xl" />

                {/* Card 2 (Middle) */}
                <div className="absolute top-4 left-6 w-full h-[500px] bg-brand-green rounded-3xl border-2 border-brand-black transform rotate-3 scale-95 z-10 shadow-xl" />

                {/* Card 1 (Front - Chat Preview) */}
                <div className="relative w-full h-[500px] bg-white rounded-3xl border-2 border-brand-black z-20 shadow-2xl overflow-hidden flex flex-col">
                  {/* Fake Browser Header */}
                  <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-auto text-xs text-gray-400 font-mono">
                      devlog.ai/today
                    </div>
                  </div>

                  {/* Chat Interface Preview */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1 space-y-4">
                      {/* Bot Message */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-black flex items-center justify-center text-white shrink-0">
                          <FontAwesomeIcon
                            icon={["fas", "robot"]}
                            className="text-xs"
                          />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none text-sm text-gray-700 max-w-[85%] shadow-sm">
                          What did you work on today?
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 shrink-0">
                          <FontAwesomeIcon
                            icon={["fas", "user"]}
                            className="text-xs"
                          />
                        </div>
                        <div className="bg-brand-black text-white p-3 rounded-lg rounded-tr-none text-sm max-w-[85%] shadow-sm">
                          Debugged the whisper latency issue. Turns out the model
                          was reloading on every request. Fixed by caching the
                          instance.
                        </div>
                      </div>

                      {/* AI Processing */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-black flex items-center justify-center text-white shrink-0">
                          <FontAwesomeIcon
                            icon={["fas", "bolt"]}
                            className="text-xs text-yellow-300"
                          />
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg rounded-tl-none text-sm w-full shadow-md space-y-3">
                          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                            <span className="font-semibold text-gray-800">
                              Log Entry Created
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                              Saved
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase">
                                Task
                              </span>
                              <p className="text-gray-800">
                                Optimize Whisper model loading
                              </p>
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase">
                                Problem
                              </span>
                              <p className="text-gray-800">
                                High latency due to model reloading
                              </p>
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase">
                                Solution
                              </span>
                              <p className="text-gray-800">
                                Implemented instance caching
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                              #backend
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                              #performance
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="mt-4 relative">
                      <div className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-400">
                        Type your update...
                      </div>
                      <div className="absolute right-2 top-2 p-1.5 bg-brand-black text-white rounded-lg">
                        <FontAwesomeIcon
                          icon={["fas", "arrow-up"]}
                          className="text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 animate-bounce hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <FontAwesomeIcon icon={["fas", "chart-line"]} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        Productivity
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        +24% this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#features"
            className="text-gray-400 hover:text-brand-black transition-colors"
          >
            <FontAwesomeIcon
              icon={["fas", "chevron-down"]}
              className="text-xl"
            />
          </a>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-20 :bg-[#121217]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Built for the flow state
            </h2>
            <p className="text-lg text-gray-600">
              Don&apos;t let documentation break your focus. We made logging work
              as fast as checking a commit message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 text-brand-black group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300">
                <FontAwesomeIcon icon={["fas", "bolt"]} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                Quick Logging
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Just type what you did. Natural language processing instantly
                categorizes tasks, bugs, and solutions without you filling out
                forms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 text-brand-black group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300">
                <FontAwesomeIcon icon={["fas", "brain"]} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                AI Summaries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Forget writing stand-up updates. Our AI generates concise daily
                summaries ready to be shared with your team or manager.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 text-brand-black group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300">
                <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                Solution Search
              </h3>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;How did I fix that bug last month?&rdquo; Search your
                entire work history by context, tags, or specific error messages
                instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-8">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            <div className="flex items-center gap-2 text-xl font-bold">
              <FontAwesomeIcon icon={["fab", "aws"]} className="text-3xl" /> AWS
            </div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <FontAwesomeIcon icon={["fab", "google"]} className="text-3xl" />{" "}
              Google
            </div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <FontAwesomeIcon icon={["fab", "meta"]} className="text-3xl" />{" "}
              Meta
            </div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <FontAwesomeIcon icon={["fab", "stripe"]} className="text-3xl" />{" "}
              Stripe
            </div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <FontAwesomeIcon
                icon={["fab", "spotify"]}
                className="text-3xl"
              />{" "}
              Spotify
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Terminal Illustration */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-beige/20 rounded-3xl transform rotate-3 scale-105 -z-10" />
              <div className="bg-brand-black rounded-3xl p-6 md:p-8 shadow-2xl text-white font-mono text-sm md:text-base overflow-hidden relative">
                {/* Code Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-gray-400 text-xs">terminal</div>
                </div>

                {/* Terminal Content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-green-400">$</span> devlog add
                    &quot;Fixed race condition in auth service&quot;
                  </div>
                  <div className="text-gray-400">Processing...</div>
                  <div>
                    <div className="border-l-2 border-brand-accent pl-3 my-2">
                      <div className="text-blue-300">Entry recorded:</div>
                      <div>
                        <span className="text-gray-500">Task:</span> Fix race
                        condition
                      </div>
                      <div>
                        <span className="text-gray-500">Component:</span> Auth
                        Service
                      </div>
                      <div>
                        <span className="text-gray-500">Tags:</span> #bugfix
                        #backend #critical
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-green-400">✔</span> Saved to daily
                    log.
                  </div>
                  <div>
                    <span className="text-green-400">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-green/50 text-green-900 font-semibold text-sm">
                Developer First
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                Command line speed,
                <br />
                <span className="text-gray-400">Database power.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We know you hate context switching. That&apos;s why DevLog fits
                into your existing workflow. Whether you use our web app or the
                upcoming CLI tool, logging your work takes seconds but lasts
                forever.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <FontAwesomeIcon
                      icon={["fas", "keyboard"]}
                      className="text-gray-700"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Keyboard Driven</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Navigate, log, and search without touching your mouse.
                      Shortcuts for everything.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <FontAwesomeIcon
                      icon={["fas", "tags"]}
                      className="text-gray-700"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Smart Tagging</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Our NLP engine automatically tags your entries with
                      relevant technologies and project names.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-brand-black text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark skew-x-12 transform origin-top-right z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent rounded-full blur-[100px] opacity-20 z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Stop forgetting your wins.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who have built a searchable second
            brain for their engineering career.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
            >
              Create Free Account
            </Link>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              View Demo
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Free for individual developers. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-brand-black rounded-md flex items-center justify-center text-white">
                  <FontAwesomeIcon
                    icon={["fas", "memory"]}
                    className="text-xs"
                  />
                </div>
                <span className="font-heading font-bold text-lg">
                  devlog.ai
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">
                The AI-powered work log assistant designed to help developers
                track their work, solve problems faster, and automate daily
                summaries.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-black hover:text-white transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="text-sm"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-black hover:text-white transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-sm"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-black hover:text-white transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="text-sm"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-black transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DevLog AI Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-brand-black transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-brand-black transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
