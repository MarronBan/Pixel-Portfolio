import { useRef } from 'react'
import useIntersectionObserver from '../utils/useIntersectionObserver'
import PixelTimeline from './PixelTimeline'
function Experience({id}){
  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })
  const timeLine = [
    {
      time:'2025年12月31日',
      title:'打败恶龙',
      content:'经过一番激战，勇者和伙伴们终于打败了恶龙，救出了公主。'
    },
    {
      time:'2025年5月20日',
      title:'集结伙伴',
      content:'在旅途中，勇者结识了魔法师、弓箭手和盗贼，组成了冒险小队。'
    },
    {
      time:'2025年3月15日',
      title:'获得神剑',
      content:'经过艰难的试炼，勇者获得了传说中的神剑。'
    },
    {
      time:'2025年1月1日',
      title:'开始冒险',
      content:'勇者踏上了征途，准备打败恶龙拯救公主。'
    }
  ]
  return (
    <section
      id={id}
      ref={sectionRef}
      className='min-h-screen p-8 md:p-16 bg-pixel-shadow'
    >
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl mb-8 inline-block bg-white p-2 pt-3.5 pixel-border-white">My Experience</h2>
        <PixelTimeline>
          {
            timeLine.map(({title,time,content})=>
              <PixelTimeline.Item 
                key={time}
                title={title} 
                time={time}
              >
                {content}
              </PixelTimeline.Item>
            )
          }

        </PixelTimeline>
      </div>
    </section>
  )
}

export default Experience