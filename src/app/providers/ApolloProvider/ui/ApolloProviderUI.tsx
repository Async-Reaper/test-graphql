import {FC, ReactNode} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "../config/apollo";

interface Props {
   children: ReactNode;
}

export const ApolloProviderUI: FC<Props> = ({children}) => {
   return (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
   );
};
