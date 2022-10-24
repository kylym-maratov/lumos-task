import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Header} from "../../../modules/header";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {setFetchPost} from "../../../../store/actions/posts.action";
import {Post} from "../../../modules/posts/components/post";
import {PostDetailWrapper, PostDetailHeader, PostDetailComments, PostDetailComment} from './styles'

export const PostPage: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const post_id = location.pathname.split('/')[2]
  const {post} = useAppSelector(state => state.postsReducer)

  useEffect(() => {
     dispatch(setFetchPost(post_id))
  }, [])

  return (
    <div>
        <Header />
         <PostDetailWrapper>
           <div style={{maxWidth: '500px'}}>{post &&  <Post item={post} detail={true}/>}</div>
           <PostDetailComments>
              <div>
                <PostDetailHeader>
                  <p>Comments</p>
                </PostDetailHeader>
                {post && post.comments.length ?
                  <PostDetailComment>
                      {post.comments.map((item: any, i: number) => {
                         return <div key={i}>
                           <article>
                             <img src={item.userAvatar} alt={item.userName}/>
                             <span>{item.userName}</span>
                             <p>{item.comment}</p>
                             <span></span>
                           </article>
                         </div>
                      })}
                </PostDetailComment> : "No comments"
                }
                <div>
                  <input type="text" placeholder="Leave your comment"/>
                  <button type="button">Add</button>
                </div>
              </div>
           </PostDetailComments>
         </PostDetailWrapper>

    </div>
  );
};
