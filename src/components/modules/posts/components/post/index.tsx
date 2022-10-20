import React from 'react';
import {PostWrapper} from "./styles";

interface Props {
  item: any
}

export const Post: React.FC<Props> = ({item}) => {
  return (
    <PostWrapper>
        <div id="header">
          <div id="name">@{item.username}</div>
        </div>
      <div id="post-image">
        <img src={item.image}></img>
      </div>
      <div id="about">
         <div id="description">
            {item.description}
            <span>more...</span>
         </div>
      </div>
    </PostWrapper>
  );
};

