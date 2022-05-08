import { useEffect, useState } from "react";


const useProduct = () => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
    }, [])
    return (
        <div>

        </div>
    );
};

export default useProduct;