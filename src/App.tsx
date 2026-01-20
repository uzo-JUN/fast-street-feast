import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MenuPage from "./pages/Menupage"; 
import Aboutpage from "./pages/Aboutpage";
import Franchisepage from "./pages/Franchise";
import NotFound from "./pages/NotFound";
import FranchisePage from "./pages/Franchise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD YOUR MENU PAGE ROUTE HERE */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          
          {/* If you want MenuPage as homepage instead of Index */}
          {/* <Route path="/" element={<MenuPage />} /> */}
          {/* <Route path="/home" element={<Index />} /> */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;