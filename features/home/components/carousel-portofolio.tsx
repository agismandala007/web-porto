'use client'

import { Icon } from '@iconify/react'
import { type VariantProps } from 'class-variance-authority'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import React from 'react'
import { BadgeVariant as VariantFromBadge } from '@/components/ui'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui'
import { Badge } from '@/components/ui/badge'
import { Capitalize } from '@/lib/common'

const portofolio = [
  {
    title: 'Portfolio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    badge: ['react', 'nextjs', 'typescript'],
  },
  {
    title: 'Portfolio 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    badge: ['javascript', 'react-router', 'zustand', 'apollo'],
  },
  {
    title: 'Portfolio 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    badge: ['php', 'laravel', 'python', 'jupyter-notebook', 'pandas'],
  },
  {
    title: 'Portfolio 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.pexels.com/photos/6964308/pexels-photo-6964308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    badge: ['scikit-learn', 'fastapi', 'c-#', 'dotnetcore', 'dotnet'],
  },
]

type BadgeVariant = {
  [key: string]: {
    icon: string
    variant: VariantProps<typeof VariantFromBadge>['variant']
  }
}

const badgeVariant: BadgeVariant = {
  react: {
    icon: 'devicon:react',
    variant: 'react',
  },
  nextjs: {
    icon: 'devicon:nextjs',
    variant: 'black',
  },
  typescript: {
    icon: 'devicon:typescript',
    variant: 'blue',
  },
  javascript: {
    icon: 'devicon:javascript',
    variant: 'yellow',
  },
  'react-router': {
    icon: 'devicon:reactrouter',
    variant: 'red',
  },
  dotnet: {
    icon: 'logos:dotnet',
    variant: 'blazor',
  },
  php: {
    icon: 'devicon:php',
    variant: 'php',
  },
  zustand: {
    icon: 'devicon:zustand',
    variant: 'ginfizz',
  },
  fastapi: {
    icon: 'devicon:fastapi',
    variant: 'green',
  },
  python: {
    icon: 'devicon:python',
    variant: 'blue',
  },
  laravel: {
    icon: 'devicon:laravel',
    variant: 'red',
  },
  'c-#': {
    icon: 'devicon:csharp',
    variant: 'csharp',
  },
  'jupyter-notebook': {
    icon: 'devicon:jupyter',
    variant: 'orange',
  },
  'scikit-learn': {
    icon: 'devicon:scikitlearn',
    variant: 'orange',
  },
  apollo: {
    icon: 'devicon:apollographql',
    variant: 'indigo',
  },
  dotnetcore: {
    icon: 'devicon:dotnetcore',
    variant: 'indigo',
  },
  pandas: {
    icon: 'devicon:pandas',
    variant: 'indigo',
  },
}

export default function CarouselPortofolio() {
  return (
    <>
      <Carousel
        plugins={[AutoScroll({ speed: 1, stopOnInteraction: false })]}
        opts={{ loop: true }}
        className="mx-auto max-w-screen-xl"
      >
        <CarouselContent>
          {portofolio.map((item, i) => (
            <CarouselItem
              key={item.title + Math.random()}
              className="lg:flex-[0_0_33.333%]"
            >
              <Card>
                <CardHeader className="hidden">
                  <CardTitle />
                  <CardDescription />
                </CardHeader>

                <CardContent className="flex flex-col gap-2.5">
                  <div className="flex flex-col gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="aspect-video h-auto w-full rounded-lg object-cover"
                    />
                    <h1 className="text-xl font-semibold text-grainbown-950">
                      {item.title}
                    </h1>
                    <p className="text-grainbown-950">{item.description}</p>
                  </div>

                  <div className="flex w-full flex-wrap gap-3">
                    {item.badge.map((badge, i) => {
                      const badgeInfo =
                        badgeVariant[badge as keyof typeof badgeVariant]

                      if (!badgeInfo) return null
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <Badge variant={badgeInfo.variant} key={i}>
                          <Icon icon={badgeInfo.icon} className="size-3" />
                          <h1 className="font-semibold">{Capitalize(badge)}</h1>
                        </Badge>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
