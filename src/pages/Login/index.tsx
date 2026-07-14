import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/common/Input/Input";
import authService from "../../http/services/authService";
import { setToken } from "../../utils/helpers";

import {
  loginSchema,
  type LoginFormData,
} from "../../schemas/authSchema";


const Login = () => {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });



  const onSubmit = async (data: LoginFormData) => {

    try {

      const response = await authService.login(data);


      if (response?.data?.success) {

        setToken(response.data.token);

        toast.success("Login successful");

        navigate("/dashboard");

      }


    } catch (error: any) {

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong"
      );

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">


        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>


        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to your account.
        </p>



        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >


          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
            error={errors.email?.message}
            {...register("email")}
          />



          <Input
            label="Password"
            type="password"
            required
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />



          <button
            type="submit"
            disabled={isSubmitting}
            className="
            w-full 
            bg-indigo-600 
            hover:bg-indigo-700 
            text-white 
            font-semibold 
            py-3 
            rounded-lg 
            transition 
            disabled:opacity-50
            "
          >

            {
              isSubmitting
                ? "Logging in..."
                : "Login"
            }

          </button>


        </form>



        <p className="text-center text-sm text-gray-500 mt-6">

          Don't have an account?{" "}

          <Link
            to="/"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>

        </p>


      </div>

    </div>

  );
};


export default Login;