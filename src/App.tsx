import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Assessment from './pages/Assessment';
import ModuleFoundations from './pages/modules/ModuleFoundations';
import ModuleAssays from './pages/modules/ModuleAssays';
import ModuleCytogenetics from './pages/modules/ModuleCytogenetics';
import ModuleMicroarray from './pages/modules/ModuleMicroarray';
import ModuleNGS from './pages/modules/ModuleNGS';
import ModuleInterpretation from './pages/modules/ModuleInterpretation';
import ModuleSomatic from './pages/modules/ModuleSomatic';
import ModuleGermline from './pages/modules/ModuleGermline';
import ModuleValidation from './pages/modules/ModuleValidation';
import ModuleReporting from './pages/modules/ModuleReporting';
import ModuleCases from './pages/modules/ModuleCases';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundations" element={<ModuleFoundations />} />
          <Route path="/assays" element={<ModuleAssays />} />
          <Route path="/cytogenetics" element={<ModuleCytogenetics />} />
          <Route path="/microarray" element={<ModuleMicroarray />} />
          <Route path="/ngs" element={<ModuleNGS />} />
          <Route path="/interpretation" element={<ModuleInterpretation />} />
          <Route path="/somatic" element={<ModuleSomatic />} />
          <Route path="/germline" element={<ModuleGermline />} />
          <Route path="/validation" element={<ModuleValidation />} />
          <Route path="/reporting" element={<ModuleReporting />} />
          <Route path="/cases" element={<ModuleCases />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
