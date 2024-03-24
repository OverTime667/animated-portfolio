import {motion} from 'framer-motion'
import { useState } from 'react'



const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: (i) => ({
            opacity:1 , 
            x:100, 
            transition:{delay:i * 0.3 , staggerChildren: 0.5}
            // transition: {stiffness: 100 , type:'spring', damping: 200}
        }),
        hidden:{opacity:0}
    }

    const items = [
        'item1', 'item2','item3','item4',
    ]

  return (
    <div className="course">
        {/* <motion.div className='box' initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1, x:200, y:500}} variants={variants} animate="visible" animate={open ? "visible" :' hidden'} transition={{duration:2, }} whileHover={{opacity:1,scale:2}} drag />
        <button onClick={()=>{setOpen(prev =>!prev)}}>CLick</button> */}

        <motion.ul variants={variants} initial='hidden' animate='visible'>
            {items.map((item,indexNumber)=>( <motion.li variants={variants} key={item} custom={indexNumber}>{item}</motion.li> ))}
            
        </motion.ul>
    </div>
  )
}

export default Test