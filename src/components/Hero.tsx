
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100 opacity-40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-50 opacity-40 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-100 text-brand-800 text-xs font-medium animate-fade-in">
                Connecting talent with opportunity
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in">
                Your Career Journey,
                <span className="text-brand-600"> Accelerated</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
                Connect with company insiders for referrals, mentorship, and guidance to land your dream job. The smarter way to get noticed by top employers.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 btn-hover-effect">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="btn-hover-effect">
                  For Employees
                </Button>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 animate-fade-in">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-200 border-2 border-background"></div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">1,000+</span> successful referrals
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-float">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-100 rounded-2xl transform -rotate-6 scale-95 opacity-50"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-elevation">
                <div className="glass p-6 sm:p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-brand-50 text-brand-800 text-xs font-medium px-3 py-1 rounded-full">
                      Top Companies
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-brand-200"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-300"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-400"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-3 rounded-lg bg-white/50 border border-gray-100 shadow-subtle">
                        <div className="w-10 h-10 rounded-md bg-brand-100 flex items-center justify-center text-brand-600 font-medium mr-3">
                          {i}
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-2.5 bg-gray-200 rounded"></div>
                          <div className="mt-1.5 w-16 h-2 bg-gray-100 rounded"></div>
                        </div>
                        <div className="ml-4 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs">
                          {i === 1 ? 'Tech' : i === 2 ? 'Finance' : 'Health'}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Get referred today</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Join 10,000+ users</div>
                      </div>
                      <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
