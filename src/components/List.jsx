import { useEffect, useState } from 'react'
import addIcon from './../assets/plus.svg'

export default function List() {
    const [list, setList] = useState('');

    const clickToAdd = () => {
        setList(
            <>
            <div>
                <input className='py-2 px-4 w-full' type="text" value={'Untitled List'}/>
            </div>
            </>
        )
    }

    return(
        <>
        <section>
            <div>
                <div>
                    {list}
                </div>
                <button  
                    className='flex flex-row items-center justify-between w-full hover:bg-[#a4a4a4] rounded-sm'
                    onClick={clickToAdd}>
                    <div className='py-2 px-4'>Add List</div>
                    <div className='p-2.5'>
                        <img src={addIcon} alt="Add Icon" />
                    </div>
                </button>
            </div>
        </section>
        </>
    )
}