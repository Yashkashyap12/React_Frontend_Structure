  import Input from '../../components/common/Input/Input';
  import { registerForm } from '../../config/forms/register-form';
  import { Link } from 'react-router-dom';
  import { useNavigate } from "react-router-dom";
  import { toast } from 'sonner';
  import authService from '../../http/services/authService';
  import { useForm } from 'react-hook-form';
  import { zodResolver } from "@hookform/resolvers/zod";
  import { registerSchema } from '../../schemas/authSchema';
  import type { RegisterFormData } from '../../schemas/authSchema';


  const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) })

    const onSubmit = async (data: RegisterFormData) => {
      try {
        const response = await authService.register(data);
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {registerForm.map((field) => (
                <Input
                  key={field.name}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  error={errors[field.name]?.message}
                  {...register(field.name)}
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