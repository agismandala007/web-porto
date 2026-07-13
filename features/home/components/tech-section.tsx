import { Icon } from '@iconify/react'
import React from 'react'

import { dataStaticTech } from '@/const/data-static-tech'

export function TechSection() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-3.5 px-10 lg:px-2">
      <div className="flex flex-col gap-3.5 text-center text-grainbown-950">
        <h1 className="text-xl font-bold lg:text-3xl">Skills</h1>
        <p>The Technologies I Use</p>
      </div>
      <div className="mx-auto flex w-fit flex-col gap-7 lg:gap-20">
        {dataStaticTech.map((stack, index) => (
          <div key={index} className="flex gap-7 lg:gap-20">
            {stack.map((icon, index) => (
              <Icon key={index} icon={icon} className="size-8 lg:size-24" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
