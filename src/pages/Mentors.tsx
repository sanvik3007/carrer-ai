 import { Card, CardContent } from '@/components/ui/card';
 import { Badge } from '@/components/ui/badge';
 import { Button } from '@/components/ui/button';
 import { Avatar, AvatarFallback } from '@/components/ui/avatar';
 import { mockMentors } from '@/lib/mockData';
 import { Users, Linkedin, MessageCircle, Briefcase } from 'lucide-react';
 
 export default function Mentors() {
   return (
     <div className="p-6 lg:p-8 max-w-6xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
           <Users className="w-6 h-6 text-primary" />
           Mentor Discovery
         </h1>
         <p className="text-muted-foreground">
           Connect with industry experts for career guidance
         </p>
       </div>
 
       <div className="grid md:grid-cols-2 gap-6">
         {mockMentors.map((mentor, index) => (
           <Card 
             key={mentor.id}
             className="card-hover animate-fade-in"
             style={{ animationDelay: `${index * 100}ms` }}
           >
             <CardContent className="p-6">
               <div className="flex gap-4">
                 <Avatar className="w-16 h-16 border-2 border-primary/20">
                   <AvatarFallback className="gradient-primary text-primary-foreground text-lg font-semibold">
                     {mentor.avatar}
                   </AvatarFallback>
                 </Avatar>
                 
                 <div className="flex-1">
                   <h3 className="font-semibold text-lg text-foreground">{mentor.name}</h3>
                   <p className="text-muted-foreground">{mentor.title}</p>
                   <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                     <Briefcase className="w-3 h-3" />
                     {mentor.company} • {mentor.experience}
                   </p>
                 </div>
               </div>
 
               <div className="flex flex-wrap gap-2 mt-4">
                 {mentor.expertise.map((skill) => (
                   <Badge key={skill} variant="outline" className="text-xs">
                     {skill}
                   </Badge>
                 ))}
               </div>
 
               <div className="flex gap-3 mt-4">
                 <Button variant="outline" size="sm" className="flex-1 gap-2">
                   <Linkedin className="w-4 h-4" />
                   LinkedIn
                 </Button>
                 <Button size="sm" className="flex-1 gap-2">
                   <MessageCircle className="w-4 h-4" />
                   Connect
                 </Button>
               </div>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   );
 }