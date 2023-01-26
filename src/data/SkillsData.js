import {
	FaCss3Alt,
	FaGithub,
	FaHtml5,
    FaLaptopCode
    
} from "react-icons/fa";
import { FaJava } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import {
	SiAdobephotoshop,
    SiMongodb,
    SiMysql
	
} from "react-icons/si";
import {
    AiOutlineGlobal
} from "react-icons/ai";

export const SkillsData = [
	{
		name: "HTML",
		icon: <FaHtml5 />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt />,
	},
	{
		name: "Java",
        icon: <FaJava />,
    },
    {
        name: "C\C++"
        icon: <FaLaptopCode/>
    },
    {
        name: "Python",
        icon: <FaPython/>,
    },
	{
		name: "MongoDB",
        icon: <SiMongodb />,
	},
	{
		name: "MySQL",
        icon: <SiMysql/>,
	},
	{
		name: "Git",
		icon: <FaGithub />,
    },
    {
        name: ".NET",
        icon: <AiOutlineGlobal />,
    },
	{
		name: "Photoshop",
		icon: <SiAdobephotoshop />,
	},
];
