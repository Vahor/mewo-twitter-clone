import Feed from "./Feed";
import {FeedResponse} from "../interface/api";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

type PostProps = {
    post: FeedResponse[number]
}

const PostHeader = ({post}: PostProps) => (
    <div className="flex justify-between">
        <div className='flex col-span items-center gap-2'>
            <img
                className="h-10 w-10 rounded-full"
                src={post.user.profilePicture}
                alt={post.user.username}/>
            <div className="flex flex-col">
                <Link to={`/user/${post.user.name}`}>{post.user.name}</Link>
                <span>@{post.user.username}</span>
            </div>
        </div>
        <div className="">
            yep
        </div>
    </div>
)

const PostBody = ({post}: PostProps) => (
    <div className='py-4'>
        {post.body}
    </div>
)

const PostSignature = ({post}: PostProps) => (
    <div>
        {dayjs(post.createdAt).format('hh:mm A - DD/MM/YY')}
    </div>
)


const Post = ({post}: PostProps) => {

    return (
        <div className="bg-dark-900 px-4 py-4 rounded-md">
            <PostHeader post={post}/>
            <PostBody post={post}/>
            <PostSignature post={post}/>
        </div>
    )
}

export default Post;
