import React, { useState } from 'react'
import { CardsContainer, CardsH1, CardsWrapper, Card, CardImage, CardList } from './AboutMeCardsElements'
import Card1 from '../../../images/mm_design.png'

const AboutMeCards = () => {

    // const { Hover, setHover } = useState(false)

    // const onHover = () => {
    //     setHover() = (!Hover)
    // }

    return (
        <CardsContainer>
            <CardsH1>Who is Maximillian Mata?</CardsH1>
            <CardsWrapper>
                <CardList>
                    <Card>
                        <CardImage src={Card1} />
                    </Card>
                    <Card>
                        <CardImage src={Card1} />
                    </Card>
                </CardList>
                <CardList>
                    <Card>
                        <CardImage src={Card1} />
                    </Card>
                    <Card>
                        <CardImage src={Card1} />
                    </Card>
                    <Card>
                        <CardImage src={Card1} />
                    </Card>
                </CardList>
            </CardsWrapper>
        </CardsContainer>
    )
}

export default AboutMeCards
