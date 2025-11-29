import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { LogoShowcase } from "./components/SymmFiLogo";

export default function App() {
  const [view, setView] = useState<
    "landing" | "dashboard" | "logos"
  >("landing");

  // Uncomment the line below to view logo options
//return <LogoShowcase />;

  return (
    <div className="min-h-screen">
      {view === "landing" ? (
        <LandingPage
          onViewDashboard={() => setView("dashboard")}
        />
      ) : (
        <Dashboard onBackToLanding={() => setView("landing")} />
      )}
    </div>
  );
}