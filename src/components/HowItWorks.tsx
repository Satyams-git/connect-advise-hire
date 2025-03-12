
import { ArrowRight, FileText, Users, MessageCircle, CheckSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: "01",
    title: "Create Your Profile",
    description: "Sign up and create a detailed profile showcasing your skills, experience, and career goals.",
    icon: FileText,
  },
  {
    id: "02",
    title: "Connect with Employees",
    description: "Browse and connect with employees at your target companies who can provide referrals.",
    icon: Users,
  },
  {
    id: "03",
    title: "Request Referrals",
    description: "Send referral requests to employees and engage in meaningful conversations.",
    icon: MessageCircle,
  },
  {
    id: "04",
    title: "Get Referred & Prepare",
    description: "Receive your referral and prepare for interviews with insider guidance.",
    icon: CheckSquare,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 text-xs font-medium">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How ReferConnect Works</h2>
          <p className="text-muted-foreground text-lg">
            Our platform makes it easy to connect with insiders and get referrals in just a few simple steps.
          </p>
        </div>

        <div className="relative mb-16">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-brand-100 z-0" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative bg-background rounded-xl p-6 border border-border/50 transition-all duration-300 hover:shadow-elevation animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 flex items-center">
                  <div className="w-14 h-14 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-xl font-bold">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden ml-4">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-5">{step.description}</p>
                <div className="mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brand-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to boost your career?</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs through our platform.
          </p>
          <Button size="lg" className="bg-brand-600 hover:bg-brand-700 btn-hover-effect">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
