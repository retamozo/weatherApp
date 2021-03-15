export const BASE_URI = "https://api.openweathermap.org/data/2.5";

export const API_KEY = "504120f35bdd98c6f1f2750b9a4be440";

export const EXCLUDE_PARAMS = "alerts,minutely,hourly,current";

export const capitalizeFirstChar = (char: string): string => {
    return char.charAt(0).toUpperCase() + char.slice(1)
}

const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const formatDate = (dt: number): {
    today: string;
    fullDate: string
    hour: string,
} => {

    const date: Date = new Date(dt * 1000);
    const today: string = date.toLocaleDateString("es-ES", options);
    const hour = () => {
        const hour = new Date(dt * 1000).getHours()
        return hour < 12 ? `${hour}AM` : `${hour}PM`
    }

    return {
        today: today.split(',')[0] || "",
        fullDate: today,
        hour: hour(),
    }
}

export const getWeatherImage = (codeImage: string): string => `http://openweathermap.org/img/wn/${codeImage}@2x.png`

