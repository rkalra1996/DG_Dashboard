import { DonutChartInterface } from './donut-chart-intrface';
import { GlobalCardBodyBlockInterface } from './global-card-body-block-interface';


export interface GlobalCardBodyInterface {
    question?: string;
    blocks?: Array<GlobalCardBodyBlockInterface>;
    chart?: Array<DonutChartInterface>;
}
