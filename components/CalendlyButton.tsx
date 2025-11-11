'use client';

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function CalendlyButton({ className, children }: CalendlyButtonProps) {
  const openCalendly = () => {
    if (typeof window !== 'undefined') {
      window.open('https://calendly.com/andy-lawsonsenterprises/30min', '_blank');
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
