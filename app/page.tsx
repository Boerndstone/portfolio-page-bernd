import { PortfolioComponent } from "@/components/portfolio";
import { ToastProvider } from "@/components/ui/toast";

export default function Home() {
  return (
    <>
      {" "}
      <PortfolioComponent />
      <ToastProvider />
    </>
  );
}
