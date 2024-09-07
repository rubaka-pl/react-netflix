import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [rememberLogin, setRememberLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, logIn } = UserAuth();
    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await logIn(email, password)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/PL-en-20240903-TRIFECTA-perspective_b0ab9ceb-7fef-4efb-911b-e02ad0786bd4_large.jpg" alt="background" />

                <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

                <div className='fixed w-full px-4 py-24 z-20'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-lg'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className=' font-nsans-bold text-3xl'>Login</h1>

                            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4' action="">

                                <input
                                    className='p-3 my-2 bg-gray-700 rounded'
                                    type="email"
                                    placeholder='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    className='p-3 my-2 bg-gray-700 rounded'
                                    type="password"
                                    placeholder='password'
                                    autoComplete='current-password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                                <button
                                    className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>
                                    Login
                                </button>
                                <div className='flex justify-between items-center text-gray-600'>
                                    <p>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                className="mr-2"
                                                type="checkbox"
                                                name="remember"
                                                id="remember"
                                                checked={rememberLogin}
                                                onChange={(e) => setRememberLogin(!rememberLogin)}
                                            />
                                            Remember me
                                        </label>
                                    </p>
                                    <p>Need help?</p>
                                </div>
                            </form>
                            <p className='my-4'>
                                <span className='text-gray-600 mr-2'>New to Netflix?</span>
                                <Link to='/signup'>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login