export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-primary/20 rounded-full" />
        <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  )
}
