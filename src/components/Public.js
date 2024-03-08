import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Amtech Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Financial Capital of India, We provide trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Amtech Repairs<br />
                    Andheri East<br />
                    Mumbai, 400068<br />
                    <a href="tel:+15555555555">(91) 9879899979 </a>
                </address>
                <br />
                <p>Owner: Rethish Nair</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public