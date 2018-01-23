export class LoggingService {
    private country: string = '';

    logToConsole(componentName, functionName, message) {
        console.log(componentName, functionName, '===>', message );
    }

    setCountry(newCountry: string) {
        this.country = newCountry;
    }

    getCountry() {
        return this.country;
    }
}