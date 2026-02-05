 import { useState } from 'react';
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { Progress } from '@/components/ui/progress';
 import { useUser } from '@/contexts/UserContext';
 import { Compass, TrendingUp, Target, Lightbulb, Sparkles, Loader2 } from 'lucide-react';
 import { toast } from 'sonner';
 
 interface CareerInsight {
   path: string;
   match: number;
   description: string;
   skills: string[];
   demand: 'High' | 'Medium' | 'Growing';
 }
 
 export default function Career() {
   const { user } = useUser();
   const [isAnalyzing, setIsAnalyzing] = useState(false);
   const [insights, setInsights] = useState<CareerInsight[]>([]);
 
   const analyzeCareer = async () => {
     if (!user?.department || !user?.skills?.length) {
       toast.error('Please complete your profile first');
       return;
     }
 
     setIsAnalyzing(true);
     
     // Simulate AI analysis with mock data
     setTimeout(() => {
       const mockInsights: CareerInsight[] = [
         {
           path: 'Software Development Engineer',
           match: 92,
           description: 'Build scalable software systems at top tech companies',
           skills: ['Python', 'System Design', 'DSA'],
           demand: 'High',
         },
         {
           path: 'Embedded Systems Engineer',
           match: 88,
           description: 'Design firmware and hardware interfaces for IoT devices',
           skills: ['C/C++', 'RTOS', 'Microcontrollers'],
           demand: 'Growing',
         },
         {
           path: 'ML/AI Engineer',
           match: 85,
           description: 'Develop intelligent systems using machine learning',
           skills: ['Python', 'TensorFlow', 'Deep Learning'],
           demand: 'High',
         },
         {
           path: 'Full Stack Developer',
           match: 80,
           description: 'Create end-to-end web applications',
           skills: ['React', 'Node.js', 'Databases'],
           demand: 'High',
         },
       ];
       setInsights(mockInsights);
       setIsAnalyzing(false);
       toast.success('Career analysis complete!');
     }, 2000);
   };
 
   const demandColors = {
     High: 'bg-secondary text-secondary-foreground',
     Medium: 'bg-muted text-muted-foreground',
     Growing: 'bg-accent text-accent-foreground',
   };
 
   return (
     <div className="p-6 lg:p-8 max-w-6xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
           <Compass className="w-6 h-6 text-secondary" />
           Career Analysis
         </h1>
         <p className="text-muted-foreground">
           Get AI-powered insights on career paths based on your profile
         </p>
       </div>
 
       {/* Analysis Trigger */}
       <Card className="mb-8 gradient-hero text-primary-foreground border-0">
         <CardContent className="p-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                 <Sparkles className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-semibold text-lg">AI Career Analyzer</h3>
                 <p className="text-sm text-primary-foreground/80">
                   Analyze placement trends and find your best career fit
                 </p>
               </div>
             </div>
             <Button 
               onClick={analyzeCareer}
               disabled={isAnalyzing}
               className="bg-white text-primary hover:bg-white/90"
             >
               {isAnalyzing ? (
                 <>
                   <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                   Analyzing...
                 </>
               ) : (
                 <>
                   <Target className="w-4 h-4 mr-2" />
                   Analyze My Career
                 </>
               )}
             </Button>
           </div>
         </CardContent>
       </Card>
 
       {/* Insights */}
       {insights.length > 0 ? (
         <div className="grid md:grid-cols-2 gap-6">
           {insights.map((insight, index) => (
             <Card 
               key={insight.path}
               className="card-hover animate-fade-in"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               <CardHeader className="pb-3">
                 <div className="flex items-start justify-between">
                   <div>
                     <CardTitle className="text-lg">{insight.path}</CardTitle>
                     <CardDescription className="mt-1">{insight.description}</CardDescription>
                   </div>
                   <Badge className={demandColors[insight.demand]}>
                     {insight.demand} Demand
                   </Badge>
                 </div>
               </CardHeader>
               <CardContent>
                 <div className="mb-4">
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-muted-foreground">Profile Match</span>
                     <span className="font-semibold text-foreground">{insight.match}%</span>
                   </div>
                   <Progress value={insight.match} className="h-2" />
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {insight.skills.map((skill) => (
                     <Badge key={skill} variant="outline" className="text-xs">
                       {skill}
                     </Badge>
                   ))}
                 </div>
               </CardContent>
             </Card>
           ))}
         </div>
       ) : (
         <Card className="border-dashed border-2">
           <CardContent className="p-12 text-center">
             <Lightbulb className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
             <h3 className="font-semibold text-lg text-foreground mb-2">
               Ready to Discover Your Path?
             </h3>
             <p className="text-muted-foreground mb-4">
               Click the analyze button above to get personalized career insights
             </p>
           </CardContent>
         </Card>
       )}
     </div>
   );
 }