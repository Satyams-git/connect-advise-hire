
import { CheckCircle } from 'lucide-react';

const benefitsData = {
  jobSeekers: [
    "Increased chances of getting hired through referrals",
    "Access to insider insights and interview preparation",
    "Direct connection with employees from top companies",
    "Personalized guidance from industry professionals",
    "Higher interview success rates",
    "Faster response from hiring managers"
  ],
  employees: [
    "Opportunity to mentor and help job seekers",
    "Earn incentives for successful referrals",
    "Expand professional network and gain recognition",
    "Contribute to diversity and inclusion in hiring",
    "Flexible schedule for mentorship activities",
    "Build your personal brand in the industry"
  ]
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-100/50 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-100 text-brand-600 text-xs font-medium">
            Platform Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ReferConnect</h2>
          <p className="text-muted-foreground text-lg">
            Our platform offers unique advantages for both job seekers and employees
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Seekers Benefits */}
          <div className="bg-background rounded-xl p-8 border border-border/50 shadow-subtle animate-fade-in">
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">For Job Seekers</h3>
              <p className="text-muted-foreground mt-2">
                Gain access to opportunities and insights that give you a competitive edge
              </p>
            </div>

            <ul className="space-y-4">
              {benefitsData.jobSeekers.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Employees Benefits */}
          <div className="bg-background rounded-xl p-8 border border-border/50 shadow-subtle animate-fade-in stagger-1">
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">For Employees</h3>
              <p className="text-muted-foreground mt-2">
                Make a difference in someone's career while growing your own professional network
              </p>
            </div>

            <ul className="space-y-4">
              {benefitsData.employees.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
