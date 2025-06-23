import { Logger } from '@nestjs/common';
export declare class AppController {
    private readonly logger;
    constructor(logger: Logger);
    handleTopic1Message(data: any): Promise<any>;
    handleTopic2Message(data: any): Promise<any>;
}
