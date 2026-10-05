import Image from 'next/image'
import { Button, RotatingText } from '@/ui'
import PROFILE from '../../../../../public/img/profile-pictures.jpg'
import { SocialMedia } from './components/social-media'

export function Hero() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center">
      <div className="mx-auto flex items-center justify-between lg:grid lg:grid-cols-2">
        <div className="flex h-fit items-center gap-20 justify-self-start">
          <SocialMedia />
          <div className="flex w-full flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex w-full flex-col font-bold text-4xl text-black">
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
        <div className="relative aspect-3/4 w-82.75 justify-self-end overflow-hidden rounded-2xl">
          <Image src={PROFILE} alt="profile-pictures" />
        </div>
      </div>
    </div>
  )
}
