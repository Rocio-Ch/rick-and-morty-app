import { useState, useEffect } from "react";

export default function useShowComponents() {
    
    const [showComponents, setShowComponents] = useState(false);
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowComponents(true);
      }, 3000);
    
      return () => clearTimeout(timeout);
    }, []);

    return showComponents
}