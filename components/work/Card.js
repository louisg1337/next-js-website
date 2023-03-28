import './card.css'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Card({title, role, description, technologies}) {

    const list = {
        visible: { 
            opacity: 1, 
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: { 
            opacity: 0,
            transition: {
                duration: 0.5,
                when: "afterChildren",
            }, 
        },
        
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <motion.div 
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="card"
        key={title}
        >
            <motion.h1 variants={item} className="titleText">{title}</motion.h1>
            <motion.p variants={item} className="roleText">{role}</motion.p>
            <motion.p variants={item} className="descriptionText">{description}</motion.p>
            <motion.div variants={item} className="techWrapper">
                {technologies?.map((val, i) => {
                    return (
                        <div key={i} className='techContainer'>
                            <motion.p className='techText' key={i}>{val}</motion.p>
                        </div>
                    )
                })}
            </motion.div>
        </motion.div>
    );
}