import React, {useEffect} from 'react';
import {PostsWrapper} from "./styles";
import {Post} from "./components/post";
import {useAppDispatch} from "../../../store/hooks";
import {setFetchPosts} from "../../../store/reducers/posts/actions";

const posts = [
  {
    user_image: 'https://i.pinimg.com/736x/96/14/41/961441ac981ada78f04b0ec5e1503e21.jpg',
    username: 'mer_calme25',
    description: 'I don\'t know Russian but i feel a lot while listening to this song...Music is universal',
    likes: 1000,
    image: "https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg",
    comments: ['dsadsa', 'dsadsa', 'dsadas'],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
    username: 'Miya',
    description: '5 Amazing Platforms For Web Developers 😱🔥',
    likes: 1000,
    image: "https://storage.googleapis.com/ares-profile-pictures/hd/mer_calme25-496ab7f1214e6985543a2620b8001723_hd.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg',
    username: 'Robert Jr',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_FMjpg_UX1000_.jpg",
    comments: ['dsada', 'dsada'],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://yt3.ggpht.com/ytc/AMLnZu_bigcRag_cOSQIA2fXMTWIYd5rRArUg_g_8Ha3=s900-c-k-c0x00ffffff-no-rj',
    username: 'Asus',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://fdn.gsmarena.com/imgroot/news/22/08/asus-zenbook-17-fold-oled/-1200/gsmarena_001.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://mobile-review.com/articles/2020/image/acer-aspire-5/pic/10.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://pbs.twimg.com/media/FZ9yPK8agAA3OQK.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    image: "https://nitter.net/pic/ext_tw_video_thumb%2F1483714855031144453%2Fpu%2Fimg%2Fz7mOu8TK1naRFidY.jpg",
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  }
]


export const Posts = () => {
  const dispatch = useAppDispatch()
    useEffect(() => {
       dispatch(setFetchPosts(true))
    }, [])
    return (
        <PostsWrapper>
          {posts.length ? posts.map((item, i) => {
            return <Post item={{...item}} key={i}/>
          }) : "No posts"}
        </PostsWrapper>
    );
};

