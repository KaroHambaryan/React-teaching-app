import { useState } from 'react';
import AddTeacher from './AddTeacher'
import Dashboard from './Dashboard'
import './App.css';

const App = () => {
	const [teachers, setTeachers] = useState([]);
	const skills = ["HTML", "CSS", "JS", "REACT", "ANGULAR", "NODE", "C#", "OOP",
		"WPF", "SQL", "Algorithms", "PYTHON", "DJANGO", "JAVA"];

  return (
    <div>
      <h1 className="heading">Teaching App!</h1>

      <div id="main">
				<AddTeacher data={ skills } />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
