import LoginForm from './task1';
import RegistrationForm from './task2';

function App() {
  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        <LoginForm />
      </fieldset>
      <fieldset>
        <legend>Registration</legend>
        <RegistrationForm />
      </fieldset>
    </div>
  );
}

export default App;
