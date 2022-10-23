import React from 'react';
import {PostWrapper, PostHeader, PostContent, PostButtons, PostAbout} from "./styles";
import {AiOutlineHeart, AiOutlineComment, AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

interface Props {
  item: any
}

export const Post: React.FC<Props> = ({item}) => {
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
        <img src={item.image} alt={item.username}/>
      </PostContent>
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

