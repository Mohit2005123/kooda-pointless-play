import { Zap, TrendingUp, Clock, Star } from "lucide-react";
import { useEffect, useState } from "react";

const ManifestoSection = () => {
  // Animated counters
  const [dogesScrolled, setDogesScrolled] = useState(427000);
  const [checkboxesChecked, setCheckboxesChecked] = useState(7300000);
  const [wallsPerSecond, setWallsPerSecond] = useState(32);

  useEffect(() => {
    const interval = setInterval(() => {
      setDogesScrolled(prev => prev + Math.floor(Math.random() * 10));
      setCheckboxesChecked(prev => prev + Math.floor(Math.random() * 50));
      setWallsPerSecond(prev => 30 + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        {/* Manifesto Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The KOODA Manifesto
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At KOODA, we don't innovate. We waste time… <span className="text-accent font-bold">beautifully</span>.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="chaos-card max-w-4xl mx-auto mb-16 text-left">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-accent mr-3" />
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In a world obsessed with productivity and efficiency, we dare to ask: 
            <span className="text-primary font-semibold"> "What if we didn't?"</span> 
            KOODA represents the pinnacle of human achievement in the field of creative procrastination. 
            We've carefully curated the most magnificently pointless experiences the internet has to offer.
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="chaos-card text-center">
            <div className="mb-4">
              <div className="text-6xl mb-2">🐶</div>
              <div className="stat-counter">{formatNumber(dogesScrolled)}</div>
              <p className="text-muted-foreground font-medium">Doges Scrolled</p>
            </div>
          </div>

          <div className="chaos-card text-center">
            <div className="mb-4">
              <div className="text-6xl mb-2">✅</div>
              <div className="stat-counter">{formatNumber(checkboxesChecked)}</div>
              <p className="text-muted-foreground font-medium">Checkboxes Checked</p>
            </div>
          </div>

          <div className="chaos-card text-center">
            <div className="mb-4">
              <div className="text-6xl mb-2">🧱</div>
              <div className="stat-counter">{wallsPerSecond}</div>
              <p className="text-muted-foreground font-medium">Walls/Second</p>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-card">
            <TrendingUp className="w-8 h-8 text-accent mb-2" />
            <span className="text-sm font-semibold">Trending #1</span>
            <span className="text-xs text-muted-foreground">In Pointlessness</span>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-card">
            <Clock className="w-8 h-8 text-secondary mb-2" />
            <span className="text-sm font-semibold">Time Wasted</span>
            <span className="text-xs text-muted-foreground">∞ Hours</span>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-card">
            <Star className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-semibold">User Rating</span>
            <span className="text-xs text-muted-foreground">5/5 Confusion</span>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-card">
            <Zap className="w-8 h-8 text-accent mb-2" />
            <span className="text-sm font-semibold">Productivity</span>
            <span className="text-xs text-muted-foreground">-100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;