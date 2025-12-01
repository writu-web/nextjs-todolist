import Link from "next/link";

export default function BannerArea(){
    return (
        <section className="bg-white border-b border-blue-500 flex-1 bg-cover bg-center flex flex-col items-center justify-center">
            <div>
                <h2 className="text-2xl font-bold text-center">Welcome to the Blog App!</h2>
                <p className="mt-2">Write your daily blog efficiently and stay organized.</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">Join us and start blogging today!</p>
            <Link href={'/login'} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Get Started
            </Link>
            <p className="mt-2 text-sm text-gray-600">Not an user yet? <Link href={'/register'} className="text-blue-500 hover:text-black transition-colors">Register now</Link></p>
        </section>
    );
}