import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Content from '../components/content/ContentComponents'
import ProgressBar from '../components/progressbar/ProgressBarComponents'
import { Star } from '../components/svg/Svgs'

export default function HomeContentContainer ({ data, cartUpdater }) {
  const [highlights, setHighlights] = useState([2, 5, 10])
  const [countdown, setCountdown] = useState(10)
  const [paused, setPaused] = useState(false)

  const history = useHistory()
  
  useEffect(() => {
    
    function randomNums () {
      let newArr = []

      do {
        let num = Math.floor(Math.random() * 20);
        if(!newArr.includes(num)) {
          newArr.push(num)
        }
      } while (newArr.length < 3)

      return newArr
    }


    if(countdown === 0) {
      setHighlights(randomNums())
    }

    
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



  return (
    <>
       {data.length > 0 && <ProgressBar onClick={() => setPaused(c => !c)} remaining={countdown} paused={paused} />} 
      <Content.Frame>
        { data.length === 0 ? (<Content.Loading />) : highlights.map(e => {
          let item = data[e]
            return (
              <Content.ContentCard key={item.id + 'h'}>
                <Content.Image src={item.image} />
                <Content.Name>{item.title}</Content.Name>
                <Content.InfoBox>
                  <Content.Price>${item.price}</Content.Price>
                  <Content.Rating>
                    {item.rating.rate}
                    <Star rating={item.rating.rate}/>
                  </Content.Rating>
                </Content.InfoBox>
                <Content.MoreInfo category={item.category} item={item.id}/>
                <Content.AddCart onClick={() => cartUpdater(item.id, 1, history)} />
              </Content.ContentCard>
            )
           
        })}
      </Content.Frame>
    </>
  )

}