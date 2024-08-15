import React, { useRef, useState } from 'react';

const Manager = () => {
    const Ref = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });

    const showpassword = () => {
        if (Ref.current.src.includes("/icons/show.png")) {
            Ref.current.src = "/icons/hidden.png";
        } else {
            Ref.current.src = "/icons/show.png";
        }
    };

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const savepassword = () => {
        console.log("Saving password:", form);
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
                        onChange={handlechange} 
                        placeholder="   Enter URL" 
                        className="full rounded-full border w-full" 
                        style={{ textIndent: "1rem" }} // Adjust text indent
                    />
                    <div className="flex space-x-2 w-full">
                        <input 
                            value={form.username} 
                            type="text" 
                            name="username" 
                            onChange={handlechange} 
                            placeholder="   Username" 
                            className="full rounded-full border w-full" 
                            style={{ textIndent: "1rem" }} // Adjust text indent
                        />
                        <div className="relative">
                            <input
                                value={form.password}
                                onChange={handlechange}
                                type="password"
                                placeholder="   Password"
                                name="password"
                                className="full rounded-full border w-full pr-10" 
                                style={{ textIndent: "1rem" }} // Adjust text indent
                            />
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={showpassword}>
                                <img ref={Ref} className="p-1" width={26} src="/icons/show.png" alt="view password" />
                            </span>
                        </div>
                    </div>
                    <button className="flex justify-center items-center bg-green-600 rounded-full border w-1/4 hover:bg-green-400" onClick={savepassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            style={{ width: 30, height: 30 }}
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Manager;
