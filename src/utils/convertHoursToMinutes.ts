export default function convertHoursToMinutes(time: string){

    const [hour, minutes] = time.split(':').map(Number);
    const timeInMInutes = (hour * 60) + minutes;
    
    return timeInMInutes;
}