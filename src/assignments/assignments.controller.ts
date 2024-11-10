import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    // Factorial function
    @Get('factorial/:numberParam')
    factorial(@Param('numberParam') numberParam: string): any {
        const numToCalculate = parseInt(numberParam, 10);

        if (isNaN(numToCalculate) || numToCalculate < 0) {
            throw new Error('You must provide a positive number');
        }

        function calculateFactorial(num: number): number {
            if (num === 0) {
                return 1;
            }
            return num * calculateFactorial(num - 1);
        }

        return { "factorial": calculateFactorial(numToCalculate) };
    }
}