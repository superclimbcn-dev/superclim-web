import { useState, useMemo } from 'react';
import type { PriceCalculatorState } from '@/types';

const BASE_PRICES = {
  cleaning: {
    small: 60,
    medium: 80,
    large: 100,
    corner: 120,
  },
  impermeabilization: {
    small: 150,
    medium: 200,
    large: 220,
    corner: 240,
  },
  both: {
    small: 250,
    medium: 320,
    large: 370,
    corner: 390,
  },
};

const FABRIC_MULTIPLIERS = {
  fabric: 1,
  delicate: 1.2,
  leather: 1.3,
};

export function usePriceCalculator() {
  const [state, setState] = useState<PriceCalculatorState>({
    serviceType: 'cleaning',
    sofaType: 'medium',
    fabricType: 'fabric',
    quantity: 1,
  });

  const updateState = <K extends keyof PriceCalculatorState>(key: K, value: PriceCalculatorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const estimatedPrice = useMemo(() => {
    const basePrice = BASE_PRICES[state.serviceType][state.sofaType];
    const multiplier =
      state.serviceType === 'cleaning' ? FABRIC_MULTIPLIERS[state.fabricType] : 1;
    return Math.round(basePrice * multiplier * state.quantity);
  }, [state]);

  const priceRange = useMemo(() => {
    const min = Math.round(estimatedPrice * 0.9);
    const max = Math.round(estimatedPrice * 1.1);
    return { min, max };
  }, [estimatedPrice]);

  return {
    state,
    updateState,
    estimatedPrice,
    priceRange,
  };
}
