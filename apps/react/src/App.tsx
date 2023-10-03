import { QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-5xl">Vite + React</h1>
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
