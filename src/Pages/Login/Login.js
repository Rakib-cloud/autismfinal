import axios from 'axios';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        // user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    console.log(user);
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
 

    console.log("🚀 ~ file: Login.js ~ line 47 ~ useEffect ~ user",user);
    
    useEffect(() => {

        const saveData = (method, data) => {

            fetch('http://localhost:5000/users', {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("🚀 ~ file: Login.js ~ line 41 ~ useEffect ~ data", data);
                    navigate(from, { replace: true });
    
                });
        };
         
        if (user) {
             console.log("🚀 ~ file: Login.js ~ line 47 ~ useEffect ~ user",user);
            axios.get(`http://localhost:5000/users/${user.email}`)
                .then(res => {
                    console.log(res);
                    if (res.data.email === user.email) return;
                    const data = {
                        email: user.email,
                        courses: []
                    };
                    saveData('PUT', data);
                });

           

        }

        if (gUser) {
            console.log("🚀 ~ file: Login.js ~ line 54 ~ useEffect ~ gUser", gUser.user.email);


            axios.get(`http://localhost:5000/users/${gUser.user.email}`)
                .then(res => {

                    if (res.data.email === gUser.user.email) return;

                    const data = {
                        email: gUser.user.email,
                        courses: []
                    };
                    saveData('PUT', data);
                });

        }

    }, [user, gUser, navigate, from]);

   

    //work for email pass ueser 

    

    if (loading || gLoading) {
        return <Loading></Loading>;
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>;
    }

    const onSubmit = data => {
        
        
         
        // console.log(email);
        signInWithEmailAndPassword(data.email, data.password);
       
        navigate('/allcourse');

    };

    return (
        <div>

            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                   
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            {signInError}
                            <input className='btn w-full max-w-xs text-white' type="submit"  value="Login" >
                              

                            </input>
                        </form>
                        <p><small>New to Autism care <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline"
                        >Continue with Google</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Login;