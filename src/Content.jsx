import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  return (
    <div>
      <h1>Nutri-Calc!</h1>
      <h2>The Nutritional Calculator</h2>
      <Signup />
      <Login />
    </div>
  );
}
