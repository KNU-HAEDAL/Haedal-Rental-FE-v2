import { useState, useEffect } from 'react';

export const useRentalPeriod = () => {
  const getStoredValue = (key: string, defaultValue: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  };

  const [date, setDate] = useState<Date | undefined>(() => {
    const storedDate = getStoredValue('date', '');
    return storedDate ? new Date(storedDate) : undefined;
  });

  const [rentalPeriod, setRentalPeriod] = useState(() =>
    getStoredValue('rentalPeriod', ''),
  );

  useEffect(() => {
    if (date) {
      localStorage.setItem('date', date.toISOString());
    }
    localStorage.setItem('rentalPeriod', rentalPeriod);
  }, [date, rentalPeriod]);

  const updateRentalPeriod = (selectedDate: Date | undefined) => {
    setDate(selectedDate || undefined);
    if (selectedDate) {
      const formattedPeriod = `${new Date().toLocaleDateString()} ~ ${selectedDate.toLocaleDateString()}`;
      setRentalPeriod(formattedPeriod);
    } else {
      setRentalPeriod('');
    }
  };

  return {
    date,
    setDate: updateRentalPeriod,
    rentalPeriod,
  };
};
