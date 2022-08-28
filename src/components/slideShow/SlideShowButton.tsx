import React, { memo } from 'react';
import { SlideShowButtonType } from '@/types/slideShow';
import style from '@/styles/slide-show.module.scss';
import { SlideButton } from '@/styles/mui/muiSlideShow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const SlideShowButton: React.FC<SlideShowButtonType> = (props) => {
  const {
    imageWidth,
    prevButtonDisable,
    nextButtonDisable,
    onMinusCurrentIndex,
    onPlusCurrentIndex,
    onAddPicture
  } = props;

  const onAddClick = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const url = `https://placeimg.com/${imageWidth}/300/nature?t=${randomNumber}`;

    // 先進行載入
    const imageDom = new Image();
    imageDom.onload = () => {
      onAddPicture(url);
    };
    imageDom.src = url;
  };

  return (
    <>
      <div className={style.pictureButtonsBlock}>
        <SlideButton
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => onMinusCurrentIndex()}
          disabled={prevButtonDisable}
        >
          PREV
        </SlideButton>
        <SlideButton
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => onPlusCurrentIndex()}
          disabled={nextButtonDisable}
        >
          NEXT
        </SlideButton>
      </div>
      <div className={style.pictureButtonsBlock}>
        <SlideButton
          variant="contained"
          color="primary"
          endIcon={<AddPhotoAlternateIcon />}
          onClick={() => onAddClick()}
        >
          ADD PICTURE
        </SlideButton>
      </div>
    </>
  );
};
export default memo(SlideShowButton);
