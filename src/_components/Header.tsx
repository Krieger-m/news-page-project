import Link from "next/link";

export function Header (){
    return(
        <>
            <div style={{padding:20, backgroundColor: '#cbc7b7', color: 'black'}}>
                <h1>Next News</h1>
                <Link href={'/'}>Home</Link>
                <span> | </span>
                <Link href={'/news'}>News</Link>
                <span> | </span>
                <Link href={'/archive'}>Archive</Link>
            </div>
        </>
    )
}