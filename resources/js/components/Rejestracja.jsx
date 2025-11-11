import React, { useState } from "react";
import axios from "axios";
export default function Rejestracja({onSwitch}) {
    const [form, setForm] = useState({imie: "", nazwisko: "", email: "", haslo: "", wiek: "" });
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        setForm({... form,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(null);

        const tokenMeta = document.querySelector('meta[name="csrf-token"]');
        const csrf = tokenMeta ? tokenMeta.getAttribute('content') : null;

        try{
            const res = await axios.post('/rej', form, {
                headers: {
                    ...(csrf ? {'X-CSRF-TOKEN': csrf} : {}),
                },
            });

            if(res.data?.redirect){
                window.location.href = res.data.redirect;
            } else {
                window.location.href = '/main';
            }
        } catch (err){
            console.error(err);
            if(err.respones?.data?.message){
                setError(err.response.data.message);
            } else {
                setError("Wystąpił błąd podczas rejestracji. Spróbuj ponownie.");
            }
        }
    };

    return (
        <section>
            {/*<section className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md" id="rejestracja-box">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Rejestracja</h2>
                <form 
                onSubmit={handleSubmit}
                className="space-y-5"
                >
                    <section>
                    <label 
                    htmlFor="imie"
                    className="block text-sm font-medium text-gray-600">Imie</label>
                    <input 
                    type="text" 
                    id="imie"
                    name="imie"
                    value={form.imie}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
                    placeholder="Sławomir"
                    required
                    />
                    </section>
                    <section>
                        <label 
                        htmlFor="nazwisko"
                        className="block text-sm font-medium text-gray-600">Nazwisko</label>
                        <input 
                        type="text"
                        id="nazwisko"
                        name="nazwisko"
                        value={form.nazwisko}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
                        placeholder="Litwin"
                        required />
                    </section>
                    <section>
                        <label 
                        htmlFor="wiek"
                        className="block text-sm font-medium text-gray-600"
                        >Wiek</label>
                        <input 
                        type="number"
                        id="wiek"
                        name="wiek"
                        value={form.wiek}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
                        placeholder="41"
                        required />
                    </section>
                    <section>
                        <label 
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600"
                        >Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-center"
                        placeholder="litwinbook@lb.info.pl"
                        required />
                    </section>
                    <section>
                        <label 
                        htmlFor="haslo"
                        className="block text-sm font-medium text-gray-600">Haslo</label>
                        <input 
                        type="password"
                        id="haslo"
                        name="haslo"
                        value={form.haslo}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none  text-center"
                        placeholder="••••••••"
                        required/>
                    </section>
                    <button
                    type="submit"

                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all">
                        Zajerestuj się
                    </button>
                    {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                </form>

            </section>*/}

            <section className='login-box'>
                <section className='radio-logo'>

                </section>
                <h1>RADIO ŁYSY GULASZ</h1>
                <p>Zajerestuj się, by twoje uszy dostały orgazmu</p>
                <form 
                onSubmit={handleSubmit}
                >
                    <input 
                    type="text"
                    id='imie'
                    name='imie'
                    value={form.imie}
                    onChange={handleChange}
                    placeholder='Sławomir'
                    className="text-center"
                    required 
                    />
                    <input 
                    type="text"
                    id='nazwisko'
                    name='nazwisko'
                    value={form.nazwisko}
                    onChange={handleChange}
                    placeholder='Litwin'
                    className="text-center"
                    required 
                    />
                    <input 
                    type="number"
                    id='wiek'
                    name='wiek'
                    value={form.wiek}
                    onChange={handleChange}
                    placeholder='41'
                    className="text-center"
                    required 
                    />
                    <input 
                    type="text"
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='litwinbook@lb.info.pl'
                    className="text-center"
                    required 
                    />
                    <input
                    type='password'
                    id='haslo'
                    name='haslo'
                    value={form.haslo}
                    onChange={handleChange}
                    placeholder='••••••••'
                    className="text-center"
                    required
                    />
                    
                    <button 
                    type='submit'>Zarejestruj się
                    </button>
                    <p>Masz już konto?{" "}
                        {error && {error}}
                        <button
                        id='zmiana'
                        onClick={onSwitch}
                        >Zaloguj się</button>
                        </p>
                </form>
                
            </section>

            <section className='fale'>
                <section className="bar"></section>
                <section className="bar"></section>
                <section className="bar"></section>
                <section className="bar"></section>
                <section className="bar"></section>
            </section>
        </section>
    );
}