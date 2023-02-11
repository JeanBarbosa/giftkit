import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { MailService } from '../mail/mail.service'
import { ConfigService } from '@nestjs/config'

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
    private readonly mailService: MailService,
    private readonly configService: ConfigService
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
                photo: deck.cardThree[0].urlPhoto,
                items: {
                  create: cardThreeArray
                }
              },
            ],
          }
        },
        include: {
          cards: true
        }
      })

      //obtém os ids dos cards e envia o email
      if (surprise.cards.length > 0) {
        const [cardOne, cardTwo, cardThree] = surprise.cards

        await this.mailService.newSurpriseGift({
          to: email,
          data: {
            title,
            url1: `${this.configService.get('app.frontendDomain')}/surprisebox?id=${surprise.id}&cardId=${cardOne.id}`,
            url2: `${this.configService.get('app.frontendDomain')}/surprisebox?id=${surprise.id}&cardId=${cardTwo.id}`,
            url3: `${this.configService.get('app.frontendDomain')}/surprisebox?id=${surprise.id}&cardId=${cardThree.id}`,
          },
        })
      }

      return surprise
    } catch (error) {
      throw new Error(error)
    }

  }
}