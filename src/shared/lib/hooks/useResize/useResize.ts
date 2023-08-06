import React from "react";

export const useResize = () => {
   const [width, setWidth] = React.useState(window.innerWidth);

   React.useEffect(() => {
      const handleResize = (event: UIEvent) => {
         const w = event.target as Window;
         setWidth(w.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [setWidth]);

   return {
      width,
   };
};
