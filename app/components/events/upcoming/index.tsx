import React from 'react';
import { Plumbing, Foundation, Construction } from '@mui/icons-material';

const nextEvent = [
    {
        icon: <Plumbing fontSize='large'/>,
        title: "Dig Septic",
        description: "Dig septic whole and drainfield. Layout pipes and place tank.",
    },
    {
        icon: <Foundation fontSize='large'/>,
        title: "Excavate Main Cabin",
        description: "Dig around the back of the main cabin to gain acces to the foundation for evaluation.",
    },
    {
        icon: <Construction fontSize='large'/>,
        title: "Repair Foundation",
        description: "Replace supports as needed. Add more supports to weak areas.",
    }
];

export default function NextEvent() {
  return (
    <section className='py-16 bg-accent2 text-accent1 font-bigShot text-center'>
      <div className='container mx-auto px-6 md:px-12'>
        <h1 className="text-5xl text-center mb-6">
          Upcoming Events
        </h1>
        <div className='grid gap-12 md:grid-cols-3'>
          {nextEvent.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-accent2 p-8 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300"
            >
              <div className='mb-4'>{activity.icon}</div>
              <h3 className='text-4xl font-semibold'>
                {activity.title}
              </h3>
              <p className='mt-4 text-xl'>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}