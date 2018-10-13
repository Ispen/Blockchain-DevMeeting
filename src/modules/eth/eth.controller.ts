import { Get, Controller } from '@nestjs/common';
import { EthService } from './eth.service';

@Controller()
export class EthController {
    constructor(private readonly ethService: EthService) {}

    @Get('/sprint2.1')
    sprint2_1(): Promise<string> {
        return this.ethService.sprint2_1();
    }
    @Get('/sprint2.2')
    sprint2_2(): Promise<string> {
        return this.ethService.sprint2_2();
    }
}
