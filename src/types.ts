export module namespace {

    export interface Language {
        name: string;
        code: string;
        native: string;
    }

    export interface CountryType {
        name: string;
        capital: string;
        emojiU: string;
        languages: Language[];
    }

    export interface Continent {
        countries: CountryType[];
    }

    export interface Data {
        continents: Continent[];
    }

    export interface RootObject {
        data: Data;
    }

}

