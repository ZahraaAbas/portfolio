import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa'
import { TbBrandCSharp, TbDevices } from 'react-icons/tb'

// To add a skill: put { name, icon } in the right category.
// Find icons at https://react-icons.github.io/react-icons and import them above.
export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
      { name: 'Responsive Design', icon: TbDevices },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
    ],
  },
]

export const allSkills = skillCategories.flatMap((category) => category.skills)