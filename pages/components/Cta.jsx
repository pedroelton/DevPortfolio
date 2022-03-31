import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';

const Cta = ({text, link}) => {
  return (
    <a href={link}>
    <button className="bg-slate-900 text-white py-4 px-12 md:px-10 md:h-[62px] md:w-[232px] rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500 flex flex-nowrap pt-5">
      {text}
      <DownloadIcon className="text-white"/>
      </button>
    </a>
  )
}

export default Cta
