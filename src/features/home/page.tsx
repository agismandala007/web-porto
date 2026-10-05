import { TopNavigation } from '@/components'
import { AboutMe } from './components/about-me'
import { Hero } from './components/hero/hero'
import { MyStack } from './components/my-stack'
import { WhatIDo } from './components/what-i-do'

export function HomePage() {
  return (
    <main className="flex w-full flex-col">
      <TopNavigation />
      <Hero />
      <MyStack />
      <AboutMe />
      <WhatIDo />
    </main>
  )
}
