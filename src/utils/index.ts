export const BASE_URI = "https://api.openweathermap.org/data/2.5";

export const API_KEY = "504120f35bdd98c6f1f2750b9a4be440";

export const EXCLUDE_PARAMS = "alerts,minutely,hourly,current";

export const capitalizeFirstChar = (char: string): string => {
    return char.charAt(0).toUpperCase() + char.slice(1)
}

