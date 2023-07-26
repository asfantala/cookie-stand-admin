export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }
  
    return (
      <form className="w-8/12 p-2 mx-auto my-4 bg-emerald-300 rounded-lg" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col" autoComplete='off'>
          <label htmlFor="username" className="mt-2 text-center">USERNAME</label>
          <input name="username" className="mt-2 p-2" placeholder="User Name"/>
          <label htmlFor="password" className="mt-2 text-center">PASSWORD</label>
          <input type="password" name="password" className="p-2 mt-2 mb-5" placeholder="password"/>
          <button className="pt-5 pb-5 pl-20 pr-20 mt-2 font-bold bg-emerald-500 rounded-lg">SIGN IN</button>
        </fieldset>
      </form>
    );
    
  }