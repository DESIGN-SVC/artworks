import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react"
import { cx } from "cva"
import { forwardRef, useEffect, useRef, useState } from "react"
import { Link, redirect } from "react-router-dom"
import Ep1Semtexto from "../assets/image/ep-1-sem-texto.jpg"
import { Button } from "../components/ui"
import { ZeTeInforma } from "../icons"
import { apiVideos } from "../services/api"

export async function loader() {
  const token = await localStorage.getItem("token")

  if (!token) {
    return redirect("/")
  }

  return null
}

const Carrosel = forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(
  ({ ...rest }, ref) => {
    const videoRefs = useRef<Array<HTMLVideoElement>>([])
    const handleMouseEnter = (index: number) => {
      const video = videoRefs.current[index]!
      if (video) {
        const timeout = setTimeout(() => {
          if (video.currentTime < 2) {
            video.play()
          }
        }, 500)
        video.setAttribute("data-timeout-id", String(timeout))
      }
      if (video && video.currentTime >= 10) {
        video.pause()
      }
    }

    const handleMouseLeave = (index: number) => {
      const video = videoRefs.current[index]!
      if (video) {
        const timeoutId = video.getAttribute("data-timeout-id")
        clearTimeout(Number(timeoutId))
        video.pause()
      }
    }

    const handleTimeUpdate = (index: number) => {
      const video = videoRefs.current[index]!
      if (video && video.currentTime >= 10) {
        video.pause()
      }
    }

    return (
      <ul
        className={cx([
          "relative flex w-full gap-6 overflow-auto scroll-smooth 3xl:justify-between [&::-webkit-scrollbar]:hidden",
        ])}
        ref={ref}
        {...rest}
      >
        {apiVideos.map(({ id, title, video, thumbnail, summary }, index) => (
          <li
            key={index}
            className={`max-w-[330px] flex-none ${index === 4 ? "pr-6 3xl:pr-0" : ""}`}
          >
            <div className="relative rounded-[1.25rem]">
              <Link to={`/player/${id}`}>
                <video
                  ref={(el) => (videoRefs.current[index] = el!)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  poster={thumbnail}
                  src={video}
                  muted
                  className="w-full max-w-[330px] rounded-[1.25rem]"
                />
              </Link>
              <div className="absolute right-8 top-8 flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-yellow-100">
                <Play size={15} weight="fill" />
              </div>
            </div>
            <Link to={`/player/${id}`}>
              <h4 className="overflow-hidden text-ellipsis whitespace-nowrap pb-1 pt-5 text-xl font-bold text-gray-900 ">
                {title}
              </h4>
            </Link>
            <p className="line-clamp-[3]  overflow-hidden text-ellipsis text-gray-300">{summary}</p>
          </li>
        ))}
      </ul>
    )
  }
)

export const Home = () => {
  const carouselRef = useRef<HTMLUListElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleCarouselScroll = (
    ref: React.RefObject<HTMLUListElement>,
    direction: "prev" | "next"
  ) => {
    if (!ref.current) return

    const scrollWidth = ref.current.children[0].clientWidth + 20
    const scrollDirection = direction === "prev" ? -1 : 1
    const currentScrollLeft = ref.current.scrollLeft
    const sliderWidth = ref.current.children[0].clientWidth

    let newScrollLeft = currentScrollLeft + scrollWidth * scrollDirection

    if (scrollDirection === -1) {
      const previousVisibleSliderIndex = Math.floor(currentScrollLeft / sliderWidth) - 1
      newScrollLeft = previousVisibleSliderIndex * sliderWidth
    }

    ref.current.scrollLeft = newScrollLeft
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !carouselRef.current) return

      e.preventDefault()
      const x = e.pageX - carouselRef.current.offsetLeft
      const scroll = (x - startX) * 1

      if (scroll < 0) {
        handleCarouselScroll(carouselRef, "prev")
      }
      if (scroll > 0) {
        handleCarouselScroll(carouselRef, "next")
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && carouselRef.current) {
        const focusedElement = event.target as HTMLElement
        if (carouselRef.current.contains(focusedElement)) {
          handleCarouselScroll(carouselRef, "next")
        }
      }
    }

    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isDragging, startX])

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    e.preventDefault()
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="w-full flex-1">
      <main
        className={cx([
          "flex w-full justify-center px-[1.875rem]",
          "md:px-14 xl:mx-auto xl:max-w-7xl xl:px-[5.75rem] xl:py-3",
        ])}
      >
        <div
          style={{ backgroundImage: `url(${Ep1Semtexto})` }}
          className={cx([
            "flex flex-col justify-end gap-[1.875rem]",
            "my-6 h-[33.25rem] w-full max-w-[562px] p-8",
            "bg-cover bg-[-388px_0px]",
            "relative z-10 overflow-hidden rounded-[1.25rem]",
            'before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.13)_0%,rgba(0,0,0,0.79)_100%)] before:content-[""]',
            "md:h-[33.25rem] md:max-w-[44.875rem] md:bg-[-50px_0px]",
            "xl:max-w-[68.75rem] xl:bg-cover xl:bg-center",
          ])}
        >
          <ZeTeInforma
            className="z-10 h-[4.688rem] w-[6.125rem] xl:h-auto xl:w-[10.688rem]"
            alt=""
          />
          <div className="z-10 flex flex-col gap-2 text-white ">
            <h2 className="text-xl font-bold">
              {apiVideos.slice(0, 1).map((video) => video.title)}
            </h2>
            <p className="w-full max-w-xs md:max-w-full">
              {apiVideos.slice(0, 1).map((video) => video.summary)}
            </p>
          </div>
          <Button asChild className="z-10 flex max-w-[10.875rem]">
            <Link to={`/player/${apiVideos[0].id}`}>
              <Play size={24} weight="fill" />
              <span className="flex-1 text-center">Assistir</span>
            </Link>
          </Button>
        </div>
      </main>
      <article className="w-full bg-gray-50">
        <div
          className={cx([
            "relative w-full pb-16 pl-[1.875rem] pt-8 md:pl-[3.625rem]",
            "after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-[150px]",
            'to-transparent after:h-full after:from-gray-50 after:content-[""]',
            "before:absolute before:right-0 before:top-0 before:z-10 after:bg-gradient-to-r",
            ' before:h-full before:w-[100px] before:bg-gradient-to-r before:content-[""]',
            "before:hidden before:from-transparent before:to-gray-50 after:hidden md:after:block",
            "md:before:block",
            "xl:mx-auto xl:max-w-full xl:px-[5.75rem] xl:before:right-20",
            "3xl:max-w-[1820px] 3xl:px-0  3xl:before:hidden 3xl:after:hidden",
          ])}
        >
          <h3 className="mb-6 text-2xl font-bold">Temporada de dicas</h3>
          <div className="relative w-full">
            <Carrosel
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
            />
            <button
              className="absolute -left-6 top-20 z-50 hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-gray-900 md:flex 3xl:hidden"
              onClick={() => handleCarouselScroll(carouselRef, "prev")}
            >
              <CaretLeft size={22} weight="bold" />
            </button>
            <button
              className="absolute -right-6 top-20 z-50 hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-gray-900 md:flex 3xl:hidden"
              onClick={() => handleCarouselScroll(carouselRef, "next")}
            >
              <CaretRight size={22} weight="bold" />
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
