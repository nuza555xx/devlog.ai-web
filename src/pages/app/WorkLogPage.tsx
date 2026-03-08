import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WorkLogPage() {
  return (
    <div className="-m-4 lg:-m-8 flex flex-col h-[calc(100vh-73px)] relative bg-gray-50 dark:bg-[#0B0B0F]">
      {/* Top Header */}
      <header className="h-14 border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-[#0B0B0F]/80 backdrop-blur-md z-20 flex-shrink-0">
        <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400">
          <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Work Log</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            New Session
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center text-xs text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-[#121217] px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/5">
            <FontAwesomeIcon icon={["fas", "clock"]} className="mr-2 text-indigo-500 dark:text-indigo-400" />
            <span>Auto-saving enabled</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 dark:text-zinc-400 transition-colors">
            <FontAwesomeIcon icon={["fas", "ellipsis-vertical"]} />
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-56 pt-6 scroll-smooth">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Empty State / Greeting */}
          <div className="text-center py-10 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-500/20 dark:to-purple-600/20 flex items-center justify-center mx-auto mb-6 shadow-glow border border-indigo-100 dark:border-white/5">
              <FontAwesomeIcon icon={["fas", "wand-magic-sparkles"]} className="text-2xl text-indigo-500 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">What did you accomplish today?</h2>
            <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto">
              I'll help you structure your work log, tag relevant technologies, and save it to your timeline.
            </p>
          </div>

          {/* Date Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-200 dark:bg-white/5 flex-1" />
            <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Today, 2:30 PM</span>
            <div className="h-px bg-gray-200 dark:bg-white/5 flex-1" />
          </div>

          {/* User Message Bubble */}
          <div className="flex flex-col items-end gap-2 group">
            <div className="max-w-[85%] sm:max-w-[75%] bg-white dark:bg-[#1A1A21] border border-gray-200 dark:border-white/10 rounded-2xl rounded-tr-sm p-4 text-gray-900 dark:text-white shadow-sm">
              <p className="leading-relaxed">
                I spent the morning debugging the high latency on the Whisper model endpoint. Turns out it was reloading the model on every request instead of caching it.
              </p>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-400 dark:text-zinc-500 pr-1">
              <button className="hover:text-gray-700 dark:hover:text-white">
                <FontAwesomeIcon icon={["fas", "pen"]} className="mr-1" /> Edit
              </button>
            </div>
          </div>

          {/* AI Response Bubble with Structured Data */}
          <div className="flex items-start gap-4 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center shadow-glow mt-1">
              <FontAwesomeIcon icon={["fas", "brain"]} className="text-white text-[10px]" />
            </div>
            <div className="flex-1 max-w-[95%] sm:max-w-[90%]">
              <div className="bg-white dark:bg-[#18181B] border border-gray-200 dark:border-white/5 rounded-2xl rounded-tl-sm p-4 sm:p-5 shadow-sm dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                <p className="text-sm text-gray-500 dark:text-zinc-400 mb-4">
                  I've structured that into a work log entry for you. Does this look correct?
                </p>

                {/* Structured Card Preview */}
                <div className="bg-gray-50 dark:bg-[#1A1A21] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-medium text-sm mb-1">Whisper Model Latency Fix</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 font-mono">
                          #ai-model
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20 font-mono">
                          #bug-fix
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">Backend API</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex flex-col sm:grid sm:grid-cols-[80px_1fr] gap-1 sm:gap-2 text-sm">
                      <span className="text-gray-400 dark:text-zinc-500 text-[10px] uppercase tracking-wide pt-1">Problem</span>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                        High latency on inference endpoint due to model reloading.
                      </p>
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-[80px_1fr] gap-1 sm:gap-2 text-sm">
                      <span className="text-gray-400 dark:text-zinc-500 text-[10px] uppercase tracking-wide pt-1">Solution</span>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                        Implemented global model caching singleton to prevent reloading on each request.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100/50 dark:bg-black/30 p-3 flex flex-col sm:flex-row justify-end gap-2">
                    <button className="w-full sm:w-auto text-xs text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white px-3 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-white/5 transition-colors">
                      Discard
                    </button>
                    <button className="w-full sm:w-auto text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded shadow-glow transition-all flex items-center justify-center gap-1">
                      <FontAwesomeIcon icon={["fas", "check"]} /> Confirm &amp; Save
                    </button>
                  </div>
                </div>

                {/* Suggested Follow-up Actions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="text-xs bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5">
                    <FontAwesomeIcon icon={["fas", "plus"]} /> Add code snippet
                  </button>
                  <button className="text-xs bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5">
                    <FontAwesomeIcon icon={["fas", "link"]} /> Link to Jira ticket
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* User Message Bubble with Code Block */}
          <div className="flex flex-col items-end gap-2 group">
            <div className="max-w-[85%] sm:max-w-[75%] bg-white dark:bg-[#1A1A21] border border-gray-200 dark:border-white/10 rounded-2xl rounded-tr-sm p-4 text-gray-900 dark:text-white shadow-sm">
              <p className="leading-relaxed">Here is the fix I implemented:</p>
              <div className="mt-3 bg-gray-100 dark:bg-[#0D0D11] border border-gray-200 dark:border-zinc-700 rounded-lg p-3 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center mb-2 text-gray-400 dark:text-zinc-500 select-none">
                  <span>model_loader.py</span>
                  <span className="text-[10px]">Python</span>
                </div>
                <pre className="text-gray-700 dark:text-gray-300">
                  <code>
{`class ModelLoader:
    _instance = None
    _model = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            # Load model only once
            cls._model = load_whisper_model("base")
        return cls._instance`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* AI Typing Indicator */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center shadow-glow mt-1 opacity-50">
              <FontAwesomeIcon icon={["fas", "brain"]} className="text-white text-[10px]" />
            </div>
            <div className="bg-white dark:bg-[#18181B] border border-gray-200 dark:border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1 items-center h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-12" />
        </div>
      </div>

      {/* Floating Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 bg-gradient-to-t from-gray-50 dark:from-[#0B0B0F] via-gray-50 dark:via-[#0B0B0F] to-transparent pt-20 z-10">
        <div className="max-w-3xl mx-auto">

          {/* Contextual Suggestions */}
          <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
            <button className="flex-shrink-0 bg-white dark:bg-[#1A1A21] hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm dark:shadow-lg backdrop-blur-md">
              <FontAwesomeIcon icon={["fas", "bolt"]} className="text-yellow-500 mr-1.5" /> Documented a bug
            </button>
            <button className="flex-shrink-0 bg-white dark:bg-[#1A1A21] hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm dark:shadow-lg backdrop-blur-md">
              <FontAwesomeIcon icon={["fas", "check"]} className="text-green-500 mr-1.5" /> Completed a task
            </button>
            <button className="flex-shrink-0 bg-white dark:bg-[#1A1A21] hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm dark:shadow-lg backdrop-blur-md">
              <FontAwesomeIcon icon={["fas", "rocket"]} className="text-purple-500 mr-1.5" /> Deployed changes
            </button>
          </div>

          {/* Main Input Box */}
          <div className="relative bg-white dark:bg-[#1A1A21]/80 dark:backdrop-blur-2xl border border-gray-200 dark:border-white/[0.08] rounded-2xl shadow-lg dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 focus-within:ring-1 focus-within:ring-indigo-500/50 focus-within:border-indigo-400 dark:focus-within:border-indigo-500/50">
            {/* Text Area */}
            <textarea
              className="w-full bg-transparent border-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500/40 px-4 sm:px-5 py-4 min-h-[60px] max-h-[200px] resize-none focus:ring-0 focus:outline-none text-sm leading-relaxed"
              placeholder="Describe your work, paste errors, or explain a solution..."
              rows={1}
              readOnly
            />

            {/* Input Actions Toolbar */}
            <div className="flex justify-between items-center px-3 pb-3 pt-1">
              <div className="flex items-center gap-0.5 sm:gap-1">
                <button className="p-2 text-gray-400 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors" title="Attach file">
                  <FontAwesomeIcon icon={["fas", "paperclip"]} className="text-sm" />
                </button>
                <button className="p-2 text-gray-400 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors" title="Add code block">
                  <FontAwesomeIcon icon={["fas", "code"]} className="text-sm" />
                </button>
                <button className="p-2 text-gray-400 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors" title="Tag project">
                  <FontAwesomeIcon icon={["fas", "hashtag"]} className="text-sm" />
                </button>
                <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-white/10 mx-1" />
                <button className="p-2 text-gray-400 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors" title="AI Assist">
                  <FontAwesomeIcon icon={["fas", "wand-magic-sparkles"]} className="text-sm" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-gray-400 dark:text-zinc-500 hidden md:inline-block opacity-60">
                  <kbd className="font-mono bg-gray-100 dark:bg-white/5 px-1 rounded border border-gray-200 dark:border-white/5">Enter</kbd> to send
                </span>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-glow transition-all transform active:scale-95">
                  <FontAwesomeIcon icon={["fas", "paper-plane"]} className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-400/40 dark:text-zinc-500/40 mt-3">
            devlog can make mistakes. Please verify important technical details.
          </p>
        </div>
      </div>
    </div>
  );
}
