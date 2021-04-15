import headerStyles from '../styles/Header.module.css';

const Header = () => {

    const condition = 6;

    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <span className="title">Next.js</span> Tutorial
            </h1>
            <p className={headerStyles.description}>
                Jae is learning Next.js with Traversy's youtube.
            </p>
            {/* style in components */}
            {/* <style jsx>
                {`
                .title {
                    color: ${condition > 5 ? 'red' : 'blue'};
                }
                `}
            </style> */}
        </div>
    )
}

export default Header
