import { createContext } from 'react';
interface SearchQueryContextType {
    name: string;
    score: number;
}
export const SearchContext = createContext<SearchQueryContextType | null>(null);