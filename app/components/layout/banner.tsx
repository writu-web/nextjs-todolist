export default function BannerArea(){
    return (
        <section className="bg-white border-b border-blue-500 flex-1 bg-cover bg-center flex flex-col items-center justify-center">
            <div>
                <h2 className="text-2xl font-bold text-center">Welcome to the Blog App!</h2>
                <p className="mt-2">Write your daily blog efficiently and stay organized.</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">Join us and start blogging today!</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Get Started
            </button>
            <p className="mt-2 text-sm text-gray-600">Not an user yet? Register now</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Register</button>
        </section>
    );
}