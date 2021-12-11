import Link from 'next/link'

const Mainfooter = () => {

    return (
        <>
            <footer className="footer bg-faded-dark">
                <div className="container d-lg-flex align-items-center justify-content-between fs-sm pb-3">
                <div className="d-flex flex-wrap justify-content-center order-lg-2 mb-3">
                    <a className="nav-link car-link fw-normal" href="#">Terms of use</a><a className="nav-link car-link fw-normal" href="#">Privacy policy</a><Link href=""><a className="car-link" style={{fontSize: 20, margin: '5px 0 0 0'}}><i className="bi bi-instagram"></i></a></Link>
                </div>
                <p className="text-center text-lg-start order-lg-1 mb-lg-0"><span className="text-dark opacity-50">© All rights reserved. Made by </span><Link href="/"><a className="car-link fw-bold">Carsemba</a></Link></p>
                </div>
            </footer>
        </>
    )
}

export default Mainfooter