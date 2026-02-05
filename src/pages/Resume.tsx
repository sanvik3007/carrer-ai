 import { useState } from 'react';
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 import { Button } from '@/components/ui/button';
 import { useUser } from '@/contexts/UserContext';
 import { FileText, Download, User, GraduationCap, Wrench, Briefcase, Award } from 'lucide-react';
 import { toast } from 'sonner';
 
 export default function Resume() {
   const { user } = useUser();
   const [isGenerating, setIsGenerating] = useState(false);
 
   const handleDownload = () => {
     setIsGenerating(true);
     setTimeout(() => {
       setIsGenerating(false);
       toast.success('Resume generated! (Demo mode - no actual download)');
     }, 1500);
   };
 
   return (
     <div className="p-6 lg:p-8 max-w-4xl mx-auto">
       <div className="mb-8 flex items-center justify-between">
         <div>
           <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
             <FileText className="w-6 h-6 text-primary" />
             Resume Builder
           </h1>
           <p className="text-muted-foreground">
             Generate a professional resume from your profile and activities
           </p>
         </div>
         <Button onClick={handleDownload} disabled={isGenerating} className="gap-2">
           <Download className="w-4 h-4" />
           {isGenerating ? 'Generating...' : 'Download PDF'}
         </Button>
       </div>
 
       {/* Resume Preview */}
       <Card className="shadow-xl">
         <CardContent className="p-8 bg-white">
           {/* Header */}
           <div className="text-center border-b pb-6 mb-6">
             <h2 className="text-3xl font-bold text-foreground mb-2">
               {user?.name || 'Your Name'}
             </h2>
             <p className="text-muted-foreground">
               {user?.email} {user?.phone && `• ${user.phone}`}
             </p>
             <p className="text-sm text-muted-foreground mt-1">
               {user?.department} • {user?.institution}
             </p>
           </div>
 
           {/* Education */}
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
               <GraduationCap className="w-5 h-5 text-primary" />
               Education
             </h3>
             <div className="ml-7">
               <p className="font-medium">{user?.institution || 'Institution Name'}</p>
               <p className="text-muted-foreground">
                 {user?.department || 'Department'} • Year {user?.year || 'N/A'}
               </p>
             </div>
           </div>
 
           {/* Skills */}
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
               <Wrench className="w-5 h-5 text-primary" />
               Technical Skills
             </h3>
             <div className="ml-7 flex flex-wrap gap-2">
               {(user?.skills?.length ? user.skills : ['Python', 'C/C++', 'JavaScript']).map((skill) => (
                 <span 
                   key={skill}
                   className="px-3 py-1 bg-muted rounded-full text-sm"
                 >
                   {skill}
                 </span>
               ))}
             </div>
           </div>
 
           {/* Projects */}
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
               <Briefcase className="w-5 h-5 text-primary" />
               Projects
             </h3>
             <div className="ml-7 space-y-3">
               <div>
                 <p className="font-medium">Smart Home Automation System</p>
                 <p className="text-sm text-muted-foreground">
                   IoT-based home automation with ESP32 and mobile app integration
                 </p>
               </div>
               <div>
                 <p className="font-medium">Weather Monitoring Station</p>
                 <p className="text-sm text-muted-foreground">
                   Real-time weather data collection with cloud dashboard
                 </p>
               </div>
             </div>
           </div>
 
           {/* Certifications */}
           <div>
             <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
               <Award className="w-5 h-5 text-primary" />
               Certifications
             </h3>
             <div className="ml-7 space-y-2">
               <p className="text-sm">• NPTEL: Programming in Python - Elite Certificate</p>
               <p className="text-sm">• Coursera: Deep Learning Specialization</p>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   );
 }