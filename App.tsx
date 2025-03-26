import { StatusBar } from 'expo-status-bar';

import { ScreenContent } from 'components/ScreenContent';

import './global.css';

const App: React.FC = () => {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
