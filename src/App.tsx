import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QrScannerPage from "./pages/QrScannerPage";
import WorksheetPage from "./pages/WorksheetPage";
import AIChatPage from "./pages/AIChatPage";
import QRScannerButton from "./components/QRScannerButton";
import FullscreenButton from "./components/FullscreenButton";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="h-full flex flex-col">
          <Routes>
            <Route path="/" element={<QrScannerPage />} />
            <Route path="/worksheet/:id/:n" element={<WorksheetPage />} />
            <Route path="/chat/:worksheetId/:pageNumber" element={<AIChatPage />} />
            <Route path="/home" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FullscreenButton />
          <Routes>
            <Route path="/" element={null} />
            <Route path="*" element={<QRScannerButton />} />
          </Routes>
          <PWAInstallPrompt />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;