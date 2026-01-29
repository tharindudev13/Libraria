import { Mail, Lock, LogIn, VerifiedIcon } from 'lucide-react';
import logo from '../assets/logo-ve-rm.png'; // Path to your horizontal logo
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';
import {  useState } from 'react';
import { Alert } from '../components/Alert';

const Login = () => {

    const validateLogin = async (email, password) => {
        try {
            const response = await fetch(`http://localhost:8090/api/v1/users/loginreq?id=${email}&pwd=${password}`);
            const result = await response.json();
            if(result === true){
              // Update Redux state
              dispatch(login(email));
              navigate('/profile');
            }else{
              setError("Invalid Credentials. Please Try Again.")
              setTimeout(() => setError(''), 5000)
            }
        } catch (error) {
            console.error("Error validating login:", error);
            return false;
        }
    };

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      {/* Card Container */}
      <div className="w-full max-w-md bg-[#1E293B] rounded-2xl shadow-xl border border-[#334155] p-8 transition-all hover:shadow-sky-500/10">
        
        {/* Header with Logo */}
        <div className="text-center mb-10">
          <img src={logo} alt="Libraria" className="h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#F8FAFC]">Welcome Back</h2>
          <p className="text-[#94A3B8] text-sm mt-2">Please enter your details to sign in</p>
        </div>

          {/* Email Field */}
          <Alert message={error} />
          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-2 px-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                placeholder="name@email.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-2 px-1 text-left">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748B]">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            {/* <div className="text-right mt-2">
              <a href="#" className="text-xs text-[#38BDF8] hover:underline">Forgot password?</a>
            </div> */}
          </div>

          <button 
            onClick={() => {
                validateLogin(email, password)
}}
            className="cursor-pointer mt-5 w-full flex items-center justify-center gap-2 bg-[#38BDF8] hover:bg-[#7dd3fc] text-[#0F172A] font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-sky-500/20"
          >
            <LogIn size={20} />
            Sign In
          </button>

       
      </div>
    </div>
  );
};

export default Login;