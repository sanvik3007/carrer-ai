 import { useNavigate } from 'react-router-dom';
 import { ModuleCard } from '@/components/ui/ModuleCard';
 import { useUser } from '@/contexts/UserContext';
 import { 
   Compass, 
   Briefcase, 
   BookOpen, 
   Users, 
   Cpu, 
   FileText, 
   Trophy,
   User,
   Sparkles,
   TrendingUp,
   Clock
 } from 'lucide-react';
 import { Card, CardContent } from '@/components/ui/card';
 
 export default function Dashboard() {
   const navigate = useNavigate();
   const { user } = useUser();
 
   const modules = [
     {
       title: 'Career Analysis',
       description: 'Get AI-powered insights on career paths and placement trends',
       icon: Compass,
       url: '/career',
       variant: 'secondary' as const,
       stats: [{ label: 'Career Paths', value: '12+' }],
     },
     {
       title: 'Job Roles',
       description: 'Discover matching job opportunities based on your profile',
       icon: Briefcase,
       url: '/jobs',
       variant: 'default' as const,
     },
     {
       title: 'Courses',
       description: 'Personalized course recommendations from NPTEL, Coursera & more',
       icon: BookOpen,
       url: '/courses',
       variant: 'default' as const,
     },
     {
       title: 'Mentors',
       description: 'Connect with industry experts for guidance',
       icon: Users,
       url: '/mentors',
       variant: 'default' as const,
     },
     {
       title: 'Project Studio',
       description: 'AI-powered embedded project generation with ready code',
       icon: Cpu,
       url: '/projects',
       variant: 'accent' as const,
       stats: [{ label: 'Project Ideas', value: '50+' }],
     },
     {
       title: 'Resume Builder',
       description: 'Generate professional resume from your activities',
       icon: FileText,
       url: '/resume',
       variant: 'default' as const,
     },
     {
       title: 'Opportunities',
       description: 'Internships, hackathons & workshops curated for you',
       icon: Trophy,
       url: '/opportunities',
       variant: 'default' as const,
     },
   ];
 
   const quickStats = [
     { icon: TrendingUp, label: 'Career Match', value: '85%', color: 'text-teal-500' },
     { icon: BookOpen, label: 'Courses', value: '24', color: 'text-coral-500' },
     { icon: Clock, label: 'Hours Learning', value: '0', color: 'text-primary' },
   ];
 
   return (
     <div className="p-6 lg:p-8 max-w-7xl mx-auto">
       {/* Welcome Section */}
       <div className="mb-8">
         <div className="flex items-center gap-3 mb-2">
           <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
             <Sparkles className="w-5 h-5 text-primary-foreground" />
           </div>
           <div>
             <h1 className="text-2xl font-bold text-foreground">
               Welcome back{user?.name ? `, ${user.name}` : ''}!
             </h1>
             <p className="text-muted-foreground">
               Your personalized career intelligence dashboard
             </p>
           </div>
         </div>
       </div>
 
       {/* Quick Stats */}
       <div className="grid grid-cols-3 gap-4 mb-8">
         {quickStats.map((stat) => (
           <Card key={stat.label} className="border border-border">
             <CardContent className="p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                 <stat.icon className={`w-5 h-5 ${stat.color}`} />
               </div>
               <div>
                 <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                 <p className="text-xs text-muted-foreground">{stat.label}</p>
               </div>
             </CardContent>
           </Card>
         ))}
       </div>
 
       {/* Profile Setup Prompt */}
       {!user?.name && (
         <Card 
           className="mb-8 border-2 border-dashed border-secondary/50 bg-secondary/5 cursor-pointer card-hover"
           onClick={() => navigate('/profile')}
         >
           <CardContent className="p-6 flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
               <User className="w-6 h-6 text-secondary" />
             </div>
             <div className="flex-1">
               <h3 className="font-semibold text-foreground">Complete Your Profile</h3>
               <p className="text-sm text-muted-foreground">
                 Add your details to get personalized recommendations
               </p>
             </div>
             <div className="text-secondary font-medium text-sm">Get Started →</div>
           </CardContent>
         </Card>
       )}
 
       {/* Modules Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {modules.map((module, index) => (
           <div 
             key={module.title}
             className="animate-fade-in"
             style={{ animationDelay: `${index * 50}ms` }}
           >
             <ModuleCard
               title={module.title}
               description={module.description}
               icon={module.icon}
               variant={module.variant}
               stats={module.stats}
               onClick={() => navigate(module.url)}
             />
           </div>
         ))}
       </div>
     </div>
   );
 }