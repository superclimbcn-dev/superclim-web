import { createContext } from 'react';

/** When true (server prerender), SEOMeta renders nothing: the prerender
 * script already injects the static head tags. Prevents duplicate metadata
 * from being emitted inline in the SSR body. */
export const PrerenderContext = createContext(false);
