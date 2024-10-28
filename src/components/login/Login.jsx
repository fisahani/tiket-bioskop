import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Panggil useNavigate di awal komponen

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Validasi sederhana(bisa disesuaikan dengan kebutuhan)
        //  if (email === 'admin@example.com' && password === 'password123') {
        //     navigate = useNavigate('/');
        //     alert('Login berhasil!');
        // } else {
        //     setError('Email atau password salah');
        // } 

        try {
            // Misalnya, jika Anda menggunakan API untuk login
            const response = await fetch('http://localhost:5174/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Mengirim email dan password
            });

            // Jika server merespons dengan status error
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Login gagal'); // Menampilkan pesan error
                return;
            }

            // Jika login berhasil
            const data = await response.json();
            navigate('/'); // Navigasi ke halaman beranda
        } catch (error) {
            setError('Terjadi kesalahan: ' + error.message); // Menangani kesalahan jaringan atau lainnya
        }
    };

    return (
        <div className="bg-black flex items-center justify-center">
            <div className="w-full h-full bg-light bg-black flex items-center justify-center mt-24 mb-24">
                <div className="bg-202020 bg-opacity-900 shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <h6 className='text-right'>Forgot Your Password?</h6>
                        {error && <p className="error">{error}</p>}
                        <br />
                        <div className="mb-4">
                            <button
                                className="bg-yellow-500 hover:bg-yellow-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                            <br />
                            <Link to="/signup">
                                <h6 className='text-left'>Don't have an account? Sign Up</h6>
                            </Link>
                        </div>
                    </form>
                    <button onClick={() => navigate('/')}>Go to Home</button>

                </div>
            </div>
        </div>
    );
};

export default Login;
