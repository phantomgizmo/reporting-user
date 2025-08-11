import AppProvider from './providers';
import AppRouter from './routes';

import { Toaster } from 'sonner';

function App() {
  return (
    <AppProvider>
      <AppRouter />
      <Toaster
        position="top-right"
        richColors
        toastOptions={{ className: 'shadow-sm' }}
      />
    </AppProvider>
  );
}

export default App;
