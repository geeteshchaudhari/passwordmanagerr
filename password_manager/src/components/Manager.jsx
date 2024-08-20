import React, { useEffect, useRef, useState } from 'react';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const [showPassword, setShowPassword] = useState(false); // New state to manage password visibility
    const passwordRef = useRef(); // Ref for the password input

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const savePassword = () => {
        const updatedPasswordArray = [...passwordArray, form];
        setPasswordArray(updatedPasswordArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
        console.log("Saving password:", passwordArray);
    };

    return (
        <div className="absolute top-16 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="mx-auto bg-purple-50 p-4 mycontainer w-3/4">
                <h1 className="text-center">
                    <div>
                        <span className="logo font-bold text-green-600">&lt; PRO</span>
                        <span>tected &gt;</span>
                    </div>
                </h1>
                <p className="text-center font-bold">TIP: Set an alphanumeric password</p>

                <div className="text-black flex flex-col space-y-4 items-center">
                    <input
                        value={form.site}
                        type="text"
                        name="site"
                        onChange={handleChange}
                        placeholder="   Enter URL"
                        className="full rounded-full border w-full"
                        style={{ textIndent: "1rem" }}
                    />
                    <div className="flex space-x-2 w-full">
                        <input
                            value={form.username}
                            type="text"
                            name="username"
                            onChange={handleChange}
                            placeholder="   Username"
                            className="full rounded-full border w-full"
                            style={{ textIndent: "1rem" }}
                        />
                        <div className="relative w-full">
                            <input
                                value={form.password}
                                onChange={handleChange}
                                ref={passwordRef}
                                type={showPassword ? "text" : "password"} // Toggles between "password" and "text"
                                placeholder="   Password"
                                name="password"
                                className="full rounded-full border w-full pr-10"
                                style={{ textIndent: "1rem" }}
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <img
                                    className="p-1"
                                    width={26}
                                    src={showPassword ? "/icons/hidden.png" : "/icons/show.png"}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        className="flex justify-center items-center bg-green-600 rounded-full border w-1/4 hover:bg-green-400"
                        onClick={savePassword}
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: 30, height: 30 }}
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>

                <div className="passwords">
                    <h1 className="py-5">YOUR PASSWORDS</h1>
                    {passwordArray.length === 0 ? (
                        <h2 className="text-center">No passwords saved</h2>
                    ) : (
                        <table className="table-auto bg-purple-800 w-full text-center">
                            <thead>
                                <tr className="text-white">
                                    <th>URL</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody className="bg-purple-200">
                                {passwordArray.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border-2 border-white p-2">{item.site}</td>
                                        <td className="border-2 border-white p-2">{item.username}</td>
                                        <td className="border-2 border-white p-2">{item.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Manager;
