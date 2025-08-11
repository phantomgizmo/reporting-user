import { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      {/* Add any providers here, like ThemeProvider, AuthProvider, etc. */}
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
}
