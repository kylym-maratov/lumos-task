import React, { useState} from 'react';
import {PostWrapper, PostHeader, PostContent, PostButtons, PostAbout, ContentPoints} from "./styles";
import {AiOutlineHeart, AiOutlineComment, AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import { FcPrevious, FcNext} from 'react-icons/fc'

interface Props {
  item: any
}

export const Post: React.FC<Props> = ({item}) => {
  const sliders = item.images
  const [currentSlide, setCurrentSlide] = useState<string>(sliders[0])

  const nextSlide = () => {
    setCurrentSlide(sliders[sliders.indexOf(currentSlide) + 1])
  }

  const prevSlide = () => {
    setCurrentSlide(sliders[sliders.indexOf(currentSlide) - 1])
  }

  const createPoints = () => {
     if (sliders.length > 1) {
       return sliders.map((item: string, key: number) => <div key={key} id={item === currentSlide ? "active" : ""}></div>)
     }
  }

  return (
    <PostWrapper>
      <PostHeader>
        <div>
          <img src={item.user_image} alt={item.username} />
          <span> {item.username}</span>
        </div>
        <button type="button"><BsThreeDots /></button>
      </PostHeader>
      <PostContent>
        {sliders[0] !== currentSlide
          &&
            <button type="button" onClick={() => prevSlide()} >
            <FcPrevious />
        </button>}
        <div>
            <img src={currentSlide} alt={item} />
        </div>
        {
          sliders[sliders.indexOf(currentSlide) + 1] &&
            <button type="button" onClick={() => nextSlide()}>
                <FcNext/>
            </button>
        }
      </PostContent>
      <ContentPoints>{createPoints()}</ContentPoints>
      <PostButtons>
         <div>
           <button type="button"><AiOutlineHeart /></button>
           <button type="button"><AiOutlineComment /></button>
         </div>
        <div>
          <button type="button"><AiOutlineAppstoreAdd /></button>
        </div>
      </PostButtons>
      <PostAbout>
        <div>
          <div id="likes">{item.likes} Likes</div>
          <div id="desc">{item.description}</div>
          <span>{
            item.comments.length
            ?
              `View ${item.comments.length} comments` : null

          }</span>
        </div>
         <span>{item.date}</span>
      </PostAbout>
    </PostWrapper>
  );
};

