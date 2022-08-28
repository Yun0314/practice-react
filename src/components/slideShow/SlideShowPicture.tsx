import React, { memo } from 'react';
import { SlideShowPictureType } from '@/types/slideShow';
import style from '@/styles/slide-show.module.scss';

const SlideShowPicture: React.FC<SlideShowPictureType> = (props) => {
  const { id, picture, onRemovePic } = props;
  return (
    <section className={style.picture} data-enter={false} data-leave={false}>
      <img src={picture} alt={`picture${id}`} />
      <span className={style.pictureRemover} onClick={() => onRemovePic(id)}>
        &times;
      </span>
    </section>
  );
};
export default memo(SlideShowPicture);
