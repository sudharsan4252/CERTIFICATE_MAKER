import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// it is just making to run them conditionally clsx used
// it is used to merge the classname in tailwind
// twmerge overides the style by the latest style
// that how the tailwind merge gonna be working
export default function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs));
}
