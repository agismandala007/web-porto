import { Typo } from '@/ui'

export function WhatIDo() {
  return (
    <div className="bg-gray-200 py-17">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-15.5 px-10 lg:px-2">
        <div className="ml-20 flex flex-col gap-3">
          <Typo fontWeight="bold" size="4xl" className="text-black">
            About Me
          </Typo>
          <Typo fontWeight="medium" size="md" className="text-black">
            Introduction
          </Typo>
        </div>

        <div className="flex max-w-135 flex-col gap-5">
          <Typo fontWeight="bold" size="md" className="text-white">
            / About
          </Typo>
          <Typo fontWeight="medium" size="md" className="text-black leading-5">
            a developer passionate about clean code, intuitive design, and
            solving real-world problems with data and technology. With a
            foundation in both frontend and backend development, and a strong
            interest in data analytics, I enjoy building full-stack applications
            that are not just functional, but also intelligent.
          </Typo>
        </div>
      </div>
    </div>
  )
}
