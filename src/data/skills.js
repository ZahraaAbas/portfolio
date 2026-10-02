import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa'
import {
  TbBrandCSharp,
  TbDevices,
  TbBrandVscode,
  TbBrandVisualStudio,
  TbHierarchy,
  TbAlertTriangle,
  TbPuzzle,
  TbDatabase,
} from 'react-icons/tb'
import { SiMysql, SiIntellijidea } from 'react-icons/si'

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
      { name: 'MySQL (Basic)', icon: SiMysql },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Visual Studio', icon: TbBrandVisualStudio },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'OOP', icon: TbHierarchy },
      { name: 'Exception Handling', icon: TbAlertTriangle },
      { name: 'Problem Solving', icon: TbPuzzle },
      { name: 'Database Concepts', icon: TbDatabase },
    ],
  },
]

export const allSkills = skillCategories.flatMap((category) => category.skills)
