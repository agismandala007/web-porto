import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

import { Button, RotatingText } from '@/components/ui'
import PROFILE from '@/public/img/profile-pictures.jpg'

import {
  CarouselPortofolio,
  EducationVerticalTimeline,
  SocialMediaLink,
} from './components'
import { additionalEducation, formalEducation } from './data/education'

export default function HomeLayout() {
  return (
    <main className="flex w-full flex-col">
      <div className="mx-auto flex h-screen max-w-screen-xl items-center">
        <div className="mx-auto flex items-center justify-between lg:grid lg:grid-cols-2">
          <div className="flex h-fit items-center gap-20 justify-self-start">
            <SocialMediaLink />
            <div className="flex w-full flex-col gap-12">
              <div className="flex flex-col gap-4">
                <div className="flex w-full flex-col text-4xl font-bold text-black">
                  <h1>Hi There!</h1>
                  <div className="flex gap-3">
                    <h1>I&apos;m</h1>
                    <RotatingText
                      texts={[
                        'Agis Satria M',
                        'Web Developer',
                        'Data Analyst',
                        'Blockchain Developer',
                      ]}
                      mainClassName="text-black overflow-hidden rounded-lg"
                      staggerFrom="last"
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      splitLevelClassName="pb-0.5 sm:pb-1 md:pb-1 overflow-hidden"
                      transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={4000}
                    />
                  </div>
                </div>

                <p className="text-black">
                  Frontend Developer, Backend Engineer, and Data Analyst who
                  builds seamless web experiences, robust APIs, and data-driven
                  insights.
                </p>
              </div>

              <Button variant="primary" rounded="full">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-[331px] justify-self-end overflow-hidden rounded-2xl">
            <Image src={PROFILE} alt="profile-pictures" fill />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:gap-16">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-3.5 px-10 lg:px-2">
          <div className="flex flex-col gap-3.5 text-center text-grainbown-950">
            <h1 className="text-xl font-bold lg:text-3xl">Skills</h1>
            <p>The Technologies I Use</p>
          </div>
          <div className="mx-auto flex w-fit flex-col gap-7 lg:gap-20">
            <div className="flex gap-7 lg:gap-20">
              <Icon icon="devicon:javascript" className="size-8 lg:size-24" />
              <Icon icon="devicon:typescript" className="size-8 lg:size-24" />
              <Icon icon="devicon:react" className="size-8 lg:size-24" />
              <Icon icon="devicon:reactrouter" className="size-8 lg:size-24" />
              <Icon icon="devicon:zustand" className="size-8 lg:size-24" />
              <Icon icon="devicon:nextjs" className="size-8 lg:size-24" />
              <Icon
                icon="devicon:apollographql"
                className="size-8 lg:size-24"
              />
            </div>
            <div className="flex gap-7 lg:gap-20">
              <Icon icon="devicon:php" className="size-8 lg:size-24" />
              <Icon icon="devicon:laravel" className="size-8 lg:size-24" />
            </div>
            <div className="flex gap-7 lg:gap-20">
              <Icon icon="devicon:python" className="size-8 lg:size-24" />
              <Icon icon="devicon:jupyter" className="size-8 lg:size-24" />
              <Icon icon="devicon:pandas" className="size-8 lg:size-24" />
              <Icon icon="devicon:scikitlearn" className="size-8 lg:size-24" />
              <Icon icon="devicon:fastapi" className="size-8 lg:size-24" />
            </div>
            <div className="flex gap-7 lg:gap-20">
              <Icon icon="devicon:csharp" className="size-8 lg:size-24" />
              <Icon icon="logos:dotnet" className="size-8 lg:size-24" />
              <Icon icon="devicon:dotnetcore" className="size-8 lg:size-24" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-3.5 text-center text-grainbown-950">
            <h1 className="text-3xl font-bold">Project</h1>
            <p>
              A selection of full-stack and data-driven projects that showcase
              my capabilities.
            </p>
          </div>
          <div className="w-full bg-ginfizz-400 py-8">
            <CarouselPortofolio />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-10 lg:grid lg:grid-cols-2 lg:px-2">
          <div className="flex w-full flex-col gap-7 text-black lg:w-96">
            <h2 className="text-3xl font-bold">Education</h2>
            <p>
              I am a student at Ahmad Dahlan University, majoring in Information
              Technology. I am also a graduate of Vocational High School 2
              Tasikmalaya, majoring in Computer and Network Engineering.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 text-ginfizz-950">
              <Icon icon="zondicons:education" className="size-8" />
              <h1 className="font-medium">Formal Education</h1>
            </div>
            <EducationVerticalTimeline education={formalEducation} />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-10 lg:grid lg:grid-cols-2 lg:flex-row lg:px-2">
          <div className="flex w-full flex-col gap-7 text-black lg:w-96">
            <h2 className="text-3xl font-bold">Additional Education</h2>
            <p>
              I am a student at Ahmad Dahlan University, majoring in Information
              Technology. I am also a graduate of Vocational High School 2
              Tasikmalaya, majoring in Computer and Network Engineering.
            </p>
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex gap-5 text-ginfizz-950">
              <Icon icon="zondicons:book-reference" className="size-8" />
              <h1 className="font-medium">Additional Education</h1>
            </div>
            <EducationVerticalTimeline education={additionalEducation} />
          </div>
        </div>
      </div>
    </main>
  )
}
