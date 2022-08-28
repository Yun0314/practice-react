import React, { useEffect, useCallback } from 'react';
import classnames from 'classnames';
import { css } from '@emotion/css';
import useSlideReducer from '@/reducers/slide';
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
import { UseAxiosType } from '@/types/index';
import style from '@/styles/slide-show.module.scss';

const SlideShow: React.FC<UseAxiosType> = (props) => {
  const { sendRequest } = props;
  const [state, dispatch] = useSlideReducer();

  // 判斷畫面是否可以移動
  const pageIdReference = state.length - state.perPage;

  // 按鈕禁止狀態
  const prevButtonDisable = !state.currentIndex;
  const nextButtonDisable = state.length <= state.perPage || state.currentIndex >= pageIdReference;

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
    width: ${(state.imageWidth + 8) * state.perPage}px;
  `;
  // 移動可視圖範圍
  // 8是 css 中 picture 的 padding
  const movedDistanceStyle = css`
    transform: translateX(${state.currentIndex * -1 * (state.imageWidth + 8)}px);
  `;

  const PictureBlock = () => {
    return state.length > 0 ? (
      <div className={classnames(style.pictureBlock, movedDistanceStyle)}>
        {state.data.map((item, index) => (
          <SlideShowPicture
            key={item.id}
            {...item}
            listLength={state.length}
            index={index}
            status={state.status}
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
        imageWidth={state.imageWidth}
        prevButtonDisable={prevButtonDisable}
        nextButtonDisable={nextButtonDisable}
        onMinusCurrentIndex={atMinusCurrentIndex}
        onPlusCurrentIndex={atPlusCurrentIndex}
        onAddPicture={atAddPicture}
      />

      <p className={style.pictureDesc}>
        {state.currentIndex} / {state.length}
      </p>
    </section>
  );
};
export default SlideShow;
