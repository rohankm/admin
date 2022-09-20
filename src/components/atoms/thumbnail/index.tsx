import clsx from "clsx"
import React from "react"
import ImagePlaceholderIcon from "../../fundamentals/icons/image-placeholder-icon"

type Props = {
  src?: string | null
  className?: string
  size?: "small" | "medium" | "large"
}

const Thumbnail = ({ src, className, size = "small" }: Props) => {
  return (
    <div
      className={clsx(
        "bg-grey-5 flex items-center justify-center overflow-hidden",
        {
          "w-[30px] h-10 rounded-base": size === "small",
          "w-9 h-12 rounded-rounded": size === "medium",
          "w-[170px] h-[226px] rounded-rounded": size === "large",
        },
        className
      )}
    >
      {src ? (
        <img src={src} className="object-cover object-center flex-1" />
      ) : (
        <ImagePlaceholderIcon />
      )}
    </div>
  )
}

export default Thumbnail
