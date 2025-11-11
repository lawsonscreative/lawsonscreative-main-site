export default function SocialProof() {
  const features = [
    { icon: '⭐', text: '5-Star Service' },
    { icon: '⚡', text: '1-2 Week Delivery' },
    { icon: '💰', text: 'From £500' },
    { icon: '📱', text: 'Mobile-First Design' },
    { icon: '🔒', text: 'Secure & Fast' },
  ];

  return (
    <section className="bg-lightgrey py-6">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-slate"
            >
              <span className="text-2xl">{feature.icon}</span>
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
