import { useMemo } from 'react';
import { CameraType } from '../types';

type DiscountResult = {
  totalPrice: number;
  finalPrice: number;
  discountAmount: number;
};

const useDynamicPricing = (items: CameraType[]): DiscountResult => {
  const itemsCount = items.length;
  const procent = 100;

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  const baseDiscount = useMemo(() => {
    switch (true) {
      case itemsCount === 2:
        return 3;
      case itemsCount >= 3 && itemsCount <= 5:
        return 5;
      case itemsCount >= 6 && itemsCount <= 10:
        return 10;
      case itemsCount > 10:
        return 15;
      default:
        return 0;
    }
  }, [itemsCount]);

  const adjustedDiscount = useMemo(() => {
    switch (true) {
      case totalPrice >= 10000 && totalPrice <= 20000:
        return Math.max(baseDiscount - 1, 0);
      case totalPrice > 20000 && totalPrice <= 30000:
        return Math.max(baseDiscount - 2, 0);
      case totalPrice > 30000:
        return Math.max(baseDiscount - 3, 0);
      default:
        return baseDiscount;
    }
  }, [baseDiscount, totalPrice]);

  const discountAmount = useMemo(
    () => (totalPrice * adjustedDiscount) / procent,
    [totalPrice, adjustedDiscount]
  );

  const finalPrice = useMemo(
    () => totalPrice - discountAmount,
    [totalPrice, discountAmount]
  );

  return {
    totalPrice: Math.round(totalPrice),
    discountAmount: Math.round(discountAmount),
    finalPrice: Math.round(finalPrice)
  };
};

export default useDynamicPricing;
