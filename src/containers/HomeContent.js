import { useEffect, useState } from 'react'

import Content from '../components/content/ContentComponents'
import ProgressBar from '../components/progressbar/ProgressBarComponents'
import CartButton from '../components/reUsable/CartButton'
import { Star } from '../components/svg/Svgs'

export default function HomeContentContainer ({ data, cartData, setCartData }) {
  const [highlights, setHighlights] = useState([2, 5, 10])
  const [countdown, setCountdown] = useState(10)
  const [paused, setPaused] = useState(false)

  console.log(cartData, setCartData)
  
  //change this to countdown from 1, once it counts down, have state go down by 1, once the timer hits 0, set countdown back to 
  //original and change highlights
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
    //here map over the highlights arrary replacing it with the info from data (this probably wouldn't scale?)
    <>
       {data && <ProgressBar onClick={() => setPaused(c => !c)} remaining={countdown} paused={paused} />} 
      <Content.Frame>
        { highlights.map(e => {
          let item = data[e]
          if(item) {
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
                
                <CartButton id={item.id} quantity={1} cartData={cartData} setCartData={setCartData} >
                  <Content.AddCart />
                </CartButton>

              </Content.ContentCard>
            )
          }
           
        })}
      </Content.Frame>
    </>
  )

}