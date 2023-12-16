import { useEffect, useState } from "react"
import moreIcon from "./../assets/moreIcon.svg"


export default function Profile () {
    const [name, setName] = useState('');

    useEffect(() => {
        if (localStorage.getItem("nama") == undefined){
            let nama = prompt("What's Ur Name?");
            localStorage.setItem("nama", nama);
        }
        setName(localStorage.getItem("nama"));
    },[])

    return (
        <>
        <section className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <div className="aspect-square rounded-full w-8 h-8 bg-slate-600 m-2">
                </div>
                <div>
                    Hello, {name}
                </div>
            </div>
            <div className="m-2.5">
                <img src={moreIcon} alt="more" />
            </div>
        </section>
        </>
    )
}