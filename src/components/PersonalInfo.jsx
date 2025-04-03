import React from 'react'
import PixelButton from './PixelButton'
import PixelPopover from './PixelPopover'
import { useTypewriter , Cursor } from 'react-simple-typewriter'

/* img */
import avatar from '@/assets/avatar.svg'
import githubPic from '@/assets/github.svg'
import resumePic from '@/assets/resume.svg'
import blogPic from '@/assets/blog.svg'

function PersonalInfo({id}) {
  const InfoConfig = {
    name:'Pixel Developer',
    slogan:"an advertising slogan here.",
    sloganCN:"这里展示个性签名",
  }
  const [text] = useTypewriter({
    words:[InfoConfig.slogan,InfoConfig.sloganCN],
    loop:true,
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1500,
  })
  const bgPicNames = ['apple','book','coffee']
  const linkList = [
    {
      content:'github主页',
      href:'',
      key:'GitHub',
      src:githubPic,
      trigger:'hover',
      position:'top'
    },
    {
      content:'简历',
      href:'',
      key:'Resume',
      src:resumePic,
      trigger:'hover',
      position:'top'
    },
    {
      content:'blog',
      href:'',
      key:'Blog',
      src:blogPic,
      trigger:'hover',
      position:'top'
    }
  ]
  return (
    <div id={id} className="relative h-screen flex flex-col items-center justify-center bg-pixel-green">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className={
                "animate-pixel-float border border-black bg-no-repeat bg-contain "
                +`bg-pixel_${bgPicNames[i%3]}`
              }
            ></div>
          ))}
        </div>
      </div>
      
      <div className="z-10 text-center w-md">
        <div className="inline-block mb-8 relative">
          <img 
            src={avatar} 
            alt="Avatar" 
            className="w-32 h-32 pixel-border bg-white p-2"
          />
          <div className="absolute -bottom-4 -right-4 bg-pixel-yellow p-2 pixel-border transform rotate-12">
            <span className="text-base">Hello!</span>
          </div>
        </div>
        
        <h1 className="text-5xl font-semibold mb-4">{InfoConfig.name}</h1>
        <p className="mb-8 max-w-md px-4 text-3xl min-h-20">
          <span>{text}</span>
          <Cursor />
          {/* {InfoConfig.slogan} */}
          </p>
        
        <div className="flex space-x-4 justify-center">
          {
            linkList.map(({content,trigger,position,href,src,key})=>(
              <PixelPopover 
                key={key}
                content={content}
                trigger={trigger}
                position={position}
              >
                <a href={href||'#'} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={key} className="w-10 h-10 bg-white p-1 pixel-border hover:bg-gray-100 transition-colors" />
                </a>
              </PixelPopover>
            ))
          }
        </div>
        
        <div className="mt-12 w-md text-3xl">
          <PixelButton 
            onClick={() => {
              document.getElementById('About').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore
          </PixelButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-6 border-b-2 border-r-2 border-black transform rotate-45"></div>
      </div>
    </div>
  )
}

export default PersonalInfo
