
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { Briefcase, User, ArrowRight, Mail, Lock, Building, GraduationCap, FileText } from 'lucide-react';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleEmployeeSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "You've successfully signed up as an Employee.",
      });
      navigate('/');
    }, 1500);
  };

  const handleJobSeekerSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "You've successfully signed up as a Job Seeker.",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Join Skilllogic.In</h1>
          <p className="text-muted-foreground mt-2">
            Create an account and start connecting with opportunities
          </p>
        </div>

        <Tabs defaultValue="jobseeker" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="jobseeker" className="data-[state=active]:bg-brand-600 data-[state=active]:text-white">
              <User className="mr-2 h-4 w-4" />
              Job Seeker
            </TabsTrigger>
            <TabsTrigger value="employee" className="data-[state=active]:bg-brand-600 data-[state=active]:text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              Employee
            </TabsTrigger>
          </TabsList>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
            {/* Left column with benefits */}
            <div className="hidden md:block md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Sign Up?</CardTitle>
                  <CardDescription>Benefits of joining our platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-brand-100 text-brand-600 p-2 rounded-full h-fit">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Connect Directly</h4>
                      <p className="text-sm text-muted-foreground">Build relationships with industry professionals</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-brand-100 text-brand-600 p-2 rounded-full h-fit">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Get Referred</h4>
                      <p className="text-sm text-muted-foreground">Increase your chances of landing your dream job</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-brand-100 text-brand-600 p-2 rounded-full h-fit">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expert Guidance</h4>
                      <p className="text-sm text-muted-foreground">Receive mentorship and interview preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column with signup forms */}
            <div className="md:col-span-3">
              <TabsContent value="jobseeker">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign Up as a Job Seeker</CardTitle>
                    <CardDescription>
                      Create your account to connect with employees who can refer you
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleJobSeekerSignup}>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input id="email" placeholder="your.email@example.com" className="pl-10" type="email" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input id="password" type="password" className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="skills">Your Skills (separated by commas)</Label>
                        <Input id="skills" placeholder="React, TypeScript, UI/UX Design" />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="education">Highest Education</Label>
                        <Input id="education" placeholder="Bachelor's in Computer Science" />
                      </div>

                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor="resume">Resume (optional)</Label>
                        <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700" disabled={isLoading}>
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                      <p className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="#" className="text-brand-600 hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="employee">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign Up as an Employee</CardTitle>
                    <CardDescription>
                      Create your account to provide referrals and mentorship
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleEmployeeSignup}>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="empFirstName">First Name</Label>
                          <Input id="empFirstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="empLastName">Last Name</Label>
                          <Input id="empLastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="empEmail">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input id="empEmail" placeholder="your.email@company.com" className="pl-10" type="email" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="empPassword">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input id="empPassword" type="password" className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input id="company" placeholder="Google, Microsoft, etc." className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input id="jobTitle" placeholder="Senior Software Engineer" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="linkedIn">LinkedIn Profile (optional)</Label>
                        <Input id="linkedIn" placeholder="https://linkedin.com/in/yourprofile" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                      <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700" disabled={isLoading}>
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                      <p className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="#" className="text-brand-600 hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Signup;
