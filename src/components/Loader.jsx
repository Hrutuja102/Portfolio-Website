export default function Loader({ visible }) {
  return (
    <div
      className={`fixed inset-0 bg-bg-primary z-[9999] flex items-center justify-center transition-all duration-600
        ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-3 border-border-subtle border-t-accent rounded-full animate-spin" />
        <span className="text-sm text-white/60 tracking-widest uppercase font-medium">Loading</span>
      </div>
    </div>
  )
}
