
import { CheckCircle, UserCircle2, Zap, Calendar, MessageSquare, DollarSign } from 'lucide-react';

const features = [
  {
    title: "Profile Creation",
    description: "Create a comprehensive profile showcasing your skills, experiences, and career aspirations.",
    icon: UserCircle2,
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Insider Connections",
    description: "Connect with employees at your target companies for valuable referrals and insights.",
    icon: Zap,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Referral Requests",
    description: "Request referrals from employees with a simple, transparent process.",
    icon: CheckCircle,
    color: "bg-green-50 text-green-500",
  },
  {
    title: "Mentorship Sessions",
    description: "Book one-on-one sessions with industry professionals for career guidance.",
    icon: Calendar,
    color: "bg-amber-50 text-amber-500",
  },
  {
    title: "Interview Preparation",
    description: "Get company-specific interview tips and participate in mock interviews.",
    icon: MessageSquare,
    color: "bg-pink-50 text-pink-500",
  },
  {
    title: "Secure Payments",
    description: "Easy and secure payment system for referral requests and premium services.",
    icon: DollarSign,
    color: "bg-teal-50 text-teal-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 text-xs font-medium">
            Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything you need to accelerate your career</h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform provides all the tools needed to connect with insiders, get referrals, and prepare for interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-background rounded-xl p-6 transition-all duration-300 hover:shadow-elevation border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
