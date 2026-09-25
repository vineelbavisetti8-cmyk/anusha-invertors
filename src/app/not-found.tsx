import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#050c19' }}
    >
      <div className="text-center px-6">
        <p className="text-label text-blue-400 mb-4">404</p>
        <h1 className="text-display-lg text-white mb-4">Page Not Found</h1>
        <p className="text-body mb-8" style={{ color: '#9fb3ca' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded-lg hover:opacity-90 transition-all"
          style={{ background: 'linear-gradient(135deg, #1558c8, #3480ef)' }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
