const NavBar = () => {
    return (
       <header className="container mx-auto">
        <nav className=" bg-white shadow-lg flex justify-between items-center rounded-b-lg">
            <img className=" w-28" src="/Course hub.png" alt="main logo" />
            <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs mr-6" />
        </nav>
        <>
        <h1 className=" text-tittle text-3xl font-bold p-9 text-center">
        Course Registration
        </h1>
        </>
       </header>
    );
};

export default NavBar;