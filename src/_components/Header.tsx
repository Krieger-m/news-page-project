import Link from "next/link";

export function Header (){
    return(
        <>
            <div style={{padding:20, backgroundColor: '#cbc7b7', color: 'black'}}>
                <h1>Header</h1>
                <Link href={'/'}>Home</Link>
                <span> | </span>
                <Link href={'/news'}>News</Link>
            </div>
        </>
    )
}