import { Link, Outlet } from "react-router-dom";
import Profile from "../components/Profile";

export default function Layout () {
    return(
        <>
        <main className="flex absolute h-full w-full bg-[#f4f4f4] overflow-auto">
            <article className="basis-1/4 bg-[#E4E4E4] shadow-lg overflow-auto">
                <div className="flex flex-col mx-8 mt-4 gap-3">
                    <Profile />
                    <hr className="border-solid border-black my-3"/>
                    <Link className="py-2 px-4" to={'/'}>To Do List</Link>
                    <Link className="py-2 px-4" to={'/timer'}>Timer</Link>
                    <Link className="py-2 px-4" to={'/complete'}>Complete</Link>
                    <hr className="border-solid border-black my-3"/>

                </div>
            </article>
            <article className="basis-3/4 overflow-auto">
                <Outlet />
            </article>
        </main>
        </>
    )
}