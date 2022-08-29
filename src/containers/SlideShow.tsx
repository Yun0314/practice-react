import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { css } from '@emotion/css';
// import useSlideReducer from '@/reducers/slide';
import SlideServiceConfig from '@/apis/slideService';
import {
  setSlide,
  addSlide,
  deleteSlide,
  plusCurrentIndex,
  minusCurrentIndex
} from '@/actions/slideAction';
import SlideShowButton from '@slideShow/SlideShowButton';
import SlideShowPicture from '@slideShow/SlideShowPicture';
import { RootState, UseAxiosType } from '@/types/index';
import style from '@/styles/slide-show.module.scss';

const SlideShow: React.FC<UseAxiosType> = (props) => {
  const { sendRequest } = props;

  const slide = useSelector((state: RootState) => state.slide);
  const dispatch = useDispatch();

  // 判斷畫面是否可以移動
  const pageIdReference = slide.length - slide.perPage;

  // 按鈕禁止狀態
  const prevButtonDisable = !slide.currentIndex;
  const nextButtonDisable = slide.length <= slide.perPage || slide.currentIndex >= pageIdReference;

  // 第一次頁面載入呼叫 api 撈 list
  useEffect(() => {
    sendRequest(SlideServiceConfig.get(), (res) => {
      dispatch(setSlide(res));
    });
  }, [sendRequest, dispatch]);

  // 新增圖片
  const atAddPicture = useCallback(
    (picture: string) => {
      sendRequest(SlideServiceConfig.create(picture), (res) => {
        dispatch(addSlide(res));
      });
    },
    [sendRequest, dispatch]
  );

  // 移除圖片
  const atRemovePic = useCallback(
    (id: number) => {
      sendRequest(SlideServiceConfig.delete(id), () => {
        dispatch(deleteSlide(id));
      });
    },
    [sendRequest, dispatch]
  );

  // 畫面往左移
  const atMinusCurrentIndex = useCallback(() => {
    dispatch(minusCurrentIndex());
  }, [dispatch]);

  // 畫面往右移
  const atPlusCurrentIndex = useCallback(() => {
    dispatch(plusCurrentIndex());
  }, [dispatch]);

  // 幻燈片長度`
  // 8是 css 中 picture 的 padding
  const viewWidth = css`
    width: ${(slide.imageWidth + 8) * slide.perPage}px;
  `;
  // 移動可視圖範圍
  // 8是 css 中 picture 的 padding
  const movedDistanceStyle = css`
    transform: translateX(${slide.currentIndex * -1 * (slide.imageWidth + 8)}px);
  `;

  const PictureBlock = () => {
    return slide.length > 0 ? (
      <div className={classnames(style.pictureBlock, movedDistanceStyle)}>
        {slide.data.map((item, index) => (
          <SlideShowPicture
            key={item.id}
            {...item}
            listLength={slide.length}
            index={index}
            status={slide.status}
            onRemovePic={atRemovePic}
          />
        ))}
      </div>
    ) : (
      <div className={style.noPicture}>NO PICTURE</div>
    );
  };

  return (
    <section>
      <div className={classnames(style.pictureList, viewWidth)}>
        <PictureBlock />
      </div>

      <SlideShowButton
        imageWidth={slide.imageWidth}
        prevButtonDisable={prevButtonDisable}
        nextButtonDisable={nextButtonDisable}
        onMinusCurrentIndex={atMinusCurrentIndex}
        onPlusCurrentIndex={atPlusCurrentIndex}
        onAddPicture={atAddPicture}
      />

      <p className={style.pictureDesc}>
        {slide.currentIndex} / {slide.length}
      </p>
    </section>
  );
};
export default SlideShow;
