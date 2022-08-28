export interface SlideShowType {
  id: number;
  picture: string;
}

export interface SlideShowPictureType extends SlideShowType {
  onRemovePic: (id: number) => void;
}

export type SlideShowButtonType = {
  imageWidth: number;
  prevButtonDisable: boolean;
  nextButtonDisable: boolean;
  onMinusCurrentIndex: () => void;
  onPlusCurrentIndex: () => void;
  onAddPicture: (picture: string) => void;
};

export type SlideStateType = {
  perPage: number;
  imageWidth: number;
  data: SlideShowType[];
  length: number;
  currentIndex: number;
};

export type SlideActionType =
  | { type: 'SET_PICTURE'; payload: SlideShowType[] }
  | { type: 'ADD_PICTURE'; payload: SlideShowType }
  | { type: 'DELETE_PICTURE'; payload: number }
  | { type: 'PLUS_CURRENT_INDEX' }
  | { type: 'MINUS_CURRENT_INDEX' };
