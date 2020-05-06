import { GlobalCardInterface } from '../card-interfaces/global-card-interface';
import { GenericCardInterface } from '../stats-viewer-interfaces/generic-card-interface';

export interface DashboardCardsUIResponseInterface {
    cards: Array<GlobalCardInterface>;
    stats: Array<GenericCardInterface>;
}
