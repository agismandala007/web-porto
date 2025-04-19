import { Icon } from '@iconify/react'
import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from '@/components/ui'

type EducationVerticalTimelineProps = {
  education: {
    title: string
    school: string
    date: string
  }[]
}

export default function EducationVerticalTimeline({
  education,
}: EducationVerticalTimelineProps) {
  return (
    <div className="max-w-screen-md rounded-xl bg-ginfizz-400 px-7 py-9">
      <VerticalTimeline>
        {education.map((item, i) => {
          return (
            <VerticalTimelineElement
              key={item.title + Math.random()}
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex flex-col gap-3 text-ginfizz-950">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.school}</p>
                </div>

                <div className="flex gap-3">
                  <Icon icon="uiw:date" className="size-5" />
                  <p>{item.date}</p>
                </div>
              </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}
