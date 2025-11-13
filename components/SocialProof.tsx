export default function SocialProof() {
  const features = [
    { icon: '⭐', text: '5-star service' },
    { icon: '⚡', text: 'Fast delivery' },
    { icon: '£', text: 'From £500' },
    { icon: '📱', text: 'Mobile-friendly websites' },
    { icon: '🔒', text: 'Secure and fast' },
  ];

  return (
    <section className="bg-lightgrey py-10 md:py-12">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-slate"
            >
              <span className="text-2xl leading-none flex items-center">{feature.icon}</span>
              <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
