import { GlobalCardBodyBlockInterface } from './global-card-body-block-interface';
import { DonutChartInterface } from './donut-chart-intrface';

export interface GlobalCardInterface {
    question: string;
    chart: Array<DonutChartInterface>;
    blocks: Array<GlobalCardBodyBlockInterface>;
}
