import useWindowDimensions from '@/utils/useWindowDimensions'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function SurpriseBox() {

  const countsNeeded = 3
  let counts = 1

  const { height, width } = useWindowDimensions()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const present = document.querySelector('.present')

    if (present) {
      present.addEventListener('click', () => {
        counts += 1
        //@ts-ignore
        present.style.setProperty('--count', Math.ceil(counts / 2))
        present.classList.add('animate')
        setTimeout(() => {
          present.classList.remove('animate')
        }, 300)

        if (counts >= countsNeeded) {
          setOpen(true)
          present.classList.add('open')
        }
      })
    }

  }, [])

  return (
    <>
      <Head>
        <title>Surpresa</title>
      </Head>
      <div className='surpriseBoxContainer'>

        <canvas></canvas>

        <div className="headline">Feliz Aniversário</div>
        {
          open ? (<div className="instructions">
            Kit da BeUni camista  cadernos e blusa tricolor
          </div>) : (
            <div className="instructions">
              Abra seu presente:
            </div>
          )

        }

        <div className="present">
          <Image
            className="gift"
            src="https://dl.airtable.com/.attachments/1d412a9be1c6cb5d7a24214579fa5e7a/c22a967f/MEYER.jpeg"
            alt="the gift"
            width={500}
            height={500} />

          <div className="wiggle-container">
            <div className="rotate-container">
              <div className="bottom"></div>
              <div className="front"></div>
              <div className="left"></div>
              <div className="back"></div>
              <div className="right"></div>

              <div className="lid">
                <div className="lid-top"></div>
                <div className="lid-front"></div>
                <div className="lid-left"></div>
                <div className="lid-back"></div>
                <div className="lid-right"></div>
              </div>
            </div>
          </div>
        </div>

        <Confetti
          width={width}
          height={height}
        />
      </div>
    </>
  )
}