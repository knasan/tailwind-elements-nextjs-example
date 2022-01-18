import Image from 'next/image'

export default function AvatarPage() {
    return (
        <div>
            <Image
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-full w-32"
                alt="Avatar" width={250} height={250}
            />
        </div>
    )
}
