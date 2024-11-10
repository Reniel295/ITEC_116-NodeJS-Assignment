import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('prime/:numberParam')
    getPrime(@Param('numberParam') numberParam: string): string {
        const numberToCheck = parseInt(numberParam, 10);

        if (isNaN(numberToCheck) || numberToCheck < 1) {
            return 'You must provide a positive integer';
        }

        function isPrime(numberToCheck: number): boolean {
            for (let divisor = 2; divisor < numberToCheck; divisor++) {
                if (numberToCheck % divisor === 0) {
                    return false;
                }
            }
            return numberToCheck > 1;
        }
        
        return JSON.stringify({
            isPrime: isPrime(numberToCheck),
        });
    }
}