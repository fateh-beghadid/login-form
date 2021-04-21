import './App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton, GithubLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
function App() {
  return (
   
    <form className="login-form">
     <h1>
       <span class='font-weight-bold '>GoMyCode</span>.com</h1> 
       <h2 className='text-center'>Welcome</h2>
       <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password"
        />
      </FormGroup>
      <button className='btn-lg btn-dark btn-block'>Log in</button>
      <div className='text-center pt-3'>
        Or Continue with your social account
      </div>
      <FacebookLoginButton className='mt-3 mb-3'/>
      <GoogleLoginButton className='mt-3 mb3'/>
      <GithubLoginButton className='mt-3 mb3'/> 
      <div className='text-center'>
        <a href="/sign-up">Sign Up</a>
        <span className='p-3'>|</span><a href="/Forget-password">Forget Password</a>

      </div>
    </form>
  );
}
 
export default App;
