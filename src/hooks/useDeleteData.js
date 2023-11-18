import baseURL from "../Api/baseURL";

const useDeleteData = async(url, params) => {
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseURL.delete(url, params, config)

    return res.data
}

export default useDeleteData