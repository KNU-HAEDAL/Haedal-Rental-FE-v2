import { ApplicationProvider } from './app/providers';
import { Routes } from './app/routes';
import { Toaster } from './shared';

function App() {
  return (
    <ApplicationProvider>
      <Routes />
      <Toaster />
    </ApplicationProvider>
  );
}

export default App;
