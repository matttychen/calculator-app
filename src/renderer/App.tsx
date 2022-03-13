import Calculator from 'shared/components/calculator';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GlobalStyleFonts from '../shared/utils/fonts';

export default function App() {
  return (
    <>
      <GlobalStyleFonts />
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}
