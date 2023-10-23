import { useCallback, useMemo, useState } from "react";

export type ShowMoreParam = {
    initialState?: boolean;
    text: string;
    showMoreLabel?: string;
    showLessLabel?: string;
    n?: number;
    suffix?: string;
  };
  
  export type ShowMoreReturnType = {
    onShowMore: () => void;
    textToDisplay: string;
    isShowMore: boolean;
    label: string;
  };
  


  /**
   * @description will handle show more functionality (for local state not API).
   * @example const {textToDisplay,onShowMore } = useShowMoreText({text:"too long text"})
   * console.log(textToDisplay) // "too lon..."
   * onShowMore();
   * console.log(textToDisplay) // "too long text"
   */
  export default function useShowMoreText({
    initialState,
    text,
    suffix = "...",
    n = 100,
    showMoreLabel = "Show more",
    showLessLabel = "Show less"
  }: ShowMoreParam): ShowMoreReturnType {
    const [isShowMore, setIsShwMore] = useState(Boolean(initialState));
  
    const onShowMore = useCallback(() => {
      setIsShwMore((prev) => !prev);
    }, []);
  
    const textToDisplay = useMemo(() => {
      return isShowMore ? text : text.substring(0, n).concat(suffix);
    }, [text, isShowMore, n, suffix]);
  
    return {
      label: isShowMore ? showLessLabel : showMoreLabel,
      onShowMore,
      textToDisplay,
      isShowMore
    };
  }
  