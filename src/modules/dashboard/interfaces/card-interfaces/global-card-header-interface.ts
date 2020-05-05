interface GlobalHeaderBlockInterface {
    blockType: string;
    blockUrl?: string;
    blockText?: string;
    blockSubText?: string;
    chartData?: object;
}

export interface GlobalCardHeaderInterface {
    blocks: Array<GlobalHeaderBlockInterface>;
}
