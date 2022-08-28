import { SlideShowPictureType, SlideActionType } from '@/types/slideShow';

export const SET_PICTURE = 'SET_PICTURE';
export const ADD_PICTURE = 'ADD_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const PLUS_CURRENT_INDEX = 'PLUS_CURRENT_INDEX';
export const MINUS_CURRENT_INDEX = 'MINUS_CURRENT_INDEX';

export function setSlide(list: SlideShowPictureType[]): SlideActionType {
  return {
    type: SET_PICTURE,
    payload: list
  };
}

export function addSlide(item: SlideShowPictureType): SlideActionType {
  return {
    type: ADD_PICTURE,
    payload: item
  };
}

export function deleteSlide(id: number): SlideActionType {
  return {
    type: DELETE_PICTURE,
    payload: id
  };
}

export function plusCurrentIndex(): SlideActionType {
  return {
    type: PLUS_CURRENT_INDEX
  };
}

export function minusCurrentIndex(): SlideActionType {
  return {
    type: MINUS_CURRENT_INDEX
  };
}
