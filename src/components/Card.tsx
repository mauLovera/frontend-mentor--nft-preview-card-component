import Image from "next/image"
import EtheriumIcon from "./icons/EtheriumIcon"
import ClockIcon from "./icons/ClockIcon"
import ViewIcon from "./icons/ViewIcon"

export default function Card() {
  return (
    <article className="max-w-[350px] rounded-[10px] bg-neutral-card-bg p-6">
      <div className="group relative mb-7 aspect-square w-full cursor-pointer overflow-hidden rounded-[5px] transition-colors duration-300 hover:bg-primary-cyan">
        <Image
          src={"/images/image-equilibrium.jpg"}
          fill
          priority
          alt="NFT of glass cube"
          sizes="280px"
          className="rounded-[5px] transition-opacity duration-300 group-hover:opacity-60"
        />
        <ViewIcon className="absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <h2 className="mb-3 cursor-pointer text-[22px] leading-[28px] transition-colors duration-300 hover:text-primary-cyan">
        Equilibrium #3429
      </h2>
      <p className="mb-4 font-light leading-[160%] text-primary-soft-blue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="mb-3 flex w-full items-center justify-between">
        <span className="flex items-center gap-1 font-semibold tracking-[calc(-2_*_0.01em)] text-primary-cyan">
          <EtheriumIcon />
          0.041 ETH
        </span>
        <span className="flex items-center gap-2 text-primary-soft-blue">
          <ClockIcon />3 days left
        </span>
      </div>
      <div className="flex w-full items-center gap-4 border-t-2 border-t-neutral-line pt-4">
        <div className="relative aspect-square h-[30px] overflow-hidden rounded-full border border-neutral-white">
          <Image
            src={"/images/image-avatar.png"}
            fill
            priority
            alt="Jules Wyvern"
          />
        </div>
        <span className="text-base text-primary-soft-blue">
          Creation of{" "}
          <span className="cursor-pointer text-neutral-white transition-colors duration-300 hover:text-primary-cyan">
            Jules Wyvern
          </span>
        </span>
      </div>
    </article>
  )
}
