import { Button } from '@/components/ui'
import { Icon } from '@iconify/react'
import React from 'react'

export default function SocialMediaLink() {
  return (
    <div className="flex flex-col gap-5 text-ginfizz-950">
      <Button variant={'link'} className="size-5">
        <Icon icon={'basil:linkedin-outline'} className="size-5" />
      </Button>
      <Button variant={'link'} className="size-5">
        <Icon icon={'basil:twitter-outline'} className="size-5" />
      </Button>
      <Button variant={'link'} className="size-5">
        <Icon icon={'basil:whatsapp-outline'} className="size-5" />
      </Button>
    </div>
  )
}
