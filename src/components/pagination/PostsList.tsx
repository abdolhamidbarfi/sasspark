"use client"
import Pagination from ".";
import { useRouter } from "next/navigation";

interface IPostsListProps {
    totalPage: number
    page: string
}

const PostsList: React.FunctionComponent<IPostsListProps> = ({totalPage = 1 , page = 1}) => {
    // const [page, setPage] = useState()
    const router = useRouter()
    const handlePageClick = (event: any) => {
    //    router.push(`/blog?page=${event.selected + 1}`)
    };

    return (
        <div>
            <Pagination
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                page={parseInt(page as string)}
            />
        </div>
    );
};

export default PostsList;
