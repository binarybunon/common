import { Stan } from "node-nats-streaming";
export declare abstract class Publisher {
    abstract subject: string;
    private client;
    constructor(client: Stan);
    publish(data: any): Promise<void>;
}
