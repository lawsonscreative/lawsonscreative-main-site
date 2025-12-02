interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  initials?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export default function Testimonial({
  quote,
  name,
  role,
  company,
  initials,
  variant = 'default',
}: TestimonialProps) {
  const getInitials = () => {
    if (initials) return initials;
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (variant === 'compact') {
    return (
      <div className="bg-lightgrey rounded-xl p-6">
        <div className="flex items-start gap-3 mb-3">
          <svg
            className="w-6 h-6 text-lime flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-slate italic leading-relaxed mb-4">{quote}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center text-navy font-bold text-sm">
            {getInitials()}
          </div>
          <div>
            <div className="font-semibold text-navy text-sm">{name}</div>
            {(role || company) && (
              <div className="text-slate text-xs">
                {role}
                {role && company && ', '}
                {company}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-navy text-white rounded-2xl p-8 md:p-12">
        <div className="flex items-start mb-6">
          <svg
            className="w-12 h-12 text-lime flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-xl md:text-2xl italic leading-relaxed mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-navy font-bold text-xl mr-4">
            {getInitials()}
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            {(role || company) && (
              <div className="text-gray-300 text-sm">
                {role}
                {role && company && ', '}
                {company}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex items-start gap-3 mb-4">
        <svg
          className="w-8 h-8 text-lime flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-slate italic leading-relaxed mb-4 text-lg">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center text-navy font-bold">
          {getInitials()}
        </div>
        <div>
          <div className="font-semibold text-navy">{name}</div>
          {(role || company) && (
            <div className="text-slate text-sm">
              {role}
              {role && company && ', '}
              {company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
