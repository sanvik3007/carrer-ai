 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 import { Badge } from '@/components/ui/badge';
 import { Button } from '@/components/ui/button';
 import { Progress } from '@/components/ui/progress';
 import { mockJobRoles } from '@/lib/mockData';
 import { Briefcase, MapPin, DollarSign, ExternalLink } from 'lucide-react';
 
 export default function Jobs() {
   return (
     <div className="p-6 lg:p-8 max-w-6xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
           <Briefcase className="w-6 h-6 text-primary" />
           Job Roles
         </h1>
         <p className="text-muted-foreground">
           Discover matching job opportunities based on your skills and interests
         </p>
       </div>
 
       <div className="grid gap-6">
         {mockJobRoles.map((job, index) => (
           <Card 
             key={job.id}
             className="card-hover animate-fade-in"
             style={{ animationDelay: `${index * 100}ms` }}
           >
             <CardContent className="p-6">
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                 <div className="flex-1">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                       <Briefcase className="w-6 h-6 text-primary" />
                     </div>
                     <div className="flex-1">
                       <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
                       <p className="text-muted-foreground font-medium">{job.company}</p>
                       <p className="text-sm text-muted-foreground mt-1">{job.description}</p>
                       
                       <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                         <span className="flex items-center gap-1">
                           <MapPin className="w-4 h-4" />
                           {job.location}
                         </span>
                         <span className="flex items-center gap-1">
                           <DollarSign className="w-4 h-4" />
                           {job.salary}
                         </span>
                       </div>
                       
                       <div className="flex flex-wrap gap-2 mt-3">
                         {job.skills.map((skill) => (
                           <Badge key={skill} variant="outline" className="text-xs">
                             {skill}
                           </Badge>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-end gap-3 min-w-[140px]">
                   <div className="text-right">
                     <p className="text-2xl font-bold text-secondary">{job.match}%</p>
                     <p className="text-xs text-muted-foreground">Profile Match</p>
                   </div>
                   <Progress value={job.match} className="w-full h-2" />
                   <Button size="sm" className="gap-2">
                     View Details
                     <ExternalLink className="w-3 h-3" />
                   </Button>
                 </div>
               </div>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   );
 }