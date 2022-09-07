import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercises from './components/EditExercises';
import CreateExercises from './components/CreateExercises';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<ExercisesList />} />
        <Route path='/edit/:id' exact element={<EditExercises />} />
        <Route path='/create' exact element={<CreateExercises />} />
        <Route path='/user' exact element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
