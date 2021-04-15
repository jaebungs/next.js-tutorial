import Nav from './Nav';
import Header from './Header';
import stlyes from '../styles/Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={stlyes.container}>
                <main className={stlyes.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
