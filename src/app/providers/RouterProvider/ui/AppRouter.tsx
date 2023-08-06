import React from "react";
import {Route, Routes, RouteProps} from "react-router-dom";
import {routeConfig} from "@shared/config/routeConfig";

const Component = () => {
   const renderWithWrapper = React.useCallback((route: RouteProps) => {

      return (
         <Route
            key={route.path}
            path={route.path}
            element={route.element}
         />
      );
   }, []);

   return (
      <Routes>
         {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
   );
};

export const AppRouter = React.memo(Component);
