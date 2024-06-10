import styles from './ProjectsStyles.module.css';
import del from '../../assets/del.png';
import bank from '../../assets/bank.png';
import face from '../../assets/f.png';
import restaurant from '../../assets/restaurant.png';
import gpt from '../../assets/gpt.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       
        <ProjectCard
          src={del}
          link="https://my-delivery-app-one.netlify.app/"
          h3="Food Delivery"
          p="Food Delivery App"
        />
        <ProjectCard
          src={bank}
          link="https://jamalabdulnasir220.github.io/bank-app/"
          h3="Bank"
          p="A Bank App"
        />
         <ProjectCard
          src={face}
          link="https://jamalabdulnasir220.github.io/Brain-machine/"
          h3="Face Detection"
          p="Face Detection App"
        />
        
        {/* <ProjectCard
          src={restaurant}
          link="https://jamalabdulnasir220.github.io/restaurant-app/"
          h3="Restaurant"
          p="A Restaurant App"
        /> */}
        {/* <ProjectCard
          src={gpt}
          link="https://jamalabdulnasir220.github.io/gpt3-app/"
          h3="GPT"
          p="A GPT3 Design"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
