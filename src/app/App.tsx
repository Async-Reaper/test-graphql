import {Suspense} from "react";
import {ApolloProviderUI, AppRouter} from "@app/providers";
import {Progress} from "antd";
import {BrowserRouter} from "react-router-dom";
import {Container} from "@shared/ui";

function App() {

   return (
      <ApolloProviderUI>
         <BrowserRouter>
            <div className="app">
               <Suspense fallback={<Progress type="circle" />}>
                  <Container>
                     <AppRouter />
                  </Container>
               </Suspense>
            </div>
         </BrowserRouter>
      </ApolloProviderUI>
   );
}

export default App;
