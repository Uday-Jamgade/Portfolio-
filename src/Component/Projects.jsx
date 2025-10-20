import React from 'react'
import Cards from './Cards'

const Projects = () => {
const Project = [
    { id: 1, name: 'E-Commerce website',
       description: 'Description of Project 1' ,
        TeckStack: "Mern Stack , Tailwind CSS" , 
        img:"./src/assets/E-Commerce.png",
        Link:"https://manga-store-mu.vercel.app/" ,
         github:"https://github.com/Uday-Jamgade/MangaStore",
        Backend:"https://github.com/Uday-Jamgade/MangaStore_Backend"},  
    { id: 2, name: 'Student Management System',
       description: 'Description of Project 2' ,
       TeckStack: "Mern Stack , Tailwind CSS" ,
       img:"./src/assets/Managment.png",
       Link:"https://managment-henna.vercel.app/" ,
       github:"https://github.com/Uday-Jamgade/Managment",
      Backend:"https://github.com/Uday-Jamgade/Managment_Backend"},  
    { id: 3, name: 'Ochi Landing Page',
       description: 'Description of Project 3' ,
       TeckStack: "React.js, Tailwind CSS" ,
       img:"./src/assets/Ochi.png",
       Link:"https://ochi-sandy.vercel.app/" ,
       github:"https://github.com/Uday-Jamgade/Ochi"},  
    { id: 4, name: 'Food Recipe',
       description: 'Desription of Project 4' ,
       TeckStack: "Html , CSS , JavaScript" ,
       img:"./src/assets/Food.png",
       Link:"https://recipe-search-app-ten.vercel.app/" ,
       github:"https://github.com/Uday-Jamgade/Recipe_Search_app"},  
]
  return (
        <div className="px-4 py-8  min-h-screen">
      <h2 className="text-4xl font-bold text-center text-fuchsia-400 mb-12">My Projects</h2>
      <div className="flex  justify-around gap-8 mx-auto lg:gap-13 lg:mx-12 flex-wrap">
        {Project.map((proj) => (
          <Cards key={proj.id} proj={proj} />
        ))}
      </div>
    </div>



  )
}

export default Projects
