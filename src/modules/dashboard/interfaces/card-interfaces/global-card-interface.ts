import { GlobalCardBodyBlockInterface } from './global-card-body-block-interface';
import { DonutChartInterface } from './donut-chart-intrface';

export interface GlobalCardInterface {
    question: string;
    chart: {
        id?: string | number;
        data: Array<DonutChartInterface>;
    };
    blocks: Array<GlobalCardBodyBlockInterface>;
}
