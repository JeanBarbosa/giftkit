import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { MailService } from '../mail/mail.service'

type Product = {
  id: number,
  name: string,
  urlPhoto: string,
}

type Deck = {
  cardOne: Product[],
  cardTwo: Product[],
  cardThree: Product[],
}

export type SurpriseData = {
  userId: string,
  email: string,
  title: string,
  description: string,
  deck: Deck,
}

@Injectable()
export class SurprisegiftsService {

  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService
  ) { }

  async allSurpriseByUserId(userId: string) {
    return await this.prismaService.surprisegift.findMany({
      where: {
        userId
      }
    })
  }

  async create(data: SurpriseData) {
    try {
      const { email, title, description, userId, deck } = data

      const cardOneArray = deck.cardOne.map(card => {
        return {
          productId: card.id,
          name: card.name,
        }
      })

      const cardTwoArray = deck.cardTwo.map(card => {
        return {
          productId: card.id,
          name: card.name,
        }
      })

      const cardThreeArray = deck.cardThree.map(card => {
        return {
          productId: card.id,
          name: card.name,
        }
      })

      const surprise = await this.prismaService.surprisegift.create({
        data: {
          userId,
          emailRecipient: email,
          title,
          description,
          cards: {
            create: [
              {
                photo: deck.cardOne[0].urlPhoto,
                items: {
                  create: cardOneArray
                }
              },
              {
                photo: deck.cardTwo[0].urlPhoto,
                items: {
                  create: cardTwoArray
                }
              },
              {
                photo: deck.cardTwo[0].urlPhoto,
                items: {
                  create: cardThreeArray
                }
              },
            ],
          }
        },
      })

      const hash = description

      await this.mailService.newSurpriseGift({
        to: email,
        data: {
          hash,
        },
      })
      return surprise
    } catch (error) {

    }

  }
}