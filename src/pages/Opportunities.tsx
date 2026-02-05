 import { useState } from 'react';
 import { Card, CardContent } from '@/components/ui/card';
 import { Badge } from '@/components/ui/badge';
 import { Button } from '@/components/ui/button';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import { mockOpportunities } from '@/lib/mockData';
 import { Trophy, Calendar, MapPin, DollarSign, ExternalLink, Briefcase, Zap, BookOpen } from 'lucide-react';
 
 export default function Opportunities() {
   const [activeType, setActiveType] = useState<string>('all');
 
   const filteredOpportunities = activeType === 'all'
     ? mockOpportunities
     : mockOpportunities.filter(o => o.type === activeType);
 
   const typeIcons = {
     internship: Briefcase,
     hackathon: Zap,
     workshop: BookOpen,
   };
 
   const typeColors = {
     internship: 'bg-secondary text-secondary-foreground',
     hackathon: 'bg-accent text-accent-foreground',
     workshop: 'bg-primary text-primary-foreground',
   };
 
   return (
     <div className="p-6 lg:p-8 max-w-6xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
           <Trophy className="w-6 h-6 text-accent" />
           Opportunities
         </h1>
         <p className="text-muted-foreground">
           Internships, hackathons & workshops curated for you
         </p>
       </div>
 
       {/* Filter Tabs */}
       <Tabs value={activeType} onValueChange={setActiveType} className="mb-6">
         <TabsList>
           <TabsTrigger value="all">All</TabsTrigger>
           <TabsTrigger value="internship" className="gap-2">
             <Briefcase className="w-4 h-4" />
             Internships
           </TabsTrigger>
           <TabsTrigger value="hackathon" className="gap-2">
             <Zap className="w-4 h-4" />
             Hackathons
           </TabsTrigger>
           <TabsTrigger value="workshop" className="gap-2">
             <BookOpen className="w-4 h-4" />
             Workshops
           </TabsTrigger>
         </TabsList>
       </Tabs>
 
       <div className="grid md:grid-cols-2 gap-6">
         {filteredOpportunities.map((opp, index) => {
           const Icon = typeIcons[opp.type];
           return (
             <Card 
               key={opp.id}
               className="card-hover animate-fade-in overflow-hidden"
               style={{ animationDelay: `${index * 100}ms` }}
             >
               <div className={`h-1 ${typeColors[opp.type]}`} />
               <CardContent className="p-6">
                 <div className="flex items-start gap-4">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${typeColors[opp.type]}`}>
                     <Icon className="w-6 h-6" />
                   </div>
                   
                   <div className="flex-1">
                     <div className="flex items-start justify-between">
                       <div>
                         <h3 className="font-semibold text-lg text-foreground">{opp.title}</h3>
                         <p className="text-muted-foreground">{opp.organization}</p>
                       </div>
                       <Badge variant="outline" className="capitalize">
                         {opp.type}
                       </Badge>
                     </div>
 
                     <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                       <span className="flex items-center gap-1">
                         <MapPin className="w-4 h-4" />
                         {opp.location}
                       </span>
                       <span className="flex items-center gap-1">
                         <Calendar className="w-4 h-4" />
                         Deadline: {new Date(opp.deadline).toLocaleDateString()}
                       </span>
                       {opp.stipend && (
                         <span className="flex items-center gap-1">
                           <DollarSign className="w-4 h-4" />
                           {opp.stipend}
                         </span>
                       )}
                     </div>
 
                     <Button variant="outline" size="sm" className="mt-4 gap-2">
                       Apply Now
                       <ExternalLink className="w-3 h-3" />
                     </Button>
                   </div>
                 </div>
               </CardContent>
             </Card>
           );
         })}
       </div>
     </div>
   );
 }