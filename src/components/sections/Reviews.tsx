import { BUSINESS } from '@/data/business';

// IMPORTANT: Only display verified reviews. Do not invent review text or reviewer names.
// The two verified reviews from Google are not individually attributable from public data.
// Display the aggregate rating only, with verified platform attribution.

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-pad"
      style={{ background: '#050c19' }}
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <p className="text-label text-blue-400 mb-3">Customer Feedback</p>
          <h2 id="reviews-heading" className="text-display-lg text-white mb-4">
            What Customers Say
          </h2>
          <p className="text-body" style={{ color: '#7391af' }}>
            Rated on Google Business Profile.
          </p>
        </div>

        {/* Aggregate rating card */}
        <div className="max-w-sm mx-auto">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: '#0a1628',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 40px -8px rgba(29,107,219,0.15)',
            }}
          >
            {/* Google logo type */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium" style={{ color: '#9fb3ca' }}>
                Google Business Profile
              </span>
            </div>

            {/* Score */}
            <div
              className="text-7xl font-extrabold mb-3"
              style={{ fontFamily: 'var(--font-display)', color: '#f0f4f8' }}
            >
              {BUSINESS.rating.score}
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3" aria-label={`Rated ${BUSINESS.rating.score} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>

            <p className="text-sm" style={{ color: '#7391af' }}>
              Based on {BUSINESS.rating.count} Google reviews
            </p>

            <a
              href={BUSINESS.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#5fa0f7' }}
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Review call to action */}
        <p className="text-center text-sm mt-8" style={{ color: '#516d8e' }}>
          Happy with your purchase? Leave us a review on Google.
        </p>
      </div>
    </section>
  );
}
