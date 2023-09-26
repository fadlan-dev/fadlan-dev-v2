import React from 'react';
import { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { calcDate } from '@/lib/utils';

interface ExperienceProps {}

const experiences = [
  {
    position: 'Web Frontend Developer',
    employment_type: 'Remote',
    company: {
      name: 'THE MONK GAMES CO., LTD.',
      website: 'https://www.themonkstudio.com',
    },
    location: 'Bangkok Thailand',
    location_type: 'Remote',
    start_date: 1694684713000,
    end_date: null,
    techs: ['React', 'Nextjs', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    position: 'Web Frontend Developer',
    employment_type: 'Remote',
    company: {
      name: 'Kathi Studio Co.,Ltd',
      website: 'https://kathistudio.co.th',
    },
    location: 'Bangkok Thailand',
    location_type: 'Remote',
    start_date: 1630429200000,
    end_date: 1693475262000,
    techs: [
      'React',
      'Nextjs',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Flutter',
    ],
  },
  {
    position: 'Co-Founder and CTO',
    employment_type: 'Self-employed',
    company: {
      name: 'The Triple Innovation Co., Ltd.',
      website: 'https://triple-i.in/',
    },
    location: 'Pattani Thailand',
    location_type: 'Remote',
    start_date: 1606755600000,
    end_date: null,
    techs: ['React', 'Nextjs', 'JavaScript', 'Ant Design', 'Tailwind CSS'],
  },
  {
    position: 'Web Frontend Developer',
    employment_type: 'Full-time',
    company: { name: 'iSAAC TECH', website: null },
    location: 'Bangkok Thailand',
    location_type: 'On-site',
    start_date: 1561914000000,
    end_date: 1604077200000,
    techs: ['React', 'JavaScript', 'Ant Design'],
  },
  {
    position: 'UX UI',
    employment_type: 'Internship',
    company: { name: 'Ztrus', website: 'https://www.ztrus.com/' },
    location: 'Bangkok Thailand',
    location_type: 'On-site',
    start_date: 1546275600000,
    end_date: 1556643600000,
    techs: ['Adobe XD', 'Illustrator'],
  },
];

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <div className='w-screen h-screen flex items-center'>
      <div className='container max-w-xl'>
        <h1>Where I’ve Worked</h1>
        <ul className='space-y-6 md:space-y-12 mt-6'>
          {experiences.map((exp, i) => (
            <li
              key={i}
              className='flex flex-col sm:flex-row items-start gap-x-4'
            >
              <div
                className={`max-w-[140px] w-full flex flex-row sm:justify-end gap-1 text-sm text-muted-foreground`}
              >
                <p className='mt-[2px] whitespace-nowrap'>
                  {`${dayjs(exp.start_date).format('MMM YYYY')} - ${
                    exp.end_date
                      ? dayjs(exp.end_date).format('MMM YYYY')
                      : 'Present'
                  }`}
                </p>
              </div>
              <div className='w-full flex-1'>
                <div className='flex items-center justify-between space-x-4'>
                  <p className='text-foreground font-bold'>{exp.position}</p>
                  <span
                    className={`text-xs whitespace-nowrap text-muted-foreground`}
                  >
                    {calcDate(exp.start_date, exp.end_date || new Date())}
                  </span>
                </div>
                <div className={`flex flex-col gap-2 text-sm`}>
                  <div className='flex gap-1'>
                    {exp.company.website ? (
                      <a
                        href={exp.company.website}
                        target='_blank'
                        className={`font-bold hover:underline text-primary`}
                      >
                        {exp.company.name}
                      </a>
                    ) : (
                      <p className='font-bold text-primary'>
                        {exp.company.name}
                      </p>
                    )}
                    {'·'}
                    <span
                      className={`font-normal text-sm text-muted-foreground`}
                    >
                      {exp.employment_type}
                    </span>
                  </div>
                </div>
                <p className={`text-sm text-muted-foreground`}>
                  {exp.location}
                </p>
                <ol
                  className={`flex flex-wrap items-center gap-x-1 text-muted-foreground`}
                >
                  {exp.techs.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <li className='text-sm'>{tech}</li>
                      {i < exp.techs.length - 1 && '·'}
                    </React.Fragment>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
