

            export interface Language {
                name: string;
            }
        
            export interface Country {
                name: string;
                capital: string;
                emojiU: string;
                languages: Language[];
            }
        
            export interface Continent {
                name: string;
                countries: any
            }
        
            export interface Data {
                continents: Continent[];
            }
        
            export interface RootObject {
                data: Data;
            }
        
  
    // export interface Data{
    //     continents: {
    //             countries:{
    //                 name: string;
    //                 capital: string;
    //                 emojiU: string;
    //                 languages:{
    //                   name: string
    //                 }[];
    //             }[];
    //     }[];
    // }



