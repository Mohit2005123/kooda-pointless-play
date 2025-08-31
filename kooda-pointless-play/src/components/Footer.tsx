import { Heart, AlertTriangle, Github, Twitter, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* KOODA Logo */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              KOODA
            </h3>
            <p className="text-muted-foreground">Wasting time since 2024</p>
          </div>

          {/* Disclaimer */}
          <div className="chaos-card max-w-4xl mx-auto mb-8">
            <div className="flex items-start mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive mr-3 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-bold text-destructive mb-2">Legal Disclaimer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  KOODA is not responsible for lost productivity, strained eyes, broken mice, 
                  existential crises, or sudden urges to reorganize your life after realizing 
                  you just spent 3 hours making a digital llama longer. Enter at your own risk. 
                  Side effects may include: uncontrollable giggling, questioning life choices, 
                  and becoming the office expert on checkbox racing techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-sm text-muted-foreground">Mission: Chaos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-sm text-muted-foreground">Achievement: Unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-sm text-muted-foreground">Speed: Snail Pace</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🎪</div>
              <div className="text-sm text-muted-foreground">Circus: Digital</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="#" 
            className="p-3 rounded-full bg-gradient-card hover:bg-gradient-button transition-all duration-300 hover:scale-110 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-gradient-card hover:bg-gradient-button transition-all duration-300 hover:scale-110 group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-gradient-card hover:bg-gradient-button transition-all duration-300 hover:scale-110 group"
            aria-label="Buy us coffee"
          >
            <Coffee className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;