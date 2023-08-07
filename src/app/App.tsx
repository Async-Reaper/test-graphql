import {Suspense} from "react";
import {ApolloProviderUI, AppRouter, ContextProvider} from "@app/providers";
import {BrowserRouter} from "react-router-dom";
import {Container, Loader} from "@shared/ui";
import {Header} from "@widgets/Header";

function App() {

   return (
      <ApolloProviderUI>
         <ContextProvider>
            <BrowserRouter>
               <div className="app">
                  <Suspense fallback={<Loader />}>
                     <Container>
                        <Header />
                        <AppRouter />
                     </Container>
                  </Suspense>
               </div>
            </BrowserRouter>
         </ContextProvider>
      </ApolloProviderUI>
   );
}

export default App;
