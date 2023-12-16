import { DataProvider } from './contexts/dataContext';
import { ThemeProvider } from './contexts/themeContext';
import FakeUsers from './pages/FakeUsers';

export default function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <FakeUsers />
      </ThemeProvider>
    </DataProvider>
  );
}
