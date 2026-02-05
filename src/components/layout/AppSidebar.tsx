 import { 
   Home, 
   User, 
   Compass, 
   Briefcase, 
   BookOpen, 
   Users, 
   Cpu, 
   FileText, 
   Trophy,
   LogOut,
   ChevronLeft,
   ChevronRight,
   Sparkles
 } from 'lucide-react';
 import { NavLink, useLocation } from 'react-router-dom';
 import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarHeader,
   SidebarFooter,
   useSidebar,
 } from '@/components/ui/sidebar';
 import { Button } from '@/components/ui/button';
 import { useUser } from '@/contexts/UserContext';
 import { cn } from '@/lib/utils';
 
 const menuItems = [
   { title: 'Dashboard', url: '/dashboard', icon: Home },
   { title: 'Profile', url: '/profile', icon: User },
   { title: 'Career Analysis', url: '/career', icon: Compass },
   { title: 'Job Roles', url: '/jobs', icon: Briefcase },
   { title: 'Courses', url: '/courses', icon: BookOpen },
   { title: 'Mentors', url: '/mentors', icon: Users },
   { title: 'Project Studio', url: '/projects', icon: Cpu },
   { title: 'Resume', url: '/resume', icon: FileText },
   { title: 'Opportunities', url: '/opportunities', icon: Trophy },
 ];
 
 export function AppSidebar() {
   const { state, toggleSidebar } = useSidebar();
   const location = useLocation();
   const { logout, user } = useUser();
   const collapsed = state === 'collapsed';
 
   return (
     <Sidebar className={cn(
       "border-r border-border bg-card transition-all duration-300",
       collapsed ? "w-16" : "w-64"
     )}>
       <SidebarHeader className="p-4 border-b border-border">
         <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
             <Sparkles className="w-5 h-5 text-primary-foreground" />
           </div>
           {!collapsed && (
             <div className="animate-fade-in">
               <h1 className="font-bold text-foreground text-sm">Career AI</h1>
               <p className="text-xs text-muted-foreground">Intelligence Platform</p>
             </div>
           )}
         </div>
       </SidebarHeader>
 
       <SidebarContent className="px-2 py-4">
         <SidebarGroup>
           <SidebarGroupContent>
             <SidebarMenu>
               {menuItems.map((item) => {
                 const isActive = location.pathname === item.url;
                 return (
                   <SidebarMenuItem key={item.title}>
                     <SidebarMenuButton asChild>
                       <NavLink 
                         to={item.url}
                         className={cn(
                           "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                           isActive 
                             ? "bg-primary text-primary-foreground shadow-md" 
                             : "hover:bg-muted text-muted-foreground hover:text-foreground"
                         )}
                       >
                         <item.icon className="w-5 h-5 flex-shrink-0" />
                         {!collapsed && (
                           <span className="text-sm font-medium">{item.title}</span>
                         )}
                       </NavLink>
                     </SidebarMenuButton>
                   </SidebarMenuItem>
                 );
               })}
             </SidebarMenu>
           </SidebarGroupContent>
         </SidebarGroup>
       </SidebarContent>
 
       <SidebarFooter className="p-4 border-t border-border">
         {!collapsed && user && (
           <div className="mb-3 p-3 rounded-lg bg-muted/50">
             <p className="text-sm font-medium text-foreground truncate">
               {user.name || 'Welcome!'}
             </p>
             <p className="text-xs text-muted-foreground truncate">
               {user.email}
             </p>
           </div>
         )}
         <div className="flex items-center gap-2">
           <Button 
             variant="ghost" 
             size="icon"
             onClick={toggleSidebar}
             className="flex-shrink-0"
           >
             {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
           </Button>
           {!collapsed && (
             <Button 
               variant="ghost" 
               className="flex-1 justify-start gap-2 text-muted-foreground hover:text-destructive"
               onClick={logout}
             >
               <LogOut className="w-4 h-4" />
               Logout
             </Button>
           )}
         </div>
       </SidebarFooter>
     </Sidebar>
   );
 }