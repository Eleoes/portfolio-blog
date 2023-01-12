const PortfolioItems = ({item}) => {
    return (
        <div className="project__card" key={item.id}>
            <img src={item.image} alt="project image" className='project__img' />
            <h3 className="project__title">{item.title}</h3>
            <div className="project__links">
                <a href={item.url} target="_blank" className="project__button">
                    Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
                </a>
                <a href={item.code} target="_blank" className="project__button">
                    Source <i className="bx bx-right-arrow-alt project__button-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default PortfolioItems