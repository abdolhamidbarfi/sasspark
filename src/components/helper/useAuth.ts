import useSWR from "swr";
import { fetcher } from "./api";

interface IuseAuthProps {

}

const useAuth = () => {

    const { data  , error } = useSWR('user_data', async () => {
        return await fetcher({ url: '/user', options: { credentials: 'include' } })
    })

    return ({
        user: data?.user,
        error,
        loading: !data && !error
    })
};

export { useAuth };
