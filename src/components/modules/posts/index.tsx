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
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
    comments: ['dsadsa', 'dsadsa', 'dsadas'],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg',
    username: 'Miya',
    description: '5 Amazing Platforms For Web Developers 😱🔥',
    likes: 1000,
    images: [
      "https://static.frame.work/92cqdkoguwxj1a5w5ks5rnjs7nl8",
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-surface-laptop-4-multitasking-1668x940-1?wid=515&hei=293&fit=crop",
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg',
    username: 'Robert Jr',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg",
      "https://static.frame.work/92cqdkoguwxj1a5w5ks5rnjs7nl8",
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-surface-laptop-4-multitasking-1668x940-1?wid=515&hei=293&fit=crop",
      "https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2.jpg",
      "https://www.cnet.com/a/img/resize/b9e66585cdf259a71344fddc53b04339e4e162fb/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200"
    ],
    comments: ['dsada', 'dsada'],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://yt3.ggpht.com/ytc/AMLnZu_bigcRag_cOSQIA2fXMTWIYd5rRArUg_g_8Ha3=s900-c-k-c0x00ffffff-no-rj',
    username: 'Asus',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
    comments: [],
    date: '16.01.2001 | 10:20 PM'
  },
  {
    user_image: 'https://image.winudf.com/v2/image/Y29tLnN1YWRhaDA2MTEuYW5pbWVnaXJsa2F3YWlpYXBwX3NjcmVlbl8yXzE1MjM4OTA0OTRfMDI0/screen-2.jpg?fakeurl=1&type=.webp',
    username: 'Acer',
    description: '5 Amazing Platforms For Web Developers 😱🔥🚀 ',
    likes: 1000,
    images: [
      "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
    ],
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

