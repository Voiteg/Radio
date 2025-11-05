import React, { useState } from 'react';

export default function Login() {
    const [form, setForm] = useState({email: '', password: ''});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //api
    };

    return (
        <section>
            <h1>huj</h1>
           {/*  <section className='bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md'>
                <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Logowanie</h2>
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <section>
                        <label htmlFor="email" className='block text=sm font-medium text-gray-600 text-center'>Email</label>
                        <input 
                        type="text"
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                        placeholder='litwinbook@lb.info.pl'
                        required 
                        />
                    </section>
                    <section>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-600 text-center'>Hasło</label>
                        <input 
                        type="password"
                        id='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        className='w-full mt-1 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none'
                        placeholder='••••••••'
                        required
                        />
                    </section>
                        <button 
                        type='submit'
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all'
                        >
                        Zaloguj się
                        </button>
                        <p className='text-sm text-center text-gray-500 mt-4'>Nie masz jeszcze konta?{" "}
                        <a href="rejestracja" className='text-blue-600 hover:underline'>Zarejestruj się</a>
                        </p>
                </form>
            </section>




            <section className='login-box'>
                <section className='radio-logo'>

                </section>
                <h1>Radio Łysy Gulasz</h1>
                <p>Zaloguj się, by twoje uszy dostały orgazmu</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='litwinbook@lb.info.pl'
                    required 
                    />
                    <input
                    type='password'
                    id='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                    placeholder='••••••••'
                    required
                    />
                    <button type='submit'>Zaloguj się</button>
                    <p className=''>Nie masz jeszcze konta?{" "}
                        <a href="rejestracja" className=''>Zarejestruj się</a>
                        </p>
                </form>
                
            </section>

            <section className='fale'>
                <section class="bar"></section>
                <section class="bar"></section>
                <section class="bar"></section>
                <section class="bar"></section>
                <section class="bar"></section>
            </section>*/}


        </section>
        



        
    );
}