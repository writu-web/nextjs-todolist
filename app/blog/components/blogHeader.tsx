export default function BlogHeader({ count, title }: { count: string; title: string }) {
    return (
        <header className="bg-gray-800  text-white p-4 mb-6 flex gap-2 flex-justify-between items-center">
            <h2 className="text-lg font-bold">{count}.</h2>
            <h1 className="text-lg font-bold uppercase">{title}</h1>
        </header>
    );
}