import { createContext } from 'react';
interface SearchQueryContextType {
    name: string;
    score: number;
}
export const CustomContext = createContext<SearchQueryContextType | null>(null);