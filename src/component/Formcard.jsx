
function Formcard() {
    return (
        <>
            <div className=" mt-30 p-8 w-1/3 mx-auto bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-300 mb-20">
                <form onSubmit={handleSubmit} className="border-grey-100 p-2 rounded h-auto ">
                    <label htmlFor="name" className="text-gray-600 mb-2">Enter your name</label>
                    <div className="my-2 p-2 w-full h-auto border border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-gray-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none   ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="email" className="text-gray-600 mb-2">Enter your email</label>
                    <div className="my-2 p-2 w-full h-auto border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-gray-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none  ">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="password" className="text-gray-600 mb-2">Enter your password</label>
                    <div className="my-2 p-2 w-full h-auto border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-gray-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none  ">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className=" text-center my-2 p-2 ml-20w-40 h-auto border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:border-gray-200 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none  ">
                        <button type="submit">Submit</button>
                    </div>

                    <p>{message}</p>
                </form>
            </div>
        </>
    )
}

export default Formcard;