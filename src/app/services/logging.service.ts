export class LoggingService {
    private country: string = '';
    private serviceAccessCounter = 0;

    logToConsole(componentName, functionName, message) {
        this.serviceAccessCounter++;
        console.log(this.serviceAccessCounter, '....' , componentName, functionName, '===>', message );
    }

    setCountry(newCountry: string) {
        this.country = newCountry;
    }

    getCountry() {
        return this.country;
    }
}