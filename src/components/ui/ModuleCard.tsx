 import { ReactNode } from 'react';
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 import { cn } from '@/lib/utils';
 import { LucideIcon } from 'lucide-react';
 
 interface ModuleCardProps {
   title: string;
   description: string;
   icon: LucideIcon;
   onClick?: () => void;
   variant?: 'default' | 'primary' | 'secondary' | 'accent';
   className?: string;
   children?: ReactNode;
   stats?: { label: string; value: string }[];
 }
 
 const variantStyles = {
   default: 'bg-card hover:shadow-lg',
   primary: 'bg-primary text-primary-foreground hover:shadow-xl',
   secondary: 'gradient-secondary text-secondary-foreground hover:shadow-xl shadow-glow',
   accent: 'gradient-accent text-accent-foreground hover:shadow-xl',
 };
 
 export function ModuleCard({
   title,
   description,
   icon: Icon,
   onClick,
   variant = 'default',
   className,
   children,
   stats,
 }: ModuleCardProps) {
   return (
     <Card 
       className={cn(
         'cursor-pointer card-hover border-0 overflow-hidden',
         variantStyles[variant],
         className
       )}
       onClick={onClick}
     >
       <CardHeader className="pb-2">
         <div className="flex items-start justify-between">
           <div className={cn(
             "w-12 h-12 rounded-xl flex items-center justify-center",
             variant === 'default' ? 'bg-primary/10' : 'bg-white/20'
           )}>
             <Icon className={cn(
               "w-6 h-6",
               variant === 'default' ? 'text-primary' : 'text-current'
             )} />
           </div>
         </div>
         <CardTitle className="text-lg mt-3">{title}</CardTitle>
         <CardDescription className={cn(
           "text-sm",
           variant !== 'default' && 'text-current/80'
         )}>
           {description}
         </CardDescription>
       </CardHeader>
       {(children || stats) && (
         <CardContent>
           {stats && (
             <div className="flex gap-4 mt-2">
               {stats.map((stat) => (
                 <div key={stat.label}>
                   <p className={cn(
                     "text-2xl font-bold",
                     variant === 'default' ? 'text-foreground' : 'text-current'
                   )}>{stat.value}</p>
                   <p className={cn(
                     "text-xs",
                     variant === 'default' ? 'text-muted-foreground' : 'text-current/70'
                   )}>{stat.label}</p>
                 </div>
               ))}
             </div>
           )}
           {children}
         </CardContent>
       )}
     </Card>
   );
 }