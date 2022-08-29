import React, { memo, useState, useEffect, useLayoutEffect } from 'react';
import { SlideShowPictureType } from '@/types/slideShow';
import { SlideStatus } from '@/store/const';
import style from '@/styles/slide-show.module.scss';

const SlideShowPicture: React.FC<SlideShowPictureType> = (props) => {
  const { id, picture, listLength, index, status, onRemovePic } = props;
  const [enter, setEnter] = useState<boolean>(false);
  const [leave, setLeave] = useState<boolean>(false);

  const onDeleteClick = (id: number) => {
    // 先執行移除的動畫
    setLeave(true);
    // 直接執行會閃爍
    setTimeout(() => onRemovePic(id), 300);
  };

  // 利用 useEffect 和 useLayoutEffect 執行流程的不同，實現新增時的動畫效果
  useEffect(() => {
    // 直接執行會閃爍
    setTimeout(() => setEnter(false), 300);
  }, []);

  useLayoutEffect(() => {
    // 判斷: 新增情境 + 該圖片為最後一張
    setEnter(status === SlideStatus.ADD && listLength - 1 === index);
  }, [listLength, status, index]);

  return (
    <section className={style.picture} data-enter={enter} data-leave={leave}>
      <img src={picture} alt={`picture${id}`} />
      <span className={style.pictureRemover} onClick={() => onDeleteClick(id)}>
        &times;
      </span>
    </section>
  );
};
export default memo(SlideShowPicture);
