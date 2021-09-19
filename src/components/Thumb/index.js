import React from "react";

// styled
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;