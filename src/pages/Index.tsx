import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@/contexts/UserContext';
import { 
  Sparkles, 
  Compass, 
  Briefcase, 
  BookOpen, 
  Users, 
  Cpu, 
  ArrowRight,
  Mail,
  Phone,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, phone);
    navigate('/dashboard');
  };

  const features = [
    { icon: Compass, title: 'Career Analysis', desc: 'AI-powered career insights' },
    { icon: Briefcase, title: 'Job Matching', desc: 'Find your perfect role' },
    { icon: BookOpen, title: 'Course Recommendations', desc: 'NPTEL, Coursera & more' },
    { icon: Users, title: 'Mentor Discovery', desc: 'Connect with experts' },
    { icon: Cpu, title: 'Project Studio', desc: 'Build embedded projects' },
    { icon: Target, title: 'Opportunities', desc: 'Internships & hackathons' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-hero min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span className="text-sm font-medium">AI-Powered Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Career
                <span className="block text-teal-300">Intelligence Hub</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                From career guidance to embedded project development. 
                Get AI-powered insights, course recommendations, and ready-to-deploy code.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/70">
                  <Zap className="w-5 h-5 text-teal-300" />
                  <span>Smart Career Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <TrendingUp className="w-5 h-5 text-teal-300" />
                  <span>Personalized Learning</span>
                </div>
              </div>
            </div>
            
            {/* Right: Auth Card */}
            <div className="animate-slide-in-right">
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl text-foreground">Get Started</CardTitle>
                  <CardDescription>
                    Enter your details to explore the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={authMethod} onValueChange={(v) => setAuthMethod(v as 'email' | 'phone')}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="email" className="gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </TabsTrigger>
                      <TabsTrigger value="phone" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Phone
                      </TabsTrigger>
                    </TabsList>
                    
                    <form onSubmit={handleLogin}>
                      <TabsContent value="email" className="mt-0">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mb-4"
                          required={authMethod === 'email'}
                        />
                      </TabsContent>
                      
                      <TabsContent value="phone" className="mt-0">
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mb-4"
                          required={authMethod === 'phone'}
                        />
                      </TabsContent>
                      
                      <Button type="submit" className="w-full gap-2 gradient-primary text-white border-0">
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                  </Tabs>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Demo mode - no real authentication required
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed for engineering students to navigate 
            career paths and build real-world projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border border-border card-hover bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
