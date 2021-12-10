import Link from 'next/link'
const Topheader = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent" style={{padding: '25px 80px'}}>
            <div className="container">
            <Link href="/"><a className="navbar-brand" style={{fontSize: 30}}><img className="" src="/1.svg" alt="Carsemba" style={{width: 150}} /></a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {/* <li className="nav-item">
                    <Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link>
                </li> */}
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Topheader