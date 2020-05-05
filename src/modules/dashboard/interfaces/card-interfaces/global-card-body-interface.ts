interface GlobalCardBodyBlockInterface {
    title_text: string;
    body_text?: string;
    view_more_link?: string;
    percentage_accuracy?: string | number;
    percentage_placeholder?: string;
}

export interface GlobalCardBodyInterface {
    question?: string;
    cards?: Array<GlobalCardBodyBlockInterface>;
}
