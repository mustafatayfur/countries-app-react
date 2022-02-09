import { Language } from "@mui/icons-material";


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
                countries: any;
                name: string;
                country: Array<any>;
            }
        
            export interface Data {
                continents: Continent[];
            }
        
            export interface RootObject {
                data: Data;
            }
        
  
    // export interface Data{
    //     continents: {
    //             name
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



