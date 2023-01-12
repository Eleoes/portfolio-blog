import { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import PortfolioItems from './PortfolioItems';

const Projects = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'All') {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent });
        setActive(index);
    }

    return (
        <div>
            <div className="portfolio__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span onClick={(e) => {handleClick(e, index)}} className={`${active === index  ? 'active-project' : ""} project__item`} key={index}>{item.name}</span>
                )
            })}
            </div>

            <div className="portfolio__container container grid">
                {projects.map((item) => {
                    return <PortfolioItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Projects;