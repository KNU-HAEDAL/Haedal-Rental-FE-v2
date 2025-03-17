'use client';

import { useState, useEffect } from 'react';

export const useRentalForm = () => {
  const getStoredValue = (key: string, defaultValue: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  };

  const [itemName, setItemName] = useState(() =>
    getStoredValue('itemName', ''),
  );
  const [selectedCategory, setSelectedCategory] = useState(() =>
    getStoredValue('selectedCategory', ''),
  );
  const [rentalPeriod, setRentalPeriod] = useState(() =>
    getStoredValue('rentalPeriod', ''),
  );
  const [date, setDate] = useState<Date | undefined>(() => {
    const storedDate = getStoredValue('date', '');
    return storedDate ? new Date(storedDate) : undefined;
  });
  const [image, setImage] = useState<string | null>(() =>
    getStoredValue('image', ''),
  );

  const categories = ['책', '보드게임', '사무용품', '기타 용품'];

  useEffect(() => {
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('rentalPeriod', rentalPeriod);
    if (date) localStorage.setItem('date', date.toString());
    if (image) localStorage.setItem('image', image);
  }, [itemName, selectedCategory, rentalPeriod, date, image]);

  const resetForm = () => {
    setItemName('');
    setSelectedCategory('');
    setRentalPeriod('');
    setDate(undefined);
    setImage(null);

    localStorage.removeItem('itemName');
    localStorage.removeItem('selectedCategory');
    localStorage.removeItem('rentalPeriod');
    localStorage.removeItem('date');
    localStorage.removeItem('image');
  };

  return {
    itemName,
    setItemName,
    selectedCategory,
    setSelectedCategory,
    rentalPeriod,
    setRentalPeriod,
    date,
    setDate,
    image,
    setImage,
    resetForm,
    categories,
  };
};
