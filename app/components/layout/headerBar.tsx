import Nav from "./nav";

export default function HeaderBar() {
    return (
        <div className="bg-gray-100 p-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Nav />
        </div>
    )
}