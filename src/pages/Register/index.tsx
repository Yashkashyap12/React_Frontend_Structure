import { useState } from 'react';
import Input from '../../components/common/Input/Input';
import { registerForm } from '../../config/forms/register-form';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import authService from '../../http/services/authService';


const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await authService.register(registerData);
      if (response?.data?.success) {
        toast.success("Registration successful")
        navigate("/login")
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Fill in your details to register.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {registerForm.map((field) => (
              <Input
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={registerData[field.name]}
                onChange={handleChange}
              />
            ))}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register;