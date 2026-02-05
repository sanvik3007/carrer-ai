 import { useState } from 'react';
 import { Card, CardContent } from '@/components/ui/card';
 import { Badge } from '@/components/ui/badge';
 import { Button } from '@/components/ui/button';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import { mockCourses } from '@/lib/mockData';
 import { BookOpen, Clock, Star, ExternalLink } from 'lucide-react';
 
 export default function Courses() {
   const categories = ['All', ...new Set(mockCourses.map(c => c.category))];
   const [activeCategory, setActiveCategory] = useState('All');
 
   const filteredCourses = activeCategory === 'All' 
     ? mockCourses 
     : mockCourses.filter(c => c.category === activeCategory);
 
   const platformColors: Record<string, string> = {
     'NPTEL': 'bg-primary text-primary-foreground',
     'Coursera': 'bg-secondary text-secondary-foreground',
     'Udemy': 'bg-accent text-accent-foreground',
   };
 
   return (
     <div className="p-6 lg:p-8 max-w-6xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
           <BookOpen className="w-6 h-6 text-primary" />
           Course Recommendations
         </h1>
         <p className="text-muted-foreground">
           Personalized courses from NPTEL, Coursera, Udemy and more
         </p>
       </div>
 
       {/* Category Tabs */}
       <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
         <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0">
           {categories.map((cat) => (
             <TabsTrigger 
               key={cat} 
               value={cat}
               className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
             >
               {cat}
             </TabsTrigger>
           ))}
         </TabsList>
       </Tabs>
 
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredCourses.map((course, index) => (
           <Card 
             key={course.id}
             className="card-hover animate-fade-in overflow-hidden"
             style={{ animationDelay: `${index * 100}ms` }}
           >
             <div className="h-2 gradient-primary" />
             <CardContent className="p-5">
               <div className="flex items-start justify-between mb-3">
                 <Badge className={platformColors[course.platform] || 'bg-muted'}>
                   {course.platform}
                 </Badge>
                 <div className="flex items-center gap-1 text-sm">
                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                   <span className="font-medium">{course.rating}</span>
                 </div>
               </div>
 
               <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                 {course.title}
               </h3>
 
               <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                 <span className="flex items-center gap-1">
                   <Clock className="w-4 h-4" />
                   {course.duration}
                 </span>
                 <Badge variant="outline" className="text-xs">
                   {course.level}
                 </Badge>
               </div>
 
               <Button variant="outline" size="sm" className="w-full gap-2">
                 View Course
                 <ExternalLink className="w-3 h-3" />
               </Button>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   );
 }