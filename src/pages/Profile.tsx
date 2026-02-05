 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
 import { Badge } from '@/components/ui/badge';
 import { useUser } from '@/contexts/UserContext';
 import { departments, institutions, skillOptions } from '@/lib/mockData';
 import { User, GraduationCap, Building, Calendar, Wrench, Save, X } from 'lucide-react';
 import { toast } from 'sonner';
 
 export default function Profile() {
   const { user, setUser } = useUser();
   const navigate = useNavigate();
   
   const [name, setName] = useState(user?.name || '');
   const [department, setDepartment] = useState(user?.department || '');
   const [institution, setInstitution] = useState(user?.institution || '');
   const [year, setYear] = useState(user?.year || '');
   const [selectedSkills, setSelectedSkills] = useState<string[]>(user?.skills || []);
 
   const toggleSkill = (skill: string) => {
     setSelectedSkills(prev => 
       prev.includes(skill) 
         ? prev.filter(s => s !== skill)
         : [...prev, skill]
     );
   };
 
   const handleSave = () => {
     if (user) {
       setUser({
         ...user,
         name,
         department,
         institution,
         year,
         skills: selectedSkills,
       });
       toast.success('Profile updated successfully!');
       navigate('/dashboard');
     }
   };
 
   return (
     <div className="p-6 lg:p-8 max-w-4xl mx-auto">
       <div className="mb-8">
         <h1 className="text-2xl font-bold text-foreground mb-2">Your Profile</h1>
         <p className="text-muted-foreground">
           Complete your profile to get personalized career recommendations
         </p>
       </div>
 
       <div className="grid gap-6">
         {/* Basic Info */}
         <Card>
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-lg">
               <User className="w-5 h-5 text-primary" />
               Basic Information
             </CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="name">Full Name</Label>
                 <Input
                   id="name"
                   placeholder="Enter your full name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                 />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input
                   id="email"
                   type="email"
                   value={user?.email || ''}
                   disabled
                   className="bg-muted"
                 />
               </div>
             </div>
           </CardContent>
         </Card>
 
         {/* Academic Info */}
         <Card>
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-lg">
               <GraduationCap className="w-5 h-5 text-primary" />
               Academic Details
             </CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="department">Department</Label>
                 <Select value={department} onValueChange={setDepartment}>
                   <SelectTrigger>
                     <SelectValue placeholder="Select department" />
                   </SelectTrigger>
                   <SelectContent>
                     {departments.map((dept) => (
                       <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               </div>
               <div className="space-y-2">
                 <Label htmlFor="institution">Institution</Label>
                 <Select value={institution} onValueChange={setInstitution}>
                   <SelectTrigger>
                     <SelectValue placeholder="Select institution" />
                   </SelectTrigger>
                   <SelectContent>
                     {institutions.map((inst) => (
                       <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               </div>
             </div>
             <div className="space-y-2">
               <Label htmlFor="year">Year of Study</Label>
               <Select value={year} onValueChange={setYear}>
                 <SelectTrigger className="md:w-1/2">
                   <SelectValue placeholder="Select year" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="1">1st Year</SelectItem>
                   <SelectItem value="2">2nd Year</SelectItem>
                   <SelectItem value="3">3rd Year</SelectItem>
                   <SelectItem value="4">4th Year</SelectItem>
                   <SelectItem value="pg">Post Graduate</SelectItem>
                 </SelectContent>
               </Select>
             </div>
           </CardContent>
         </Card>
 
         {/* Skills */}
         <Card>
           <CardHeader>
             <CardTitle className="flex items-center gap-2 text-lg">
               <Wrench className="w-5 h-5 text-primary" />
               Skills & Interests
             </CardTitle>
             <CardDescription>
               Select the skills you have or want to develop
             </CardDescription>
           </CardHeader>
           <CardContent>
             <div className="flex flex-wrap gap-2">
               {skillOptions.map((skill) => (
                 <Badge
                   key={skill}
                   variant={selectedSkills.includes(skill) ? 'default' : 'outline'}
                   className="cursor-pointer transition-all hover:scale-105"
                   onClick={() => toggleSkill(skill)}
                 >
                   {skill}
                   {selectedSkills.includes(skill) && (
                     <X className="w-3 h-3 ml-1" />
                   )}
                 </Badge>
               ))}
             </div>
           </CardContent>
         </Card>
 
         {/* Save Button */}
         <div className="flex justify-end gap-4">
           <Button variant="outline" onClick={() => navigate('/dashboard')}>
             Cancel
           </Button>
           <Button onClick={handleSave} className="gap-2">
             <Save className="w-4 h-4" />
             Save Profile
           </Button>
         </div>
       </div>
     </div>
   );
 }