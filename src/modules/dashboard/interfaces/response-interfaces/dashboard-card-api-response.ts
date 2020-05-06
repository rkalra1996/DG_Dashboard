export interface DashboardCardAPIResponseInterface {
    status: number;
    data: {
        questions: Array<object>;
        stats: object;
    };
}
