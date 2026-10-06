import { useDataStaticWhatIDo } from '@/const/data-static-what-i-do'
import { Icon, Typo } from '@/ui'

export function WhatIDo() {
  return (
    <div className="bg-gray-200 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-15.5 px-10 lg:px-2">
        <div className="flex max-w-92 flex-col gap-3">
          <Typo fontWeight="bold" size="4xl" className="text-center text-black">
            What I Do
          </Typo>
          <Typo
            fontWeight="medium"
            size="md"
            className="max-w-90 text-center text-black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas pellentesque orci ac sagittis.
          </Typo>
        </div>

        <div className="flex gap-5">
          {useDataStaticWhatIDo.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 rounded-md bg-white p-10"
            >
              <Icon icon={item.icon} size="2xl" className="text-primary-600" />
              <div className="flex flex-col gap-3">
                <Typo fontWeight="bold" size="2xl" colorGray="700">
                  {item.title}
                </Typo>
                <Typo fontWeight="medium" size="md" colorGray="700">
                  {item.description}
                </Typo>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
