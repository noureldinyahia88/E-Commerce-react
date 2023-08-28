import baseURL from "../Api/baseURL";

const useGetData = async(url, params) => {
    const res = await baseURL.get(url, params)

    return res.data
}

export default useGetData