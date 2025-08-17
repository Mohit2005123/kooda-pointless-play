import { ExternalLink, ArrowRight } from "lucide-react";

const CompartmentsSection = () => {
  const compartments = [
    {
      id: 'long-doge',
      title: 'Long Llama Challenge',
      url: 'https://long-llama.vercel.app',
      emoji: '🐶',
      description: 'Scroll to enlightenment. Infinite doge, infinite wisdom.',
      tagline: 'The spiritual journey your mouse never knew it needed',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'checkbox-race',
      title: 'tick-tok',
      url: 'https://tick-tok.vercel.app',
      emoji: '✅',
      description: 'The Olympics of clicking. Check yourself before you wreck yourself.',
      tagline: 'Professional checkbox athlete training ground',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'mondrian-me',
      title: 'Art Attack',
      url: 'https://art-attack-seven.vercel.app',
      emoji: '🎨',
      description: 'Unleash your inner Picasso… but with stricter geometry.',
      tagline: 'Where art meets overthinking',
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'smash-walls',
      title: 'Angry Walls',
      url: 'https://angry-walls.vercel.app',
      emoji: '🧱',
      description: 'Because demolition is therapy.',
      tagline: 'Anger management through digital destruction',
      color: 'from-red-400 to-pink-500'
    }
  ];

  const openCompartment = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="compartments" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The Four Magical Doors
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose your adventure in magnificent pointlessness. 
            <br />
            <span className="text-accent font-semibold">Warning: May cause uncontrollable giggling.</span>
          </p>
        </div>

        {/* Compartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compartments.map((compartment, index) => (
            <div 
              key={compartment.id}
              className="chaos-card group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openCompartment(compartment.url)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-4xl mr-4 group-hover:animate-bounce-scale">
                    {compartment.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {compartment.title}
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Main Description */}
              <p className="text-lg text-foreground mb-3 leading-relaxed">
                {compartment.description}
              </p>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground mb-6 italic">
                {compartment.tagline}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className={`h-1 rounded-full bg-gradient-to-r ${compartment.color} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <div className="ml-4 flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Enter Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Can't decide? Why not try them all?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-button rounded-full text-white font-semibold shadow-neon">
            <span>Life's too short for productivity</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompartmentsSection;