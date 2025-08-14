import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Assuming you are using lucide-react
import { AuthContext } from '../../Context/UserContext';
import toast from 'react-hot-toast';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    const { singInUser } = useContext(AuthContext)

    const createUser = data => {
        singInUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('LogIn Successfully Done!')
                reset()

            })
            .catch((error) => {
                console.log(error);

            })
    };

    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSubmit(createUser)} className="card-body">
                    <fieldset>


                        <label className="label mt-3">Email</label>
                        <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}

                        <label className="label mt-3">Password</label>
                        <div className="relative mb-3">
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 6,
                                        message: 'Your have 6 digite password'
                                    },
                                    pattern: {
                                        value: /(?=.*?[#?!@$%^&*-])(?=.*?[0-9])(?=.*?[A-Z])/,
                                        message: 'You have must be catital, upercase,number and spcal carater'
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                className="input "
                                placeholder="Password"
                            />
                            <span
                                className="absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}

                        <div className='flex justify-between my-3'>
                            <Link to={'/singup'} className="link link-hover">Already have an account? Login here</Link>
                        </div>

                        <button type="submit" className="btn bg-primary rounded-2xl mt-4 w-full">Sign Up</button>

                        <div className='flex justify-between items-center gap-4 mt-4'>
                            <button type="button" className="btn bg-primary rounded-2xl">Continue with Google</button>
                            <button type="button" className="btn bg-primary rounded-2xl">Continue with GitHub</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
