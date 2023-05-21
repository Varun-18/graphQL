import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home } from "./components/Home";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:5000/graphlql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
