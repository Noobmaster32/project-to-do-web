import addIcon from './../assets/plus.svg'

export default function List() {
    return(
        <>
        <section>
            <div className='flex flex-row items-center justify-between'>
                <div>Add List</div>
                <div>
                    <img src={addIcon} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}