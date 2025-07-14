import { clsx } from "clsx";
// import { type } from "os";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const readFileDataURL = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};
