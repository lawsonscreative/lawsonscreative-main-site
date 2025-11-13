export default function SocialProof() {
  const features = [
    {
      icon: '⚡',
      title: 'Launched in 1–2 weeks',
      description: 'Streamlined process, clear deadlines. You get your site when you need it, not when an agency\'s calendar opens up.'
    },
    {
      icon: '💷',
      title: 'From £500 (ex VAT)',
      description: 'Transparent fixed-price packages, no surprise invoices. You know exactly what you\'re paying before we start.'
    },
    {
      icon: '⭐',
      title: 'Clients see more enquiries',
      description: 'Real small businesses with measurable results. Modern websites that convert visitors into customers.'
    },
  ];

  return (
    <section className="bg-lightgrey py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="font-heading font-bold text-xl text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-slate text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
