import Image from 'next/image';
import CardContent from './CardContent';

type Props = { imageHeight: string; }

function Card({ imageHeight }: Props) {
  return (
    <div className="self-stretch w-full flex-col justify-start items-start lg:gap-8 gap-6 flex sm:inline-flex ">
      <div className={`relative w-full ${imageHeight}`}>
        <Image
          src={`https://via.placeholder.com/326x228`}
          alt={`image plaeceholder`}
          sizes='sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          fill
          className="object-cover"

        />
      </div>
      <CardContent />

    </div>
  )
}

export default Card