import React from 'react';
import {PostsWrapper} from "./styles";
import {Post} from "./components/post";

const posts = [
  {
    username: 'kylym_maratov',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀',
    likes: 1000,
    image: "https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/72822/Moonburn-iphone-8-wallpaper-ilikewallpaper_com_200.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    username: 'kylym_maratov',
    description: '5 Amazing Platforms For Web Developers 😱🔥',
    likes: 1000,
    image: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    username: 'kylym_maratov',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    username: 'kylym_maratov',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://wallpaperaccess.com/full/8541.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  }
]


export const Posts = () => {
    return (
        <PostsWrapper>
          {posts.map((item, i) => {
            return <Post item={{...item}} key={i}/>
          })}
        </PostsWrapper>
    );
};

