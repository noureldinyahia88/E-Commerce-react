import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg, type) => {
    if(type === "warm")
        toast.warn(msg)
    else if(type === "success")
        toast.success(msg)
    else if( type === "error")
        toast.error(msg)
};

export default notify