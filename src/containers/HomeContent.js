import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import Content from '../components/content/ContentComponents'
import ProgressBar from '../components/progressbar/ProgressBarComponents'
import { Loading } from '../components/reUsable/Loading'
import { Star } from '../components/svg/Svgs'

export default function HomeContentContainer ({ cartUpdater }) {
  const [highlights, setHighlights] = useState(null)
  const [countdown, setCountdown] = useState(10)
  const [paused, setPaused] = useState(false)

  const stagedHighlights = useRef(null)

  const history = useHistory()

  useEffect(() => {
    async function initialize () {
      const nums = randomNums(20).join(',')
      const values = await fetch(`/.netlify/functions/getItemsById?id=${nums}`)
      const data = await values.json()
      setHighlights(data)
    }
    initialize()
  }, [])

  function randomNums (max) {
    let newArr = []
    do {
      let num = Math.floor(Math.random() * max);
      if(!newArr.includes(num)) {
        newArr.push(num)
      }
    } while (newArr.length < 3)

    return newArr
  }
  
  async function getHighlights() {
    
    const nums = randomNums(20).join(',')
    const values = await fetch(`/.netlify/functions/getItemsById?id=${nums}`)
    const data = await values.json()
    return data
  }


  useEffect(() => {

    if (countdown === 10) {
      (async function () {
        stagedHighlights.current = await getHighlights()
      } )()
    }

    setHighlights(previous => {
      if(countdown === 0) {
        return stagedHighlights.current
      } else return previous
    })

    
    let timer = setTimeout(() => {
      setCountdown(p => {
        if(paused) {
          return p
        }
        return p === 0 ? 10 : p - 1; 
      })
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [countdown, paused])

  console.log(countdown)
  return (
    <>
       {highlights !== null && <ProgressBar onClick={() => setPaused(c => !c)} remaining={countdown} paused={paused} />} 
      <Content.Frame>
        { highlights === null ? (<Loading />) : highlights.items.map(highlight => (
              <Content.ContentCard key={highlight.id + 'h'}>
                <Content.Image src={highlight.image} />
                <Content.Name>{highlight.title}</Content.Name>
                <Content.InfoBox>
                  <Content.Price>${highlight.price}</Content.Price>
                  <Content.Rating>
                    {highlight.ratingRate}
                    <Star rating={highlight.ratingRate}/>
                  </Content.Rating>
                </Content.InfoBox>
                <Content.MoreInfo category={highlight.category} item={highlight.id}/>
                <Content.AddCart onClick={() => cartUpdater(highlight.id, 1, history)} />
              </Content.ContentCard>
            )
        )}
      </Content.Frame>
    </>
  )

}