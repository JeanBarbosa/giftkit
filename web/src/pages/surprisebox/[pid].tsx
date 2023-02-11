import useWindowDimensions from '@/utils/useWindowDimensions'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { api } from '@/services/apiClient'

type item = {
  cardId: string,
  id: string,
  name: string,
  productId: number,
}

type card = {
  id: string,
  photo: string,
  items: item[],
}

type supriseData = {
  cards: card[],
  description: string,
  emailRecipient: string,
  id: string,
  selectedCardID: string,
  title: string,
  userId: string,
}

export default function SurpriseBox() {

  const countsNeeded = 3
  let counts = 1

  const { height, width } = useWindowDimensions()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { pid, cardId } = router.query
  const [surprise, setSurprise] = useState({} as supriseData)

  async function handleChosenGift() {
    const response = await api.post('surprisegift/chosenGift', {
      surpriseId: pid,
      cardId: cardId,
    })

    const { data } = response
    setSurprise(data)
  }


  useEffect(() => {
    //salvar o cardID selecionado
    //carregar os produtos do card
    if (pid) {
      handleChosenGift()
    }
  }, [pid, cardId])

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
            {surprise.cards.map((card) => {
              return (
                surprise.selectedCardID !== card.id ? "" : card.items.map((item) => <span key={item.id}>
                  {item.name} <br />
                </span>)
              )
            })}
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