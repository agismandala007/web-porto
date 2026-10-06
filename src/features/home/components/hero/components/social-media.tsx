import { Button, Icon } from '@/ui'

export function SocialMedia() {
  return (
    <div className="flex flex-col gap-5">
      <Button variant="link" className="size-5">
        <Icon icon="basil:linkedin-outline" className="size-5" />
      </Button>
      <Button variant="link" className="size-5">
        <Icon icon="basil:twitter-outline" className="size-5" />
      </Button>
      <Button variant="link" className="size-5">
        <Icon icon="basil:whatsapp-outline" className="size-5" />
      </Button>
    </div>
  )
}
