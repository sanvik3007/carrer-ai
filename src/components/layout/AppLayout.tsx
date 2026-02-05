 import { Outlet, Navigate } from 'react-router-dom';
 import { SidebarProvider } from '@/components/ui/sidebar';
 import { AppSidebar } from './AppSidebar';
 import { useUser } from '@/contexts/UserContext';
 
 export function AppLayout() {
   const { isAuthenticated } = useUser();
 
   if (!isAuthenticated) {
     return <Navigate to="/" replace />;
   }
 
   return (
     <SidebarProvider>
       <div className="min-h-screen flex w-full bg-background">
         <AppSidebar />
         <main className="flex-1 overflow-auto">
           <Outlet />
         </main>
       </div>
     </SidebarProvider>
   );
 }