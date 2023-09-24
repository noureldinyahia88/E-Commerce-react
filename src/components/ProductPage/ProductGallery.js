import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

import RightButton from './RightButton';
import LeftButton from './LeftButton';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/product/ViewProductDetailsHook';



const ProductGallery = () => {

    const { id } = useParams()
    
    const [item, images, cat] = ViewProductDetailsHook(id)

    return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">

        <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
    </div>
)
}

export default ProductGallery