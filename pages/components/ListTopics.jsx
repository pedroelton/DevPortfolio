import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ListTopics = ({topic, color, icon, link}) => {
  if (icon === "phone") {
    icon = <LocalPhoneIcon className="flex text-indigo-600 mr-2"/>
  } else if (icon === "email") {
    icon = <EmailIcon className="flex text-indigo-600 mr-2"/>
  } else if (icon === "check") {
    icon = <CheckIcon className="flex text-indigo-600 mr-2"/>
  } else if (icon === "linkedin") {
    icon = <LinkedInIcon className="flex text-indigo-600 mr-2"/>
  }

  return (
    <a href={link} className="flex">
        <li className="flex items-center hover:font-bold md:text-lg text-md list-none my-2 transition-all duration-300">{icon} {topic}</li>
    </a>
  )
}

export default ListTopics