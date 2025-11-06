import React, { useState } from "react";
export default function Rejestracja() {
    const [form, setForm] = useState({imie: "", nazwisko: "", email: "", haslo: "", wiek: "" });

    const handleChange = (e) => {
        setForm({... form,[e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //api
    };

    return (
        <section>
            <section className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md" id="rejestracja-box">
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
                </form>

            </section>
        </section>
    );
}