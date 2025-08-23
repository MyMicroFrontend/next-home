export const formatCurency = (value: number) => Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value);
