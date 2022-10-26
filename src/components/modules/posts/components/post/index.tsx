import React, {useEffect, useMemo, useState} from 'react';
import {PostWrapper, PostHeader, PostContent, PostButtons, PostAbout, ContentPoints} from "./styles";
import {AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import { FcPrevious, FcNext} from 'react-icons/fc'
import {Link} from "react-router-dom";
import {createPoints, getCurrentDate} from "./helper";

interface Props {
  item: any,
  detail: boolean;
}

export const Post: React.FC<Props> = ({item, detail}) => {
  const sliders = item.image
  const [currentSlide, setCurrentSlide] = useState<string>(item.image[0])
  const itemDate = useMemo(() => getCurrentDate(item), [item.createdAt])
  const itemPoints = useMemo(() => createPoints(currentSlide, sliders), [currentSlide, sliders])

  useEffect(() => {setCurrentSlide(item.image[0])}, [item.image])

  const nextSlide = () => {
    setCurrentSlide(sliders[sliders.indexOf(currentSlide) + 1])
  }

  const prevSlide = () => {
    setCurrentSlide(sliders[sliders.indexOf(currentSlide) - 1])
  }

  return (
    <PostWrapper id={item._id} detail={detail}>
      <PostHeader>
        <div id={item.userid}>
          <img src={item.userImage} alt={item.username} />
          <span> {item.title}</span>
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
      <ContentPoints>{itemPoints}</ContentPoints>
      <PostButtons>
         <div>
          <button type="button"><AiOutlineHeart /></button>
           {!detail && <Link to={`/posts/${item._id}`}><button type="button"><AiOutlineComment /></button></Link>}
         </div>
        <div>
          <button type="button"><AiOutlineAppstoreAdd /></button>
        </div>
      </PostButtons>
      <PostAbout>
        <div>
          <div id="likes">{item.likes.length ? `${item.likes.length} Likes` :  null}</div>
          <div id="desc">{item.description}</div>
          <div id="tags">{item.tags}</div>
          <div> {
              !detail &&  item.comments.length ?
                <Link to={`/posts/${item._id}`} >{`View ${item.comments.length} comments`}</Link>
                :
                null
          } </div>
        </div>
         <span>{itemDate}</span>
      </PostAbout>
    </PostWrapper>
  );
};

