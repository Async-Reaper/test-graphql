import {ReactNode} from "react";
import {PopupContextProvider} from "./PopupContext";

interface Props {
   children: ReactNode
}

export const ContextProvider = ({children}: Props) => {
   return (
      <PopupContextProvider>
         {children}
      </PopupContextProvider>
   );
};
