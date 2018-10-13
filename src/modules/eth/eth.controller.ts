import { Get, Controller } from '@nestjs/common';
import { EthService } from './eth.service';

@Controller()
export class EthController {
    constructor(private readonly ethService: EthService) {}

    @Get('/sprint2.1')
    sptint2_1(): Promise<string> {
        return this.ethService.sptint2_1();
    }
}
