export interface IWords {
    id: string;
    order: number;
    en: string;
    transcription: string;
    ru: string;
    ruFull: string;
    learned: boolean;
    unlearned: boolean;
    repetitions: number;
}