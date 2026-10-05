'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import { useDataStaticMyStack } from '@/const/data-static-my-stack'
import { Carousel, Icon } from '@/ui'

export function MyStack() {
  return (
    <div className="mx-auto mb-23 flex max-w-7xl flex-col gap-15.5 px-10 lg:px-2">
      <div className="flex flex-col gap-3.5 text-center text-grainbown-950">
        <h1 className="font-bold text-xl lg:text-3xl">Skills</h1>
        <p>The Technologies I Use</p>
      </div>
      <div className="mx-auto flex w-fit flex-col gap-7 lg:gap-20">
        <Carousel
          plugins={[AutoScroll({ speed: 1, stopOnInteraction: false })]}
          opts={{ loop: true }}
          className="mx-auto max-w-7xl"
        >
          <Carousel.Content>
            {useDataStaticMyStack.map((item) => (
              <Carousel.Item
                key={item + Math.random()}
                className="lg:flex-[0_0_15%]"
              >
                <Icon icon={item} className="size-8 lg:size-24" />
              </Carousel.Item>
            ))}
          </Carousel.Content>
        </Carousel>
      </div>
    </div>
  )
}
