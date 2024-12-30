import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu
          verbessern. Durch die Nutzung unserer Website stimmen Sie der
          Verwendung von Cookies zu.
        </p>
        <Button variant="outline" onClick={handleAccept}>
          <span className="text-black">Akzeptieren</span>
        </Button>
      </div>
    </div>
  );
};

export default CookieDisclaimer;
