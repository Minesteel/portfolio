export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="mb-6 text-gray-400">Sorry — the page you requested does not exist.</p>
      <a href="/" className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg">Go home</a>
    </div>
  );
}
