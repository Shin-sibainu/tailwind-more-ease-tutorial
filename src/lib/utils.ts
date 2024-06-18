import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// cn("p-4 mt-4", "border mt-5");
// mt-4がmt-5に上書きされる
//=> 'p-4 border mt-5'

// cn("p-4 mt-4", ["border", "mt-5"]);
//=> 'p-4 border mt-5'

// cn("p-4", {
//   "w-full": true,
//   "h-20": false,
// });
//=> 'p-4 w-full'

// cn("p-4", {
//   "w-full": true,
//   "h-20": true,
// });
//=> 'p-4 w-full h-20'
